import css from "./style.sass"
import settings from "./settings"

import { after } from "@cumcord/patcher"
import { find } from "@cumcord/modules/webpack"
import { React } from "@cumcord/modules/common"
import { createElement } from "react"

let unpatch, uninjectCss
const msg = find(m => m.type?.displayName === "MessageContent")

export default ({ persist }) => {
    return {
        onLoad() {
            if (persist.ghost.text == undefined) persist.store.text = true
            if (persist.ghost.quote == undefined) persist.store.quote = true
            uninjectCss = css()
            unpatch = after("type", msg, (_, res) => {
                const message = res.props?.children[0]
                for (const text in message) {
                    if (persist.ghost.text && typeof message[text] === "string") {
                        const lines = message[text].split("\n")
                        let changed = false
                        for (const line in lines) {
                            if (typeof lines[line] !== "string" || !lines[line].startsWith(">")) continue
                            lines[line] = React.createElement("div", { className: "greentext" }, lines[line])
                            changed = true
                        }
                        if (changed === true) message[text] = lines
                    } else if (persist.ghost.quote && message[text]?.props?.className?.includes("blockquoteContainer")) {
                        message[text].props.className += " greentext"
                    }
                }
                return res
            })
        },
        onUnload() {
            unpatch()
            uninjectCss()
        },
        settings: createElement(settings, { persist })
    }
}

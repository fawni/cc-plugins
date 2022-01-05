import { after } from "@cumcord/patcher"
import { findByProps } from "@cumcord/modules/webpack"

const zwsp = ["​", "‌", "‍"]
const sendMessage = findByProps("sendMessage")

let unpatch

function camo(s) {
    return s.split("").map(c => { return c + zwsp[(Math.floor(Math.random() * 3))]}).join("").slice(0, -1)
}

export default () => {
    return {
        onLoad() {
            unpatch = after("sendMessage", sendMessage, (args) => {
                if (args[1].content.startsWith("!camo")) args[1].content = camo(args[1].content.replace("!camo", ""))
                return args
            })
        },
        onUnload() {
            unpatch()
        }
    }
}
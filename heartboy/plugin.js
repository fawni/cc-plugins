import { before } from "@cumcord/patcher";
import { findByProps } from "@cumcord/modules/webpack";

let unpatch;

export function onLoad() {
	unpatch = before("sendMessage", findByProps("sendMessage"), (res) => {
		res[1].content = res[1].content.replace(/<3+/g, (m) =>
			"♡".repeat(m.length - 1)
		);
	});
}

export function onUnload() {
	unpatch();
}

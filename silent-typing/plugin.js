import { instead } from "@cumcord/patcher";
import { findByProps } from "@cumcord/modules/webpack";

let unpatch;
let typingIndicator = findByProps("startTyping");

export default () => {
	return {
		onLoad() {
			unpatch = instead("startTyping", typingIndicator, () => {});
		},
		onUnload() {
			unpatch();
		},
	};
};

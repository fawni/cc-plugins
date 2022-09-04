import settings from "./settings";
import { before } from "@cumcord/patcher";
import { findByProps } from "@cumcord/modules/webpack";
import { persist } from "@cumcord/pluginData";

let unpatch;
let uploadModule = findByProps("uploadFiles");

const rand = () => {
	let res = "";
	const chars =
		"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
	for (var i = 0; i < persist.ghost.filenameLength; i++) {
		res += chars.charAt(Math.floor(Math.random() * chars.length));
	}
	return res;
};

persist.ghost.filenameLength ??= 7;

export default () => {
	return {
		onLoad() {
			unpatch = before("uploadFiles", uploadModule, (res) => {
				let files = res[0]?.uploads;
				for (let i = 0; i < files.length; i++) {
					let file = files[i];
					file.filename = `${rand()}.${file.filename.slice((Math.max(0, file.filename.lastIndexOf(".")) || Infinity) + 1)}`;
				}
			});
		},
		onUnload() {
			unpatch();
		},
		settings,
	};
};

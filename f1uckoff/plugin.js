const handle = (e) => {
	if (e.key == "F1") e.stopPropagation();
};

export default () => {
	return {
		onLoad() {
			document.addEventListener("keydown", handle);
		},
		onUnload() {
			document.removeEventListener("keydown", handle);
		},
	};
};

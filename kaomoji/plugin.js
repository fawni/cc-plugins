import kaomoji from "./kaomoji.json"

let uninject

export default () => {
	return {
		onLoad() {
			uninject = cumcord.commands.addCommand({
				name: "kaomoji",
				description: "appends a kaomoji to your message",
				args: [
					{
						name: "message",
						description: "your message",
						required: false,
					},
					{
						name: "emotion",
						description: "emotion of the kaomoji",
						required: false,
					},
				],
				handler: (ctx) => {
					let emote
					if (!ctx.args.emotion) { // this doesnt look right but its javascript so im not doubting too much
						let emotion = Math.floor(Math.random() * Object.keys(kaomoji).length)
						let idx = Math.floor(Math.random() * Object.values(emotion).length)
						emote = Object.values(kaomoji)[emotion][idx]
					} else {
						if (!kaomoji[ctx.args.emotion]) return cumcord.ui.toasts.showToast({ title: "kaomoji", content: `emotion "${ctx.args.emotion}" was not found`, duration: 3000 })
						let emotion = kaomoji[ctx.args.emotion]
						let idx = Math.floor(Math.random() * Object.values(emotion).length)
						emote = emotion[idx]
					}
					return ctx.args.message ? `${ctx.args.message} ${emote}` : emote
				},
			})
		},
		onUnload() {
			uninject()
		},
	}
}

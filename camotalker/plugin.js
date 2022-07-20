let uninject
const zwsp = ["​", "‌", "‍"]

const camo = (s) => s.split("").map(c => { return c + zwsp[(Math.floor(Math.random() * 3))]}).join("").slice(0, -1)

export default () => {
	return {
		onLoad() {
			uninject = cumcord.commands.addCommand({
				name: "camouflag",
				description: "surrounds your messages with zero width unicode characters",
				args: [
					{
						name: "text",
						description: "text to camouflag",
					},
				],
				handler: (ctx) => {
					return camo(ctx.args.text)
				},
			})
		},
		onUnload() {
			uninject()
		},
	}
}
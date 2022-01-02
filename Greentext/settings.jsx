import { webpack } from "@cumcord/modules"
import { useNest } from "@cumcord/utils"

const SwitchItem = webpack.findByDisplayName("SwitchItem")

export default ({ persist }) => {
	useNest(persist)

	return (
		<div className="greentext_grid">
			<SwitchItem
				note="Convert text preceded by '>' to greentext"
				value={persist.ghost.text ?? true}
				onChange={(value) => (persist.store.text = value)}
			>
				Convert Text
			</SwitchItem>

			<SwitchItem
				note="Convert blockquotes to greentext"
				value={persist.ghost.quote ?? true}
				onChange={(value) => (persist.store.quote = value)}
			>
				Convert Quotes
			</SwitchItem>
		</div>
	)
}

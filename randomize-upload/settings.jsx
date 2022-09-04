import { persist } from '@cumcord/pluginData';
import { useNest } from "@cumcord/utils";
import { findByDisplayName } from "@cumcord/modules/webpack";

const [FormText, TextInput] = [
	findByDisplayName("FormText"),
	findByDisplayName("TextInput"),
];

export default () => {
	useNest(persist);
	return (
		<div className="randomize-grid">
			<FormText>filename length</FormText>
			<TextInput
				note="the length of the randomized filename"
				value={persist.ghost.filenameLength}
				type="text"
				onChange={(value) => {
					if (!isNaN(value) && value >= 0 && value <= 30)
						persist.store.filenameLength = value;
				}}
			/>
		</div>
	);
};

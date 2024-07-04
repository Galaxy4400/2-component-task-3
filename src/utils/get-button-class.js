import { GROUP, NUM } from "../constants";

export function getButtonClass({symbol, group}) {
	const className = ['button'];

	switch (group) {
		case GROUP.NUMBERS: {
			className.push('button_gray');
			break;
		}
		case GROUP.FUNCTIONS: {
			className.push('button_dark');
			break;
		}
		case GROUP.OPERATIONS: {
			className.push('button_orange');
			break;
		}
		default:
			break;
	}

	if (symbol === NUM.ZERO) className.push('button_big');

	return className.join(' ');
}

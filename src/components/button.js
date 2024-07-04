import { GROUP } from '../constants';
import { getButtonClass } from '../utils';

export function Button({ symbol, handler, group, state }) {
	const className = getButtonClass({symbol, group});
	const buttonHandler = () => GROUP.NUMBERS === group ? handler(symbol, state) : handler(state);

	return (
		<button className={className} type="button" onClick={(buttonHandler)}>
			{symbol}
		</button>
	);
}

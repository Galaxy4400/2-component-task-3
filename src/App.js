import { useEffect, useState } from 'react';
import './app.scss';
import { getButtons } from './get-buttons';

export function App() {
	const [displayString, setDisplayString] = useState('');
	const [operand1, setOperand1] = useState('0');
	const [operand2, setOperand2] = useState('');
	const [operator, setOperator] = useState('');

	const state = {
		displayString,
		setDisplayString,
		operand1,
		setOperand1,
		operand2,
		setOperand2,
		operator,
		setOperator,
	};

	const buttons = getButtons(state);

	useEffect(() => {
		setDisplayString(`${operand1} ${operator} ${operand2}`.trim());
	}, [operand1, operator, operand2]);

	return (
		<div className="calculator">
			<div className="calculator__display">
				<input className="calculator__input" value={displayString} type="text" readOnly />
			</div>
			<div className="calculator__buttons calculator-buttons">
				<div className="calculator-buttons__functions buttons-group">
					{buttons.functions.symbols.map((symbol, i) => (
						<button
							className="button button_dark"
							type="button"
							key={i}
							onClick={() => buttons.functions.handler(symbol)}
						>
							{symbol}
						</button>
					))}
				</div>
				<div className="calculator-buttons__operations buttons-group">
					{buttons.operations.symbols.map((symbol, i) => (
						<button
							className="button button_orange"
							type="button"
							key={i}
							onClick={() => buttons.operations.handler(symbol)}
						>
							{symbol}
						</button>
					))}
				</div>
				<div className="calculator-buttons__numbers buttons-group">
					{buttons.numbers.symbols.map((symbol, i) => (
						<button
							className={`button button_gray ${symbol === '0' ? 'button_big' : ''}`}
							type="button"
							key={i}
							onClick={() => buttons.numbers.handler(symbol)}
						>
							{symbol}
						</button>
					))}
				</div>
			</div>
		</div>
	);
}

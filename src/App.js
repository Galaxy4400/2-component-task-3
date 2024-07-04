import './app.scss';
import { useEffect, useState } from 'react';
import { buttons } from './buttons';
import { GROUP } from './constants';
import { Button } from './components/button';

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
					{buttons[GROUP.FUNCTIONS].map(({name, handler}, i) => (
						<Button symbol={name} handler={handler} key={i} state={state} group={GROUP.FUNCTIONS} />
					))}
				</div>
				<div className="calculator-buttons__operations buttons-group">
					{buttons[GROUP.OPERATIONS].map(({name, handler}, i) => (
						<Button symbol={name} handler={handler} key={i} state={state} group={GROUP.OPERATIONS} />
					))}
				</div>
				<div className="calculator-buttons__numbers buttons-group">
					{buttons[GROUP.NUMBERS].map(({name, handler}, i) => (
						<Button symbol={name} handler={handler} key={i} state={state} group={GROUP.NUMBERS} />
					))}
				</div>
			</div>
		</div>
	);
}

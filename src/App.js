import { useEffect, useState } from 'react';
import './app.scss';

const CALCULATOR_FUNCTIONS = ['C', '±', '%'];
const CALCULATOR_OPERATIONS = ['÷', '×', '–', '+', '='];
const CALCULATOR_NUMBERS = ['7', '8', '9', '4', '5', '6', '1', '2', '3', '0', '.'];

export function App() {
	const [resultString, setResultString] = useState('');
	const [operand1, setOperand1] = useState('');
	const [operand2, setOperand2] = useState('');
	const [operator, setOperator] = useState('');

	const isOperator = Boolean(operator);

	useEffect(() => {
		setResultString(`${operand1} ${operator} ${operand2}`.trim());
	}, [operand1, operator, operand2]);

	function numberAction(symbol) {
		!isOperator ? setOperand1(operand1 + symbol) : setOperand2(operand2 + symbol);
	}

	function operationAction(symbol) {
		if (symbol !== '=') {
			setOperator(symbol);
			return;
		}

		switch (operator) {
			case '÷': {
				setOperand1(+operand1 / +operand2);
				break;
			}
			case '×': {
				setOperand1(+operand1 * +operand2);
				break;
			}
			case '–': {
				setOperand1(+operand1 - +operand2);
				break;
			}
			case '+': {
				setOperand1(+operand1 + +operand2);
				break;
			}
			default:
				break;
		}

		setOperator('');
		setOperand2('');
	}

	function functionAction(symbol) {
		switch (symbol) {
			case 'C': {
				setResultString('');
				setOperand1('');
				setOperand2('');
				setOperator('');
				break;
			}
			case '±': {
				!isOperator ? setOperand1(String(-Number(operand1))) : setOperand2(String(-Number(operand2)));
				break;
			}
			case '%': {
				setOperand1(operand1 / 100);
				break;
			}
			default:
				break;
		}
	}

	return (
		<div className="calculator">
			<div className="calculator__display">
				<input className="calculator__input" value={resultString} type="text" readOnly />
			</div>
			<div className="calculator__buttons calculator-buttons">
				<div className="calculator-buttons__functions buttons">
					{CALCULATOR_FUNCTIONS.map((symbol, i) => (
						<button className="button button_dark" type="button" key={i} onClick={() => functionAction(symbol)}>
							{symbol}
						</button>
					))}
				</div>
				<div className="calculator-buttons__operations buttons">
					{CALCULATOR_OPERATIONS.map((symbol, i) => (
						<button className="button button_orange" type="button" key={i} onClick={() => operationAction(symbol)}>
							{symbol}
						</button>
					))}
				</div>
				<div className="calculator-buttons__numbers buttons">
					{CALCULATOR_NUMBERS.map((symbol, i) => (
						<button
							className={`button button_gray${symbol === '0' ? ' button_big' : ''}`}
							type="button"
							key={i}
							onClick={() => numberAction(symbol)}
						>
							{symbol}
						</button>
					))}
				</div>
			</div>
		</div>
	);
}

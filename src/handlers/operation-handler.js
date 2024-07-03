export function operationHandler(symbol, {operator, operand1, operand2, setOperator, setOperand1, setOperand2}) {
	if (symbol !== '=' && !operand2) {
		setOperator(symbol);
		return;
	}

	if (symbol === '=' && operator && !operand2) {
		setOperator('');
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

	setOperator(symbol !== '=' ? symbol : '');
	setOperand2('');
}

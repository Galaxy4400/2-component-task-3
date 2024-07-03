export function functionHandler(symbol, {operator, operand1, operand2, setOperand1, setOperand2, setOperator}) {
	switch (symbol) {
		case 'C': {
			setOperand1('0');
			setOperand2('');
			setOperator('');
			break;
		}
		case '±': {
			!operator ? setOperand1(String(-Number(operand1))) : setOperand2(String(-Number(operand2)));
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

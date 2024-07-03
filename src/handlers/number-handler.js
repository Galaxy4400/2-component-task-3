export function numberHandler(symbol, {operator, operand1, operand2, setOperand1, setOperand2 }) {
	let operand = !operator ? operand1 : operand2;

	if (symbol === '.' && (!operand.length || operand.includes('.'))) return;

	if (operand === '0' && symbol !== '.') operand = '';

	operand += symbol;

	!operator ? setOperand1(operand) : setOperand2(operand);
}

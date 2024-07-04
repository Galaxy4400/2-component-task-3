import { NUM } from "../constants";

export function numberHandler(symbol, {operator, operand1, operand2, setOperand1, setOperand2 }) {
	let operand = !operator ? operand1 : operand2;

	if (symbol === NUM.DOT && (!operand.length || operand.includes(NUM.DOT))) return;

	if (operand === NUM.ZERO && symbol !== NUM.DOT) operand = NUM.NONE;

	operand += symbol;

	!operator ? setOperand1(operand) : setOperand2(operand);
}

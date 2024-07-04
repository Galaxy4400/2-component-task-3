export function switchHandler({operator, operand1, operand2, setOperand1, setOperand2}) {
	!operator ? setOperand1(String(-Number(operand1))) : setOperand2(String(-Number(operand2)));
}

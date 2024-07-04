import { NUM, OPERATOR } from "../constants";

export function minusHandler({operand1, operand2, setOperator, setOperand1, setOperand2}) {
	if (!operand2) {
		setOperator(OPERATOR.MINUS);
		return;
	}

	setOperand1(+operand1 - +operand2);

	setOperator(OPERATOR.MINUS);
	setOperand2(NUM.NONE);
}

import { NUM, OPERATOR } from "../constants";

export function plusHandler({operand1, operand2, setOperator, setOperand1, setOperand2}) {
	if (!operand2) {
		setOperator(OPERATOR.PLUS);
		return;
	}

	setOperand1(+operand1 + +operand2);

	setOperator(OPERATOR.PLUS);
	setOperand2(NUM.NONE);
}

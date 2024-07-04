import { NUM, OPERATOR } from "../constants";

export function divadeHandler({operand1, operand2, setOperator, setOperand1, setOperand2}) {
	if (!operand2) {
		setOperator(OPERATOR.DIVADE);
		return;
	}

	setOperand1(+operand1 / +operand2);

	setOperator(OPERATOR.DIVADE);
	setOperand2(NUM.NONE);
}

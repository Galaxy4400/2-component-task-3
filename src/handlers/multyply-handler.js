import { NUM, OPERATOR } from "../constants";

export function multyplyHandler({operand1, operand2, setOperator, setOperand1, setOperand2}) {
	if (!operand2) {
		setOperator(OPERATOR.MULTYPLY);
		return;
	}

	setOperand1(+operand1 * +operand2);

	setOperator(OPERATOR.MULTYPLY);
	setOperand2(NUM.NONE);
}

import { NUM, OPERATOR } from "../constants";

export function resetHandler({setOperand1, setOperand2, setOperator}) {
	setOperand1(NUM.ZERO);
	setOperand2(NUM.NONE);
	setOperator(OPERATOR.NONE);
}

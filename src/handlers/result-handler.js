import { NUM, OPERATOR } from "../constants";

export function resultHandler({operator, operand1, operand2, setOperator, setOperand1, setOperand2}) {
	if (operator && !operand2) {
		setOperator(OPERATOR.NONE);
		return;
	}

	switch (operator) {
		case OPERATOR.DIVADE: {
			setOperand1(+operand1 / +operand2);
			break;
		}
		case OPERATOR.MULTYPLY: {
			setOperand1(+operand1 * +operand2);
			break;
		}
		case OPERATOR.MINUS: {
			setOperand1(+operand1 - +operand2);
			break;
		}
		case OPERATOR.PLUS: {
			setOperand1(+operand1 + +operand2);
			break;
		}
		default:
			break;
	}

	setOperator(OPERATOR.NONE);
	setOperand2(NUM.NONE);
}

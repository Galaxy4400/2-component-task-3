import { FUNCTION, GROUP, NUM, OPERATOR } from './constants';
import {
	minusHandler,
	multyplyHandler,
	numberHandler,
	plusHandler,
	resultHandler,
	divadeHandler,
	resetHandler,
	switchHandler,
	percentHandler,
} from './handlers';

export const buttons = {
	[GROUP.NUMBERS]: [
		{
			id: NUM.SEVEN,
			name: NUM.SEVEN,
			handler: numberHandler,
		},
		{
			id: NUM.EIGHT,
			name: NUM.EIGHT,
			handler: numberHandler,
		},
		{
			id: NUM.NINE,
			name: NUM.NINE,
			handler: numberHandler,
		},
		{
			id: NUM.FOUR,
			name: NUM.FOUR,
			handler: numberHandler,
		},
		{
			id: NUM.FIVE,
			name: NUM.FIVE,
			handler: numberHandler,
		},
		{
			id: NUM.SIX,
			name: NUM.SIX,
			handler: numberHandler,
		},
		{
			id: NUM.ONE,
			name: NUM.ONE,
			handler: numberHandler,
		},
		{
			id: NUM.TWO,
			name: NUM.TWO,
			handler: numberHandler,
		},
		{
			id: NUM.THREE,
			name: NUM.THREE,
			handler: numberHandler,
		},
		{
			id: NUM.ZERO,
			name: NUM.ZERO,
			handler: numberHandler,
		},
		{
			id: NUM.DOT,
			name: NUM.DOT,
			handler: numberHandler,
		},
	],

	[GROUP.OPERATIONS]: [
		{
			id: OPERATOR.DIVADE,
			name: OPERATOR.DIVADE,
			handler: divadeHandler,
		},
		{
			id: OPERATOR.MULTYPLY,
			name: OPERATOR.MULTYPLY,
			handler: multyplyHandler,
		},
		{
			id: OPERATOR.MINUS,
			name: OPERATOR.MINUS,
			handler: minusHandler,
		},
		{
			id: OPERATOR.PLUS,
			name: OPERATOR.PLUS,
			handler: plusHandler,
		},
		{
			id: FUNCTION.RESULT,
			name: FUNCTION.RESULT,
			handler: resultHandler,
		},
	],

	[GROUP.FUNCTIONS]: [
		{
			id: FUNCTION.RESET,
			name: FUNCTION.RESET,
			handler: resetHandler,
		},
		{
			id: FUNCTION.SWITCH,
			name: FUNCTION.SWITCH,
			handler: switchHandler,
		},
		{
			id: FUNCTION.PERCENT,
			name: FUNCTION.PERCENT,
			handler: percentHandler,
		},
	],
};

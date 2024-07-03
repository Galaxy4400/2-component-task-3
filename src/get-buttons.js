import { functionHandler, numberHandler, operationHandler } from './handlers';

export function getButtons(state) {
	return {
		numbers: {
			symbols: ['7', '8', '9', '4', '5', '6', '1', '2', '3', '0', '.'],
			handler: (symbol) => numberHandler(symbol, state),
		},
		operations: {
			symbols: ['÷', '×', '–', '+', '='],
			handler: (symbol) => operationHandler(symbol, state),
		},
		functions: {
			symbols: ['C', '±', '%'],
			handler: (symbol) => functionHandler(symbol, state),
		},
	}
}

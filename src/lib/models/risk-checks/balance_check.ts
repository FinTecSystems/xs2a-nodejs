import { Currency } from "../currency";

/**
 *
 * @export
 * @interface Xs2aBalanceCheckRequest
 */
export interface Xs2aBalanceCheckRequest {
	/**
	 * Account balance amount to be checked against
	 * @type {number}
	 * @memberof Xs2aBalanceCheckRequest
	 */
	check_amount: number;
	/**
	 * Currency id of check_amount, e.g. EUR
	 * @type {Currency}
	 * @memberof Xs2aBalanceCheckRequest
	 */
	check_currency_id?: Currency;
}

/**
 *
 * @export
 * @interface Xs2aBalanceCheckResponse
 */
export interface Xs2aBalanceCheckResponse {
	/**
	 * Object type, in this case a xs2a_balance_check
	 * @type {string}
	 * @memberof Xs2aBalanceCheckResponse
	 */
	object: 'xs2a_balance_check';
	/**
	 * Account balance amount to be checked against
	 * @type {number}
	 * @memberof Xs2aBalanceCheckResponse
	 */
	check_amount: number;
	/**
	 * Currency id of check_amount, e.g. EUR
	 * @type {Currency}
	 * @memberof Xs2aBalanceCheckResponse
	 */
	check_currency_id?: Currency;
	/**
	 * Indicates whether or not the check was successful
	 * @type {string}
	 * @memberof Xs2aBalanceCheckResponse
	 */
	check_passed: string;
	/**
	 * Creation date of the object
	 * @type {string}
	 * @memberof Xs2aBalanceCheckResponse
	 */
	created_at: string;
}
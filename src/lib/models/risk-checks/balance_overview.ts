import { Currency } from "../currency";

/**
 * XS2A.balance_overview returns the current running total of the chosen account.
 * An XS2A.balance_overview has no additional parameters.
 * Just append an empty object to the XS2A.risk object to indicate you would
 * like this check to be performed.
 * @export
 * @interface Xs2aBalanceOverviewRequest
 */
export interface Xs2aBalanceOverviewRequest {}

/**
 *
 * @export
 * @interface Xs2aBalanceOverviewResponse
 */
export interface Xs2aBalanceOverviewResponse {
	/**
	 * Object type, in this case a xs2a_balance_overview
	 * @type {string}
	 * @memberof Xs2aBalanceOverviewResponse
	 */
	object: 'xs2a_balance_overview';
	/**
	 * Current balance
	 * @type {number}
	 * @memberof Xs2aBalanceOverviewResponse
	 */
	balance: number;
	/**
	 * Current available
	 * @type {number}
	 * @memberof Xs2aBalanceOverviewResponse
	 */
	available: number;
	/**
	 * Current limit (overdraft)
	 * @type {number}
	 * @memberof Xs2aBalanceOverviewResponse
	 */
	limit: number;
	/**
	 * Currency id of above values, e.g. EUR
	 * @type {Currency}
	 * @memberof Xs2aBalanceOverviewResponse
	 */
	currency_id?: Currency;
	/**
	 * Creation date of the object
	 * @type {string}
	 * @memberof Xs2aBalanceOverviewResponse
	 */
	created_at: string;
}
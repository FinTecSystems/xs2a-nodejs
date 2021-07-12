import { Currency } from "../currency";

/**
 * XS2A.cashflow_overview provides an cashflow overview for the requested risk date range. An XS2A.cashflow_overview has no additional parameters. Just append an empty object to the XS2A.risk object to indicate you would like this check to be performed.
 * @export
 * @interface Xs2aCashflowOverviewRequest
 */
export interface Xs2aCashflowOverviewRequest {}
/**
 *
 * @export
 * @interface Xs2aCashflowOverviewResponse
 */
export interface Xs2aCashflowOverviewResponse {
	/**
	 * Creation date of the object
	 * @type {string}
	 * @memberof Xs2aCashflowOverviewResponse
	 */
	created_at: string;
	/**
	 * Object type, in this case xs2a_cashflow_overview
	 * @type {string}
	 * @memberof Xs2aCashflowOverviewResponse
	 */
	object: 'xs2a_cashflow_overview';
	/**
	 *
	 * @type {Array<Xs2aCashflowObject>}
	 * @memberof Xs2aCashflowOverviewResponse
	 */
	cashflow: Xs2aCashflowObject[];
}

/**
 *
 * @export
 * @interface Xs2aCashflowObject
 */
export interface Xs2aCashflowObject {
	/**
	 * Relative month, e.g. current is 0, previous month is -1 and so on
	 * @type {number}
	 * @memberof Xs2aCashflowObject
	 */
	month: number;
	/**
	 * Amount of this month incoming transactions
	 * @type {number}
	 * @memberof Xs2aCashflowObject
	 */
	incoming: number;
	/**
	 * Amount of this month outgoing transactions
	 * @type {number}
	 * @memberof Xs2aCashflowObject
	 */
	outgoing: number;
	/**
	 * The minimum (lowest) balance of the account in that month
	 * @type {number}
	 * @memberof Xs2aCashflowObject
	 */
	minimum_balance: number;
	/**
	 * A count of this month incoming transactions
	 * @type {number}
	 * @memberof Xs2aCashflowObject
	 */
	incoming_transactions: number;
	/**
	 * A count of this month outgoing transactions
	 * @type {number}
	 * @memberof Xs2aCashflowObject
	 */
	outgoing_transactions: number;
	/**
	 * Currency id of above values, e.g. EUR
	 * @type {Currency}
	 * @memberof Xs2aCashflowObject
	 */
	currency_id: Currency;
}
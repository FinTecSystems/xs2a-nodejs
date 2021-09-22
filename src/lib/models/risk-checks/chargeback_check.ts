import { Currency } from "../currency";

/**
 * XS2A.chargeback_check returns the number of detected chargeback transactions for the account. An XS2A.chargeback_check has no additional parameters. Just append an empty object to the XS2A.risk object to indicate you would like this check to be performed.
 * @export
 * @interface Xs2aChargebackCheckRequest
 */
export interface Xs2aChargebackCheckRequest {}
/**
 *
 * @export
 * @interface Xs2aChargebackCheckResponse
 */
export interface Xs2aChargebackCheckResponse {
	/**
	 * Total count of detected chargeback transactions
	 * @type {number}
	 * @memberof Xs2aChargebackCheckResponse
	 */
	chargebacks_count: number;
	/**
	 * Count of chargebacks which was triggered due insufficient funds
	 * @type {number}
	 * @memberof Xs2aChargebackCheckResponse
	 */
	chargebacks_coverage: number;
	/**
	 * Count of chargebacks which was triggered manually
	 * @type {number}
	 * @memberof Xs2aChargebackCheckResponse
	 */
	chargebacks_revoked: number;
	/**
	 * Sum over the amount of all chargebacks
	 * @type {number}
	 * @memberof Xs2aChargebackCheckResponse
	 */
	chargebacks_sum_amount: number;
	/**
	 * Currency id of above values, e.g. EUR
	 * @type {Currency}
	 * @memberof Xs2aChargebackCheckResponse
	 */
	currency_id?: Currency;
	/**
	 * Object type, in this case xs2a_chargeback_check
	 * @type {string}
	 * @memberof Xs2aChargebackCheckResponse
	 */
	object: 'xs2a_chargeback_check';
	/**
	 * Creation date of the object
	 * @type {string}
	 * @memberof Xs2aChargebackCheckResponse
	 */
	created_at: string;
}
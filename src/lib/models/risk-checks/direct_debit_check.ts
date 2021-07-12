import { Currency } from "../currency";

/**
 *
 * @export
 * @interface Xs2aDirectDebitCheckRequest
 */
export interface Xs2aDirectDebitCheckRequest {
	/**
	 * Account balance amount to be checked against
	 * @type {number}
	 * @memberof Xs2aDirectDebitCheckRequest
	 */
	check_amount?: number;
	/**
	 * Currency id of check_amount, e.g. EUR
	 * @type {Currency}
	 * @memberof Xs2aDirectDebitCheckRequest
	 */
	check_currency_id?: Currency;
	/**
	 * Date format is \"YYYY-mm-dd\". An optional field. If a start_date is given, the field \"end_date\" has to be set as well. The start date can be no earlier than the day after the transaction. In case the start date is invalid or not set, the earliest bank work day will be used.
	 * @type {string}
	 * @memberof Xs2aDirectDebitCheckRequest
	 */
	start_date?: string;
	/**
	 * Date format is \"YYYY-mm-dd\". An optional field. The end date has to be at lest 3 days after the start date and can be a maximum of 30 days into the future. If there is no end date given, the maximum of 30 days will be used.
	 * @type {string}
	 * @memberof Xs2aDirectDebitCheckRequest
	 */
	end_date?: string;
}
/**
 *
 * @export
 * @interface Xs2aDirectDebitCheckResponse
 */
export interface Xs2aDirectDebitCheckResponse {
	/**
	 * Account balance amount to be checked against
	 * @type {number}
	 * @memberof Xs2aDirectDebitCheckResponse
	 */
	check_amount: number;
	/**
	 * Currency id of check_amount, e.g. EUR
	 * @type {Currency}
	 * @memberof Xs2aDirectDebitCheckResponse
	 */
	check_currency_id: Currency;
	/**
	 * An optional field. The date format is \"YYYY-mm-dd\". If a start_date is given, the field \"end_date\" has to be set as well. The start date can be no earlier than the day after the transaction.  In case the start date is invalid or not set, the earliest bank work  day will be used.
	 * @type {string}
	 * @memberof Xs2aDirectDebitCheckResponse
	 */
	start_date: string;
	/**
	 * An optional field. The date format is \"YYYY-mm-dd\". The end date has to be at lest 3 days after the start date and can be a maximum of 30 days into the  future. If there is no end date given, the maximum of 30 days will be used.
	 * @type {string}
	 * @memberof Xs2aDirectDebitCheckResponse
	 */
	end_date: string;
	/**
	 * This field represents the response from our system. The values will either be ANY,  DATE or REJECT. If ANY is returned, it should be save to execute the direct debit at  any time. If DATE is returned, we suggest a date for executing the direct debit  in the field recommendation_date. In case of a REJECT it is not recommended to  execute a direct debit, because the amount is likely not be covered. For a REJECT  the returned recommendation_date will always be \"0000-00-00\".
	 * @type {string}
	 * @memberof Xs2aDirectDebitCheckResponse
	 */
	recommendation: string;
	/**
	 * If the recommendation is DATE, this will be the recommended time to execute  a direct debit. In some cases, this date might be out of the start-/end-date  range supplied (reasons might be holidays etc.). In case of REJECT this field  will always be set as \"0000-00-00\".
	 * @type {string}
	 * @memberof Xs2aDirectDebitCheckResponse
	 */
	recommendation_date: string;
	/**
	 * Object type, in this case xs2a_direct_debit_check
	 * @type {string}
	 * @memberof Xs2aDirectDebitCheckResponse
	 */
	object: 'xs2a_direct_debit_check';
	/**
	 * Creation date of the object
	 * @type {string}
	 * @memberof Xs2aDirectDebitCheckResponse
	 */
	created_at: string;
}
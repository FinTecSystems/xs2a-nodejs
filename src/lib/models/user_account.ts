import { Country } from "./country";
import { Currency } from "./currency";

/**
 *
 * @export
 * @interface UserAccountsObject
 */
export interface UserAccountsObject {
	/**
	 * Can be IBAN or other Identifier of the account
	 * @type {string}
	 * @memberof UserAccountsObject
	 */
	identifier: string;
	/**
	 * Holder name
	 * @type {string}
	 * @memberof UserAccountsObject
	 */
	holder: string;
	/**
	 *
	 * @type {string}
	 * @memberof UserAccountsObject
	 */
	description: string;
	/**
	 * IBAN
	 * @type {string}
	 * @memberof UserAccountsObject
	 */
	iban: string;
	/**
	 * BIC
	 * @type {string}
	 * @memberof UserAccountsObject
	 */
	bic: string;
	/**
	 * Account number
	 * @type {string}
	 * @memberof UserAccountsObject
	 */
	account_number: string;
	/**
	 * Bank code
	 * @type {string}
	 * @memberof UserAccountsObject
	 */
	bank_code: string;
	/**
	 * Bank name
	 * @type {string}
	 * @memberof UserAccountsObject
	 */
	bank_name: string;
	/**
	 * Country Id
	 * @type {Country}
	 * @memberof UserAccountsObject
	 */
	country_id: Country;
	/**
	 * Joint Account
	 * @type {string}
	 * @memberof UserAccountsObject
	 */
	joint_account: string;
	/**
	 *
	 * @type {boolean}
	 * @memberof UserAccountsObject
	 */
	transaction_possible: boolean;
	/**
	 * Account type
	 * @type {string}
	 * @memberof UserAccountsObject
	 */
	account_type: string;
	/**
	 * Balance
	 * @type {string}
	 * @memberof UserAccountsObject
	 */
	balance: string;
	/**
	 * Available
	 * @type {string}
	 * @memberof UserAccountsObject
	 */
	available: string;
	/**
	 * Limit
	 * @type {string}
	 * @memberof UserAccountsObject
	 */
	limit: string;
	/**
	 * Currency
	 * @type {Currency}
	 * @memberof UserAccountsObject
	 */
	currency_id: Currency;
	/**
	 * Turnover days
	 * @type {number}
	 * @memberof UserAccountsObject
	 */
	turnover_days: number;
	/**
	 * Turnover available days
	 * @type {number}
	 * @memberof UserAccountsObject
	 */
	turnover_available_days: number;
	/**
	 * Turnover count
	 * @type {number}
	 * @memberof UserAccountsObject
	 */
	turnover_count: number;
	/**
	 * Average account usage
	 * @type {string}
	 * @memberof UserAccountsObject
	 */
	average_account_usage: string;
	/**
	 * Overdraft days
	 * @type {number}
	 * @memberof UserAccountsObject
	 */
	overdraft_days: number;
	/**
	 * Overdraft limit days
	 * @type {number}
	 * @memberof UserAccountsObject
	 */
	overdraft_limit_days: number;
	/**
	 *
	 * @type {UserAccountsObjectCompleteness}
	 * @memberof UserAccountsObject
	 */
	completeness: UserAccountsObjectCompleteness;
	/**
	 *
	 * @type {string}
	 * @memberof UserAccountsObject
	 */
	account_data_available: string;
}

/**
 *
 * @export
 * @interface OtherAccountsObject
 */
export interface OtherAccountsObject {
	/**
	 * name of the account holder
	 * @type {string}
	 * @memberof OtherAccountsObject
	 */
	holder: string;
	/**
	 *
	 * @type {string}
	 * @memberof OtherAccountsObject
	 */
	iban: string;
	/**
	 *
	 * @type {string}
	 * @memberof OtherAccountsObject
	 */
	bic: string;
	/**
	 *
	 * @type {Country}
	 * @memberof OtherAccountsObject
	 */
	country_id: Country;
	/**
	 * name of the bank
	 * @type {string}
	 * @memberof OtherAccountsObject
	 */
	bank_name: string;
	/**
	 *
	 * @type {string}
	 * @memberof OtherAccountsObject
	 */
	type: string;
}


/**
 *
 * @export
 * @interface UserAccountsObjectCompleteness
 */
export interface UserAccountsObjectCompleteness {
	/**
	 *
	 * @type {string}
	 * @memberof UserAccountsObjectCompleteness
	 */
	counter_holder: string;
	/**
	 *
	 * @type {string}
	 * @memberof UserAccountsObjectCompleteness
	 */
	counter_iban: string;
	/**
	 *
	 * @type {string}
	 * @memberof UserAccountsObjectCompleteness
	 */
	purpose: string;
}

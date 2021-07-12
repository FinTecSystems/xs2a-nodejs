import { BankAccount } from "../api/bank-accounts";

/**
 * XS2A.standing_orders_check allows you to retrieve all standing orders from an account. An XS2A.standing_orders_check has no additional parameters. Simply append an empty object to the XS2A.risk object to indicate you would like this check to be performed.
 * @export
 * @interface Xs2aAllAccountsCheckRequest
 */
export interface Xs2aAllAccountsCheckRequest {}

/**
 *
 * @export
 * @interface Xs2aAllAccountsCheckResponse
 */
export interface Xs2aAllAccountsCheckResponse {
	/**
	 *
	 * @type {Array<BankAccount>}
	 * @memberof Xs2aAllAccountsCheckResponse
	 */
	accounts: BankAccount[];
	/**
	 * Object type, in this case xs2a_all_accounts_check
	 * @type {string}
	 * @memberof Xs2aAllAccountsCheckResponse
	 */
	object: 'xs2a_all_accounts_check';
	/**
	 * Creation date of the object
	 * @type {string}
	 * @memberof Xs2aAllAccountsCheckResponse
	 */
	created_at: string;
}
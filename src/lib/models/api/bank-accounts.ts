import { Country } from "../country";
import { Currency } from "../currency";
import { Turnover } from "../turnover";

/**
 *
 * @export
 * @interface BankAccountsList
 */
export interface BankAccountsList {
	/**
	 * Total number of results.
	 * @type {number}
	 * @memberof BankAccountsList
	 */
	total: number;
	/**
	 * Number of objects per page
	 * @type {number}
	 * @memberof BankAccountsList
	 */
	per_page: number;
	/**
	 * Current page.
	 * @type {number}
	 * @memberof BankAccountsList
	 */
	current_page: number;
	/**
	 * Last page, usually the total of available pages.
	 * @type {number}
	 * @memberof BankAccountsList
	 */
	last_page: number;
	/**
	 * URI to next page.
	 * @type {string}
	 * @memberof BankAccountsList
	 */
	next_page_url: string;
	/**
	 * URI to previous page.
	 * @type {string}
	 * @memberof BankAccountsList
	 */
	prev_page_url: string;
	/**
	 * Showing results from index element.
	 * @type {number}
	 * @memberof BankAccountsList
	 */
	from: number;
	/**
	 * Showing results to index element.
	 * @type {number}
	 * @memberof BankAccountsList
	 */
	to: number;
	/**
	 *
	 * @type {Array<BankAccount>}
	 * @memberof BankAccountsList
	 */
	data: BankAccount[];
}

/**
 *
 * @export
 * @interface BankAccount
 */
export interface BankAccount {
	/**
	 * Bank Account ID
	 * @type {string}
	 * @memberof BankAccount
	 */
	id: string;
	/**
	 * Id of the originating BankConnection.
	 * @type {string}
	 * @memberof BankAccount
	 */
	bank_connection_id: string;
	/**
	 * Name of the account holder as reported by the bank
	 * @type {string}
	 * @memberof BankAccount
	 */
	holder: string;
	/**
	 * IBAN of the bank account
	 * @type {string}
	 * @memberof BankAccount
	 */
	iban: string;
	/**
	 * Description of the bank account
	 * @type {string}
	 * @memberof BankAccount
	 */
	description: string;
	/**
	 * BIC of the bank account
	 * @type {string}
	 * @memberof BankAccount
	 */
	bic: string;
	/**
	 * Number of the account
	 * @type {string}
	 * @memberof BankAccount
	 */
	account_number: string;
	/**
	 * bank code of the bank
	 * @type {string}
	 * @memberof BankAccount
	 */
	bank_code: string;
	/**
	 * name of the bank
	 * @type {string}
	 * @memberof BankAccount
	 */
	bank_name: string;
	/**
	 * 2 letter country ID
	 * @type {Country}
	 * @memberof BankAccount
	 */
	country_id: Country;
	/**
	 * The type of the bank of the bank connection
	 * @type {string}
	 * @memberof BankAccount
	 */
	type: string;
	/**
	 * Indicates whether this account has more than one owner.
	 * @type {boolean}
	 * @memberof BankAccount
	 */
	joint_account: boolean;
	/**
	 * Indicates whether this account places payments.
	 * @type {boolean}
	 * @memberof BankAccount
	 */
	transaction_possible: boolean;
	/**
	 * Date of creation
	 * @type {string}
	 * @memberof BankAccount
	 */
	created_at: string;
	/**
	 * The value bank_account
	 * @type {string}
	 * @memberof BankAccount
	 */
	object: string;
}

/**
 *
 * @export
 * @interface BankAccountBalance
 */
export interface BankAccountBalance {
	/**
	 * Bank Account ID
	 * @type {string}
	 * @memberof BankAccountBalance
	 */
	id: string;
	/**
	 * The available amount. This can be null, if the available amount is not known.
	 * @type {number}
	 * @memberof BankAccountBalance
	 */
	available: number;
	/**
	 * The limit of the account. This can be null, if the limit is not known.
	 * @type {number}
	 * @memberof BankAccountBalance
	 */
	limit: number;
	/**
	 * The current account balance.
	 * @type {number}
	 * @memberof BankAccountBalance
	 */
	balance: number;
	/**
	 * The bank accounts currency code (three-digit, e.g. EUR)
	 * @type {string}
	 * @memberof BankAccountBalance
	 */
	currency_id: Currency;
	/**
	 * The date the balance was seen on.
	 * @type {string}
	 * @memberof BankAccountBalance
	 */
	date: string;
	/**
	 * Date of creation
	 * @type {string}
	 * @memberof BankAccountBalance
	 */
	created_at: string;
	/**
	 * The value bank_account
	 * @type {string}
	 * @memberof BankAccountBalance
	 */
	object: string;
}

/**
 *
 * @export
 * @interface BankAccountTurnovers
 */
export interface BankAccountTurnovers {
	/**
	 * Bank Account ID
	 * @type {string}
	 * @memberof BankAccountTurnovers
	 */
	id: string;
	/**
	 * The list of turnovers.
	 * @type {Array<Turnover>}
	 * @memberof BankAccountTurnovers
	 */
	turnovers: Turnover[];
	/**
	 * The number of days requested
	 * @type {number}
	 * @memberof BankAccountTurnovers
	 */
	days: number;
	/**
	 * The date the turnovers were seen on.
	 * @type {string}
	 * @memberof BankAccountTurnovers
	 */
	date: string;
	/**
	 * Date of creation of the turnovers object.
	 * @type {string}
	 * @memberof BankAccountTurnovers
	 */
	created_at: string;
	/**
	 * The value bank_account_turnovers
	 * @type {string}
	 * @memberof BankAccountTurnovers
	 */
	object: string;
}
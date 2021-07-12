import { Country } from "../country";
import { Language } from "../language";

/**
 *
 * @export
 * @interface BankConnectionRequest
 */
export interface BankConnectionRequest {
	/**
	 * The mode, how to sync the bank connection. full, shared or none.
	 * @type {string}
	 * @memberof BankConnectionRequest
	 */
	sync_mode?: SyncMode;
	/**
	 * The BIC of the bank, if known already.
	 * @type {string}
	 * @memberof BankConnectionRequest
	 */
	bic?: string;
	/**
	 * The country ID of the bank, if known already.
	 * @type {Country}
	 * @memberof BankConnectionRequest
	 */
	country_id?: Country;
	/**
	 * Number of days for collecting turnovers from bank account
	 * @type {number}
	 * @memberof BankConnectionRequest
	 */
	days?: number;
	/**
	 * Number of days to limit the resulting account. After every sync the account will be limited to that amount of days.
	 * @type {number}
	 * @memberof BankConnectionRequest
	 */
	limit_days?: number;
	/**
	 * Mode of account selection. If \"all\" is given, all available accounts from this bankconnectionwill be used. If \"single\"/\"multi\" is given, the customer can pick single/multiple accounts from this connection which will be used.
	 * @type {string}
	 * @memberof BankConnectionRequest
	 */
	account_selection?: AccountSelection;
	/**
	 * Desired language in which the customer interface will be rendered with.
	 * @type {string}
	 * @memberof BankConnectionRequest
	 */
	language?: Language;
	/**
	 * The fints product ID can be enclosed in the initial request. If you have an eIDAS certificate, then you have to send it with every request.
	 * @type {string}
	 * @memberof BankConnectionRequest
	 */
	fints_product_id?: string;
}

/**
 * @export
 * @enum {string}
 */
export enum SyncMode {
	FULL = 'full',
	SHARED = 'shared',
	NONE = 'none'
}
/**
 * @export
 * @enum {string}
 */
export enum AccountSelection {
	ALL = 'all',
	MULTI = 'multi',
	SINGLE = 'single'
}
/**
 *
 * @export
 * @interface BankConnectionSyncRequest
 */
export interface BankConnectionSyncRequest {
	/**
	 * **Only required** if the sync mode is *shared*: Your part of the shared credentials.
	 * @type {string}
	 * @memberof BankConnectionSyncRequest
	 */
	credentials?: string;
	/**
	 * If an error occurred during syncing, you may force a retry. If the sync_fail_counter goes up to 3 no more syncs are allowed.
	 * @type {boolean}
	 * @memberof BankConnectionSyncRequest
	 */
	force?: boolean;
}

/**
 *
 * @export
 * @interface BankConnection
 */
export interface BankConnection {
	/**
	 * Bank Connection ID
	 * @type {string}
	 * @memberof BankConnection
	 */
	id: string;
	/**
	 * Internally used XS2A transaction id.
	 * @type {string}
	 * @memberof BankConnection
	 */
	transaction: string;
	/**
	 * BIC of the bank of the bank connection
	 * @type {string}
	 * @memberof BankConnection
	 */
	bic: string;
	/**
	 * The name of the bank of the bank connection
	 * @type {string}
	 * @memberof BankConnection
	 */
	bank_name: string;
	/**
	 * 2 letter country ID
	 * @type {Country}
	 * @memberof BankConnection
	 */
	country_id: Country;
	/**
	 * The mode how the bank connection is synced. full, shared or none.
	 * @type {string}
	 * @memberof BankConnection
	 */
	sync_mode: string;
	/**
	 * Indicates whether the sync is active
	 * @type {boolean}
	 * @memberof BankConnection
	 */
	sync_active: boolean;
	/**
	 * ???
	 * @type {string}
	 * @memberof BankConnection
	 */
	sync_message: string;
	/**
	 * A counter of failed syncs for this connection
	 * @type {number}
	 * @memberof BankConnection
	 */
	sync_fail_counter: number;
	/**
	 * The date when the connection was last synced
	 * @type {string}
	 * @memberof BankConnection
	 */
	last_synced: string;
	/**
	 * The consent is valid until the given date (Format: YYYY-MM-DD).
	 * @type {string}
	 * @memberof BankConnection
	 */
	consent_valid_until: string;
	/**
	 * Indicates whether this bank connection is in test mode
	 * @type {boolean}
	 * @memberof BankConnection
	 */
	testmode: boolean;
	/**
	 * Date of creation
	 * @type {string}
	 * @memberof BankConnection
	 */
	created_at: string;
	/**
	 * The value bank_connection
	 * @type {string}
	 * @memberof BankConnection
	 */
	object: string;
}
/**
 *
 * @export
 * @interface BankConnectionList
 */
export interface BankConnectionList {
	/**
	 * Total number of results.
	 * @type {number}
	 * @memberof BankConnectionList
	 */
	total: number;
	/**
	 * Number of objects per page
	 * @type {number}
	 * @memberof BankConnectionList
	 */
	per_page: number;
	/**
	 * Current page.
	 * @type {number}
	 * @memberof BankConnectionList
	 */
	current_page: number;
	/**
	 * Last page, usually the total of available pages.
	 * @type {number}
	 * @memberof BankConnectionList
	 */
	last_page: number;
	/**
	 * URI to next page.
	 * @type {string}
	 * @memberof BankConnectionList
	 */
	next_page_url: string;
	/**
	 * URI to previous page.
	 * @type {string}
	 * @memberof BankConnectionList
	 */
	prev_page_url: string;
	/**
	 * Showing results from index element.
	 * @type {number}
	 * @memberof BankConnectionList
	 */
	from: number;
	/**
	 * Showing results to index element.
	 * @type {number}
	 * @memberof BankConnectionList
	 */
	to: number;
	/**
	 *
	 * @type {Array<BankConnection>}
	 * @memberof BankConnectionList
	 */
	data: BankConnection[];
}
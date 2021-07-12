import { Country } from "../country"
import { Turnover } from "../turnover"

/**
 *
 * @export
 * @interface Xs2aAccountSnapshotRequest
 */
export interface Xs2aAccountSnapshotRequest {
	/**
	 * Range in days which should be used (min value: 10, max value: 365)
	 * @type {number}
	 * @memberof Xs2aAccountSnapshotRequest
	 */
	days?: number;
	/**
	 * A date in the format yyyy-mm-dd
	 * @type {string}
	 * @memberof Xs2aAccountSnapshotRequest
	 */
	from?: string;
	/**
	 * A date in the format yyyy-mm-dd
	 * @type {string}
	 * @memberof Xs2aAccountSnapshotRequest
	 */
	to?: string;
	/**
	 *
	 * @type {Filters}
	 * @memberof Xs2aAccountSnapshotRequest
	 */
	filters?: Filters;
	/**
	 * True, if you want to receive all accounts including their turnovers
	 * @type {boolean}
	 * @memberof Xs2aAccountSnapshotRequest
	 */
	all_accounts?: boolean;
	/**
	 * True, if you want full categorization of the turnovers
	 * @type {boolean}
	 * @memberof Xs2aAccountSnapshotRequest
	 */
	all_tags?: boolean;
}

/**
 *
 * @export
 */
export type Filters = string[]

/**
 *
 * @export
 */
export enum AccountSnapshotFormat {
	PDF = "pdf",
	CSV = "csv",
	JSON = "json",
	JSON2 = "json2",
}

/**
 *
 * @export
 * @interface Xs2aAccountSnapshotResponse
 */
export interface Xs2aAccountSnapshotResponse {
	/**
	 * Object type, in this case a xs2a_account_snapshot
	 * @type {string}
	 * @memberof Xs2aAccountSnapshotResponse
	 */
	object: 'xs2a_account_snapshot';
	/**
	 * Range in days that were used
	 * @type {number}
	 * @memberof Xs2aAccountSnapshotResponse
	 */
	days: number;
	/**
	 * The start date in the format yyyy-mm-dd
	 * @type {string}
	 * @memberof Xs2aAccountSnapshotResponse
	 */
	from: string;
	/**
	 * The end date in the format yyyy-mm-dd
	 * @type {string}
	 * @memberof Xs2aAccountSnapshotResponse
	 */
	to: string;
	/**
	 * Filter account statements
	 * @type {Array<string>}
	 * @memberof Xs2aAccountSnapshotResponse
	 */
	filters: Filters,
	/**
	 * 1, if the turnovers were fully categorized, 0 otherwise
	 * @type {boolean}
	 * @memberof Xs2aAccountSnapshotResponse
	 */
	all_tags: boolean;
	/**
	 * Creation date of the object
	 * @type {string}
	 * @memberof Xs2aAccountSnapshotResponse
	 */
	created_at: string;
}

/**
 * This response describes the JSON2 response of this endpoint
 * @export
 */
export type AccountSnapshotJSON2 = AccountStatement[]

/**
 *
 * @export
 * @interface AccountStatement
 */
export interface AccountStatement {
	/**
	 *
	 * @type {AccountStatementAccount}
	 * @memberof AccountStatement
	 */
	account: AccountStatementAccount;
	/**
	 *
	 * @type {AccountStatementBalance}
	 * @memberof AccountStatement
	 */
	balance: AccountStatementBalance;
	/**
	 *
	 * @type {AccountStatementTurnovers}
	 * @memberof AccountStatement
	 */
	turnovers: AccountStatementTurnovers;
}

/**
 *
 * @export
 * @interface AccountStatementAccount
 */
export interface AccountStatementAccount {
	/**
	 * Name of the account holder
	 * @type {string}
	 * @memberof AccountStatementAccount
	 */
	holder: string;
	/**
	 * Name of the account
	 * @type {string}
	 * @memberof AccountStatementAccount
	 */
	description: string;
	/**
	 * IBAN of the account
	 * @type {string}
	 * @memberof AccountStatementAccount
	 */
	iban: string;
	/**
	 * BIC of the account
	 * @type {string}
	 * @memberof AccountStatementAccount
	 */
	bic: string;
	/**
	 * 2-letter country code of the account
	 * @type {Country}
	 * @memberof AccountStatementAccount
	 */
	country_id: Country;
	/**
	 * Indicates whether this is a joint account
	 * @type {boolean}
	 * @memberof AccountStatementAccount
	 */
	joint_account: boolean;
}
/**
 *
 * @export
 * @interface AccountStatementBalance
 */
export interface AccountStatementBalance {
	/**
	 * The available amount. This can be null, if the available amount is not known.
	 * @type {number}
	 * @memberof AccountStatementBalance
	 */
	available: number;
	/**
	 * The limit of the account. This can be null, if the limit is not known.
	 * @type {number}
	 * @memberof AccountStatementBalance
	 */
	limit: number;
	/**
	 * The current account balance.
	 * @type {number}
	 * @memberof AccountStatementBalance
	 */
	balance: number;
	/**
	 * The bank accounts currency code (three-digit, e.g. EUR)
	 * @type {string}
	 * @memberof AccountStatementBalance
	 */
	currency: string;
	/**
	 * The date the balance was seen on.
	 * @type {string}
	 * @memberof AccountStatementBalance
	 */
	date: string;
}
/**
 * array of turnovers
 * @export
 * @interface AccountStatementTurnovers
 */
export interface AccountStatementTurnovers {
	/**
	 *
	 * @type {Array<Turnover>}
	 * @memberof AccountStatementTurnovers
	 */
	turnovers: Turnover[];
	/**
	 * Date of the account snapshot
	 * @type {string}
	 * @memberof AccountStatementTurnovers
	 */
	date: string;
	/**
	 * Indicates how many days the account snapshot includes
	 * @type {number}
	 * @memberof AccountStatementTurnovers
	 */
	days: number;
	/**
	 * Array of filters applied
	 * @type {Array<string>}
	 * @memberof AccountStatementTurnovers
	 */
	filters: string[];
}
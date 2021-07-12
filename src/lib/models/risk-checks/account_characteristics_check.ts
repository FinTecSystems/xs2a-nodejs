/**
 * XS2A.account_characteristics_check allows you to retrieve many possible information about the account, like chargebacks, encashment, loans and other. Simply append an empty object to the XS2A.risk object to indicate you would like this check to be performed.
 * @export
 * @interface Xs2aAccountCharacteristicsCheckRequest
 */
export interface Xs2aAccountCharacteristicsCheckRequest {}

/**
 *
 * @export
 * @interface Xs2aAccountCharacteristicsCheckResponse
 */
export interface Xs2aAccountCharacteristicsCheckResponse {
	/**
	 *
	 * @type {Array<ChargebacksObject>}
	 * @memberof Xs2aAccountCharacteristicsCheckResponse
	 */
	chargebacks: ChargebacksObject[];
	/**
	 *
	 * @type {Array<EncashmentObject>}
	 * @memberof Xs2aAccountCharacteristicsCheckResponse
	 */
	encashment: EncashmentObject[];
	/**
	 *
	 * @type {Array<AccountProfileObject>}
	 * @memberof Xs2aAccountCharacteristicsCheckResponse
	 */
	account_profile: AccountProfileObject[];
	/**
	 *
	 * @type {Array<LoansObject>}
	 * @memberof Xs2aAccountCharacteristicsCheckResponse
	 */
	loans: LoansObject[];
	/**
	 *
	 * @type {Array<FlagsObject>}
	 * @memberof Xs2aAccountCharacteristicsCheckResponse
	 */
	flags: FlagsObject[];
	/**
	 * Object type, in this case xs2a_account_characteristics_check
	 * @type {string}
	 * @memberof Xs2aAccountCharacteristicsCheckResponse
	 */
	object: 'xs2a_account_characteristics_check';
	/**
	 * Creation date of the object
	 * @type {string}
	 * @memberof Xs2aAccountCharacteristicsCheckResponse
	 */
	created_at: string;
}

/**
 *
 * @export
 * @interface ChargebacksObject
 */
export interface ChargebacksObject {
	/**
	 * Total number of chargebacks for lack of cover on all authorized accounts.
	 * @type {number}
	 * @memberof ChargebacksObject
	 */
	chargebacks_coverage_count: number;
	/**
	 * Total amount of money, the return debit due to lack of coverage on all authorized accounts.
	 * @type {number}
	 * @memberof ChargebacksObject
	 */
	chargebacks_coverage_amount: number;
	/**
	 * Total number of chargebacks initiated by the Account Holder on all authorized accounts.
	 * @type {number}
	 * @memberof ChargebacksObject
	 */
	chargebacks_revoke_count: number;
	/**
	 * Grand total of the chargebacks initiated by the Account Holder on all authorized accounts.
	 * @type {number}
	 * @memberof ChargebacksObject
	 */
	chargebacks_revoke_amount: number;
}

/**
 *
 * @export
 * @interface EncashmentObject
 */
export interface EncashmentObject {
	/**
	 * Number of all bookings to debt collection agencies / departments / lawyers.
	 * @type {number}
	 * @memberof EncashmentObject
	 */
	collection_count: number;
	/**
	 * Total of all bookings to debt collection agencies / departments.
	 * @type {number}
	 * @memberof EncashmentObject
	 */
	collection_amount: number;
	/**
	 * Number of different counterholders
	 * @type {number}
	 * @memberof EncashmentObject
	 */
	collection_office_count: number;
}

/**
 *
 * @export
 * @interface AccountProfileObject
 */
export interface AccountProfileObject {
	/**
	 * Number of cash withdrawals
	 * @type {number}
	 * @memberof AccountProfileObject
	 */
	cash_withdrawals: number;
	/**
	 * Number of cash deposits
	 * @type {number}
	 * @memberof AccountProfileObject
	 */
	cash_deposits: number;
}

/**
 *
 * @export
 * @interface LoansObject
 */
export interface LoansObject {
	/**
	 * Number of different recognized loan agreements.
	 * @type {number}
	 * @memberof LoansObject
	 */
	loans_count: number;
	/**
	 * Sum of monthly loan commitments, i. Sum of all rates of current loan commitments.
	 * @type {number}
	 * @memberof LoansObject
	 */
	loans_amount: number;
	/**
	 * The number of different subprime lenders is counted in this feature.
	 * @type {number}
	 * @memberof LoansObject
	 */
	subprime_lender_count: number;
}

/**
 *
 * @export
 * @interface FlagsObject
 */
export interface FlagsObject {
	/**
	 * If there are some gambling usage, it will be true
	 * @type {boolean}
	 * @memberof FlagsObject
	 */
	gambling: boolean;
	/**
	 * If there are some credit card usage, it will be true
	 * @type {boolean}
	 * @memberof FlagsObject
	 */
	creditcard: boolean;
}
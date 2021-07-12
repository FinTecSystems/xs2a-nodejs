/**
 *
 * @export
 * @interface RefundPayoutRequest
 */
export interface RefundPayoutRequest {
	/**
	 * The format of pain file.
	 * @type {string}
	 * @memberof RefundPayoutRequest
	 */
	pain_type: PainTypeEnum;
	/**
	 *
	 * @type {boolean}
	 * @memberof RefundPayoutRequest
	 */
	batch_booking?: boolean;
	/**
	 *
	 * @type {Array<RefundPayoutTransactions>}
	 * @memberof RefundPayoutRequest
	 */
	transactions: RefundPayoutTransactions[];
}

export enum PainTypeEnum {
	Pain00100103 = 'pain.001.001.03',
}

/**
 *
 * @export
 * @interface RefundPayoutErrorResponse
 */
export interface RefundPayoutErrorResponse {
	/**
	 * status code to indicate whether the request was successful
	 * @type {number}
	 * @memberof RefundPayoutErrorResponse
	 */
	code?: number;
	/**
	 * Descriptive message for the status code
	 * @type {string}
	 * @memberof RefundPayoutErrorResponse
	 */
	message?: string;
	/**
	 *
	 * @type {RefundPayoutErrorResponseErrors}
	 * @memberof RefundPayoutErrorResponse
	 */
	errors?: RefundPayoutErrorResponseErrors;
}
/**
 * Contains the validation errors (only set in case there are any)
 * @export
 * @interface RefundPayoutErrorResponseErrors
 */
export interface RefundPayoutErrorResponseErrors {
	/**
	 *
	 * @type {Array<string>}
	 * @memberof RefundPayoutErrorResponseErrors
	 */
	transactions3_amount?: string[];
	/**
	 *
	 * @type {Array<string>}
	 * @memberof RefundPayoutErrorResponseErrors
	 */
	transactions0_type?: string[];
}
/**
 *
 * @export
 * @interface RefundPayoutList
 */
export interface RefundPayoutList {
	/**
	 * Total number of results.
	 * @type {number}
	 * @memberof RefundPayoutList
	 */
	total: number;
	/**
	 * Number of objects per page
	 * @type {number}
	 * @memberof RefundPayoutList
	 */
	per_page: number;
	/**
	 * Current page.
	 * @type {number}
	 * @memberof RefundPayoutList
	 */
	current_page: number;
	/**
	 * Last page, usually the total of available pages.
	 * @type {number}
	 * @memberof RefundPayoutList
	 */
	last_page: number;
	/**
	 * Showing results from index element.
	 * @type {number}
	 * @memberof RefundPayoutList
	 */
	from: number;
	/**
	 * Showing results to index element.
	 * @type {number}
	 * @memberof RefundPayoutList
	 */
	to: number;
	/**
	 *
	 * @type {Array<RefundPayoutObject>}
	 * @memberof RefundPayoutList
	 */
	data: RefundPayoutObject[];
}

/**
 *
 * @export
 * @interface RefundPayoutObject
 */
export interface RefundPayoutObject {
	/**
	 * The message id to get the pain file.
	 * @type {string}
	 * @memberof RefundPayoutObject
	 */
	message_id: string;
	/**
	 *
	 * @type {string}
	 * @memberof RefundPayoutObject
	 */
	created_at: string;
}

/**
 *
 * @export
 * @interface RefundPayoutResponse
 */
export interface RefundPayoutResponse {
	/**
	 * The message id to get the pain file.
	 * @type {string}
	 * @memberof RefundPayoutResponse
	 */
	message_id: string;
}
/**
 *
 * @export
 * @interface RefundPayoutTransactions
 */
export interface RefundPayoutTransactions {
	/**
	 * Internal XS2A transaction id. This id will be the same for the whole transaction.
	 * @type {string}
	 * @memberof RefundPayoutTransactions
	 */
	transaction: string;
	/**
	 * The amount of a given payout or refund.
	 * @type {number}
	 * @memberof RefundPayoutTransactions
	 */
	amount: number;
	/**
	 * The type is payout or refund.
	 * @type {string}
	 * @memberof RefundPayoutTransactions
	 */
	type: TypeEnum;
}

/**
 * @export
 * @enum {string}
 */
export enum TypeEnum {
	REFUND = 'refund',
	PAYOUT = 'payout'
}

/**
 *
 * @export
 * @interface RefundsPayout
 */
export interface RefundsPayout {
	/**
	 * Internal XS2A transaction id. This id will be the same for the whole transaction.
	 * @type {string}
	 * @memberof RefundsPayout
	 */
	transaction: string;
	/**
	 * Sum payout or refund issued.
	 * @type {number}
	 * @memberof RefundsPayout
	 */
	amount_issued: number;
	/**
	 * The type is payout or refund.
	 * @type {string}
	 * @memberof RefundsPayout
	 */
	type: TypeEnum;
	/**
	 * '1', if this bank is a testbank
	 * @type {string}
	 * @memberof RefundsPayout
	 */
	testmode: string;
	/**
	 *
	 * @type {string}
	 * @memberof RefundsPayout
	 */
	created_at: string;
}
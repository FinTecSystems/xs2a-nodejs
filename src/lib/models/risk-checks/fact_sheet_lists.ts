/**
 *
 * @export
 * @interface Xs2aFactSheetListsRequest
 */
export interface Xs2aFactSheetListsRequest {
	/**
	 * If needed limit the fetched turnovers to create a fact_sheet_lists. Default 365. Valid Range: 10 - 365
	 * @type {number}
	 * @memberof Xs2aFactSheetListsRequest
	 */
	limit_turnover_days?: number;
	/**
	 *
	 * @type {Array<Xs2aFactSheetListsFields>}
	 * @memberof Xs2aFactSheetListsRequest
	 */
	fields?: Xs2aFactSheetListsFields[];
}
/**
 *
 * @export
 * @interface Xs2aFactSheetListsFields
 */
export interface Xs2aFactSheetListsFields {
	/**
	 *
	 * @type {Array<string>}
	 * @memberof Xs2aFactSheetListsFields
	 */
	tags: string[];
	/**
	 *
	 * @type {Array<string>}
	 * @memberof Xs2aFactSheetListsFields
	 */
	categories: string[];
	/**
	 *
	 * @type {string}
	 * @memberof Xs2aFactSheetListsFields
	 */
	name: string;
	/**
	 *
	 * @type {number}
	 * @memberof Xs2aFactSheetListsFields
	 */
	min_amount: number;
	/**
	 *
	 * @type {number}
	 * @memberof Xs2aFactSheetListsFields
	 */
	max_amount: number;
}
/**
 * This module allows you to create a lists of filtered transaction data from the reference account. The request can be filtered using the appropriate filters based on a set number of days, categories and/or tags, min. and/or max. amount. As a result, several key characteristics are given per list: transaction total, available days, number of contra accounts, number of transactions. In addition, extensive lists of filtered turnovers, purposes and contra account holders can be downloaded using a specific endpoint.
 * @export
 * @interface Xs2aFactSheetListsResponse
 */
export interface Xs2aFactSheetListsResponse {
	/**
	 *
	 * @type {Array<Xs2aFactSheetListsResponseFields>}
	 * @memberof Xs2aFactSheetListsResponse
	 */
	fields: Xs2aFactSheetListsResponseFields[];
	/**
	 *
	 * @type {number}
	 * @memberof Xs2aFactSheetListsResponse
	 */
	days: number;
	/**
	 *
	 * @type {Array<Xs2aFactSheetListsResponseResult>}
	 * @memberof Xs2aFactSheetListsResponse
	 */
	result: Xs2aFactSheetListsResponseResult[];
	/**
	 * Creation date of the object
	 * @type {string}
	 * @memberof Xs2aFactSheetListsResponse
	 */
	created_at: string;
	/**
	 *
	 * @type {string}
	 * @memberof Xs2aFactSheetListsResponse
	 */
	object: string;
}
/**
 *
 * @export
 * @interface Xs2aFactSheetListsResponseFields
 */
export interface Xs2aFactSheetListsResponseFields {
	/**
	 *
	 * @type {string}
	 * @memberof Xs2aFactSheetListsResponseFields
	 */
	name: string;
	/**
	 *
	 * @type {Array<string>}
	 * @memberof Xs2aFactSheetListsResponseFields
	 */
	tags: string[];
	/**
	 *
	 * @type {Array<string>}
	 * @memberof Xs2aFactSheetListsResponseFields
	 */
	categories: string[];
	/**
	 *
	 * @type {number}
	 * @memberof Xs2aFactSheetListsResponseFields
	 */
	min_amount: number;
	/**
	 *
	 * @type {number}
	 * @memberof Xs2aFactSheetListsResponseFields
	 */
	max_amount: number;
}
/**
 *
 * @export
 * @interface Xs2aFactSheetListsResponseFields1
 */
export interface Xs2aFactSheetListsResponseFields1 {
	/**
	 *
	 * @type {string}
	 * @memberof Xs2aFactSheetListsResponseFields1
	 */
	name: string;
	/**
	 *
	 * @type {Array<string>}
	 * @memberof Xs2aFactSheetListsResponseFields1
	 */
	categories: string[];
	/**
	 *
	 * @type {Array<string>}
	 * @memberof Xs2aFactSheetListsResponseFields1
	 */
	tags: string[];
	/**
	 *
	 * @type {number}
	 * @memberof Xs2aFactSheetListsResponseFields1
	 */
	min_amount: number;
	/**
	 *
	 * @type {number}
	 * @memberof Xs2aFactSheetListsResponseFields1
	 */
	max_amount: number;
}
/**
 *
 * @export
 * @interface Xs2aFactSheetListsResponseResult
 */
export interface Xs2aFactSheetListsResponseResult {
	/**
	 *
	 * @type {Xs2aFactSheetListsResponseFields1}
	 * @memberof Xs2aFactSheetListsResponseResult
	 */
	fields: Xs2aFactSheetListsResponseFields1;
	/**
	 *
	 * @type {number}
	 * @memberof Xs2aFactSheetListsResponseResult
	 */
	turnovers_count: number;
	/**
	 *
	 * @type {number}
	 * @memberof Xs2aFactSheetListsResponseResult
	 */
	sum_amounts: number;
	/**
	 *
	 * @type {number}
	 * @memberof Xs2aFactSheetListsResponseResult
	 */
	timespan: number;
	/**
	 *
	 * @type {number}
	 * @memberof Xs2aFactSheetListsResponseResult
	 */
	distinct_counter_holders: number;
	/**
	 *
	 * @type {number}
	 * @memberof Xs2aFactSheetListsResponseResult
	 */
	turnovers: number;
}
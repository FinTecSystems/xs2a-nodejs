/**
 * The Income Check provides an overview of the account holder's various types of income. Each type of income is listed separately and the corresponding key figures are calculated so that the customer can only take into account the types of income that are relevant for him/her.
 * @export
 * @interface Xs2aIncomeCheckRequest
 */
export interface Xs2aIncomeCheckRequest {
}
/**
 *
 * @export
 * @interface Xs2aIncomeCheckResponse
 */
export interface Xs2aIncomeCheckResponse {
    /**
     *
     * @type {Xs2aIncomeCheckResponseData}
     * @memberof Xs2aIncomeCheckResponse
     */
    data: Xs2aIncomeCheckResponseData;
    /**
     * Creation date of the object
     * @type {string}
     * @memberof Xs2aIncomeCheckResponse
     */
    created_at: string;
}
/**
 *
 * @export
 * @interface Xs2aIncomeCheckResponseData
 */
export interface Xs2aIncomeCheckResponseData {
    /**
     *
     * @type {number}
     * @memberof Xs2aIncomeCheckResponseData
     */
    full_months_count: number;
    /**
     *
     * @type {Xs2aIncomeCheckResponseDataCategoryShortName}
     * @memberof Xs2aIncomeCheckResponseData
     */
    category_short_name: Xs2aIncomeCheckResponseDataCategoryShortName;
}
/**
 *
 * @export
 * @interface Xs2aIncomeCheckResponseDataCategoryShortName
 */
export interface Xs2aIncomeCheckResponseDataCategoryShortName {
    /**
     *
     * @type {any}
     * @memberof Xs2aIncomeCheckResponseDataCategoryShortName
     */
    monthly_sums: any;
    /**
     *
     * @type {number}
     * @memberof Xs2aIncomeCheckResponseDataCategoryShortName
     */
    months_sums_median: number;
    /**
     *
     * @type {number}
     * @memberof Xs2aIncomeCheckResponseDataCategoryShortName
     */
    months_sums_minimum: number;
    /**
     *
     * @type {string}
     * @memberof Xs2aIncomeCheckResponseDataCategoryShortName
     */
    min_date: string;
    /**
     *
     * @type {string}
     * @memberof Xs2aIncomeCheckResponseDataCategoryShortName
     */
    max_date: string;
    /**
     *
     * @type {number}
     * @memberof Xs2aIncomeCheckResponseDataCategoryShortName
     */
    current_payment: number;
    /**
     *
     * @type {number}
     * @memberof Xs2aIncomeCheckResponseDataCategoryShortName
     */
    forecast: number;
    /**
     *
     * @type {number}
     * @memberof Xs2aIncomeCheckResponseDataCategoryShortName
     */
    forecast_month_count: number;
    /**
     *
     * @type {number}
     * @memberof Xs2aIncomeCheckResponseDataCategoryShortName
     */
    current_employers: number;
    /**
     *
     * @type {any}
     * @memberof Xs2aIncomeCheckResponseDataCategoryShortName
     */
    employer: any;
}

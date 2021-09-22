import { Currency } from "../currency";
/**
 * XS2A.overdraft_limit_check returns the number of booking days of the given risk range. The number of days the account used the overdraft limit, the maximum amount of overdraft used, the average and the median used overdraft. An XS2A.overdraft_limit_check has no additional parameters. Just append an empty object to the XS2A.risk object to indicate you would like this check to be performed.
 * @export
 * @interface Xs2aOverdraftLimitCheckRequest
 */
export interface Xs2aOverdraftLimitCheckRequest {
}
/**
 *
 * @export
 * @interface Xs2aOverdraftLimitCheckResponse
 */
export interface Xs2aOverdraftLimitCheckResponse {
    /**
     * Count of booking days in the date range found
     * @type {number}
     * @memberof Xs2aOverdraftLimitCheckResponse
     */
    booking_days: number;
    /**
     * Count of days the account used the overdraft limit
     * @type {number}
     * @memberof Xs2aOverdraftLimitCheckResponse
     */
    overdraft_limit_days: number;
    /**
     * Maximum amount the overdraft was used in that date range
     * @type {number}
     * @memberof Xs2aOverdraftLimitCheckResponse
     */
    maximum_overdraft_used: number;
    /**
     * Average amount the overdraft was used in that date range
     * @type {number}
     * @memberof Xs2aOverdraftLimitCheckResponse
     */
    average_overdraft_used: number;
    /**
     * Median amount the overdraft was used in that date range
     * @type {number}
     * @memberof Xs2aOverdraftLimitCheckResponse
     */
    median_overdraft_used: number;
    /**
     * Currency id of above values, e.g. EUR
     * @type {Currency}
     * @memberof Xs2aOverdraftLimitCheckResponse
     */
    currency_id?: Currency;
    /**
     * Object type, in this case xs2a_overdraft_limit_check
     * @type {string}
     * @memberof Xs2aOverdraftLimitCheckResponse
     */
    object: 'xs2a_overdraft_limit_check';
    /**
     * Creation date of the object
     * @type {string}
     * @memberof Xs2aOverdraftLimitCheckResponse
     */
    created_at: string;
}

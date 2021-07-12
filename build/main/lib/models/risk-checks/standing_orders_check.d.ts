/**
 * XS2A.standing_orders_check allows you to retrieve all standing orders from an account. An XS2A.standing_orders_check has no additional parameters. Simply append an empty object to the XS2A.risk object to indicate you would like this check to be performed.
 * @export
 * @interface Xs2aStandingOrdersCheckRequest
 */
export interface Xs2aStandingOrdersCheckRequest {
}
/**
 *
 * @export
 * @interface Xs2aStandingOrdersCheckResponse
 */
export interface Xs2aStandingOrdersCheckResponse {
    /**
     *
     * @type {Array<Xs2aStandingOrdersCheckResponseStandingOrders>}
     * @memberof Xs2aStandingOrdersCheckResponse
     */
    standing_orders: Xs2aStandingOrdersCheckResponseStandingOrders[];
    /**
     * Object type, in this case xs2a_standing_orders
     * @type {string}
     * @memberof Xs2aStandingOrdersCheckResponse
     */
    object: 'xs2a_standing_orders';
    /**
     * Creation date of the object
     * @type {string}
     * @memberof Xs2aStandingOrdersCheckResponse
     */
    created_at: string;
}
/**
 *
 * @export
 * @interface Xs2aStandingOrdersCheckResponseStandingOrders
 */
export interface Xs2aStandingOrdersCheckResponseStandingOrders {
    /**
     *
     * @type {any}
     * @memberof Xs2aStandingOrdersCheckResponseStandingOrders
     */
    sender_account: any;
    /**
     *
     * @type {any}
     * @memberof Xs2aStandingOrdersCheckResponseStandingOrders
     */
    recipient_account: any;
    /**
     * Amount to transfer
     * @type {number}
     * @memberof Xs2aStandingOrdersCheckResponseStandingOrders
     */
    amount: number;
    /**
     * Currency id of amount, e.g. EUR
     * @type {string}
     * @memberof Xs2aStandingOrdersCheckResponseStandingOrders
     */
    currency: string;
    /**
     * Purpose of the transfer
     * @type {string}
     * @memberof Xs2aStandingOrdersCheckResponseStandingOrders
     */
    purpose: string;
    /**
     * Frequency of standing order, d = daily, w = weekly, m = monthly, y = yearly
     * @type {string}
     * @memberof Xs2aStandingOrdersCheckResponseStandingOrders
     */
    frequency: string;
    /**
     * Frequency interval, in case of frequency daily or weekly  the range is 1-7 (1 = Monday, 7 = Sunday). In case of monthly  or yearly it is 1-31. 0 in case for a non standardized format.
     * @type {number}
     * @memberof Xs2aStandingOrdersCheckResponseStandingOrders
     */
    frequency_interval: number;
    /**
     * Day of the execution, 1-31. 31 is used in case of execute on the last day of the month.
     * @type {number}
     * @memberof Xs2aStandingOrdersCheckResponseStandingOrders
     */
    day: number;
    /**
     * Date of the first or next execution of the standing order, format YYYY-mm-dd.
     * @type {string}
     * @memberof Xs2aStandingOrdersCheckResponseStandingOrders
     */
    start_execution: string;
    /**
     * Date of the last execution of the standing order, format YYYY-mm-dd.
     * @type {string}
     * @memberof Xs2aStandingOrdersCheckResponseStandingOrders
     */
    end_execution: string;
}

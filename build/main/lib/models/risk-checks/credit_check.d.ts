/**
 * The XS2A.credit_check gathers various information about a customer. The check was designed for example to be used in a loan application process without the need to resort to some other medium.
 * @export
 * @interface Xs2aCreditCheckRequest
 */
export interface Xs2aCreditCheckRequest {
    /**
     *
     * @type {Checks}
     * @memberof Xs2aCreditCheckRequest
     */
    checks?: Checks;
}
/**
 *
 * @export
 * @interface Xs2aCreditCheckResponse
 */
export interface Xs2aCreditCheckResponse {
    /**
     * Indicates which checks were performed
     * @type {Array<string>}
     * @memberof Xs2aCreditCheckResponse
     */
    checks: string[];
    /**
     * Range in days that were used to calculated and gather the desired information
     * @type {number}
     * @memberof Xs2aCreditCheckResponse
     */
    check_days: number;
    /**
     *
     * @type {Xs2aCreditCheckResponseResults}
     * @memberof Xs2aCreditCheckResponse
     */
    results: Xs2aCreditCheckResponseResults;
    /**
     * Object type, in this case xs2a_credit_check
     * @type {string}
     * @memberof Xs2aCreditCheckResponse
     */
    object: 'xs2a_credit_check';
    /**
     * Creation date of the object
     * @type {string}
     * @memberof Xs2aCreditCheckResponse
     */
    created_at: string;
}
/**
 * The keys are the names of the requested checks.
 * @export
 * @interface Xs2aCreditCheckResponseResults
 */
export interface Xs2aCreditCheckResponseResults {
    /**
     *
     * @type {any}
     * @memberof Xs2aCreditCheckResponseResults
     */
    income: any;
    /**
     *
     * @type {any}
     * @memberof Xs2aCreditCheckResponseResults
     */
    rent: any;
}
/**
 *
 * @export
 */
export declare type Checks = string[];

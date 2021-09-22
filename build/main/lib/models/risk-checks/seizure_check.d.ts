/**
 * XS2a.seizure_check allows you to check for a seizire account.
 * @export
 * @interface Xs2aSeizureCheckRequest
 */
export interface Xs2aSeizureCheckRequest {
    /**
     * The limit of turnover days for this check
     * @type {number}
     * @memberof Xs2aSeizureCheckRequest
     */
    days?: number;
}
/**
 *
 * @export
 * @interface Xs2aSeizureCheckResponse
 */
export interface Xs2aSeizureCheckResponse {
    /**
     * 1 if the customers account is a seizure account, 0 if otherwise
     * @type {number}
     * @memberof Xs2aSeizureCheckResponse
     */
    is_seizure: number;
    /**
     * The limit of turnover days for this check
     * @type {number}
     * @memberof Xs2aSeizureCheckResponse
     */
    days?: number;
    /**
     * Object type, in this case xs2a_seizure_check
     * @type {string}
     * @memberof Xs2aSeizureCheckResponse
     */
    object: 'xs2a_seizure_check';
    /**
     * Creation date of the object
     * @type {string}
     * @memberof Xs2aSeizureCheckResponse
     */
    created_at: string;
}

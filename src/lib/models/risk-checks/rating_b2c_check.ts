/**
 * Produces a qualitative evaluation of a bank statement (private accounts) according to various criteria and summarizes these in a school grade system (A-F).
 * @export
 * @interface Xs2aRatingB2CCheck
 */
export interface Xs2aRatingB2CCheckRequest {}

/**
 *
 * @export
 * @interface Xs2aRatingB2CCheckResponse
 */
export interface Xs2aRatingB2CCheckResponse {
	/**
	 * Rating from A - F
	 * @type {string}
	 * @memberof Xs2aRatingB2CCheckResponse
	 */
	rating: string;
	/**
	 *
	 * @type {string}
	 * @memberof Xs2aRatingB2CCheckResponse
	 */
	version: string;
}
/**
 * Produces a qualitative evaluation of a bank statement (business accounts) according to various criteria and summarizes these in a school grade system (A-F).
 * @export
 * @interface Xs2aRatingB2BCheck
 */
export interface Xs2aRatingB2BCheckRequest {}

/**
 *
 * @export
 * @interface Xs2aRatingB2BCheckResponse
 */
export interface Xs2aRatingB2BCheckResponse {
	/**
	 * Rating from A - F
	 * @type {string}
	 * @memberof Xs2aRatingB2BCheckResponse
	 */
	rating: string;
	/**
	 *
	 * @type {string}
	 * @memberof Xs2aRatingB2BCheckResponse
	 */
	version: string;
}
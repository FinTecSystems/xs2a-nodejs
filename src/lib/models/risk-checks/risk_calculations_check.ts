/**
 * XS2A.risk_calculations_check allows you many things
 * @export
 * @interface Xs2aRiskCalculationsCheckRequest
 */
export interface Xs2aRiskCalculationsCheckRequest {
	/**
	 * Array of objects containing many manditory fields.
	 * @type {Array<any>}
	 * @memberof Xs2aRiskCalculationsCheckRequest
	 */
	calculations: any[];
}
/**
 *
 * @export
 * @interface Xs2aRiskCalculationsCheckResponse
 */
export interface Xs2aRiskCalculationsCheckResponse {
	/**
	 *
	 * @type {Array<any>}
	 * @memberof Xs2aRiskCalculationsCheckResponse
	 */
	calculations: any[];
	/**
	 * Creation date of the object
	 * @type {string}
	 * @memberof Xs2aRiskCalculationsCheckResponse
	 */
	created_at: string;
	/**
	 * Object type, in this case xs2a_risk_calculations_check
	 * @type {string}
	 * @memberof Xs2aRiskCalculationsCheckResponse
	 */
	object: 'xs2a_risk_calculations_check';
}
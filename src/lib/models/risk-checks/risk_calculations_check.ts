/**
 * XS2A.risk_calculations_check allows you many things
 * @export
 * @interface Xs2aRiskCalculationsCheckRequest
 */
export interface Xs2aRiskCalculationsCheckRequest {
	/**
	 * Array of objects containing many manditory fields.
	 * @type {Array<Xs2aRiskCalculation>}
	 * @memberof Xs2aRiskCalculationsCheckRequest
	 */
	calculations: Xs2aRiskCalculation[];
}

export interface Xs2aRiskCalculation {
	tags: string[],
	categories: string[],
	functions: string[],
	name: string,
	days?: number,
	from?: string,
	to?: string,
	full_months?: string,
	children_categories?: boolean,
	match_tags_with_categories?: boolean,
}

export interface Xs2aRiskCalculationResponse {
	tags: string[],
	categories: string[],
	functions: string[],
	name: string,
	days?: number,
	from?: string,
	to?: string,
	full_months?: string,
	results: Xs2aRiskCalculationResponseResult,
}

export interface Xs2aRiskCalculationResponseResult {
	count?: number,
}


/**
 *
 * @export
 * @interface Xs2aRiskCalculationsCheckResponse
 */
export interface Xs2aRiskCalculationsCheckResponse {
	/**
	 *
	 * @type {Array<Xs2aRiskCalculationResponse>}
	 * @memberof Xs2aRiskCalculationsCheckResponse
	 */
	calculations: Xs2aRiskCalculationResponse[];
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
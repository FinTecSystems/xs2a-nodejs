/**
 * The P&L check (profit and loss check) provides a simplified P&L statement for B2B customers as well as an overview of other relevant operational KPIs. These can be, for example, other relevant income, expenses and cash flows from the account. In addition, the tax number is also shown (initially, only in Germany).
 * @export
 * @interface Xs2aProfitLossCheckRequest
 */
export interface Xs2aProfitLossCheckRequest {}

/**
 *
 * @export
 * @interface Xs2aProfitLossCheckResponse
 */
export interface Xs2aProfitLossCheckResponse {
	/**
	 *
	 * @type {Xs2aProfitLossCheckResponseResult}
	 * @memberof Xs2aProfitLossCheckResponse
	 */
	result: Xs2aProfitLossCheckResponseResult;
}
/**
 *
 * @export
 * @interface Xs2aProfitLossCheckResponseResult
 */
export interface Xs2aProfitLossCheckResponseResult {
	/**
	 *
	 * @type {Array<string>}
	 * @memberof Xs2aProfitLossCheckResponseResult
	 */
	tax_ids: string[];
	/**
	 *
	 * @type {Xs2aProfitLossCheckResponseResultProfitLoss}
	 * @memberof Xs2aProfitLossCheckResponseResult
	 */
	profit_loss: Xs2aProfitLossCheckResponseResultProfitLoss;
}
/**
 *
 * @export
 * @interface Xs2aProfitLossCheckResponseResultProfitLoss
 */
export interface Xs2aProfitLossCheckResponseResultProfitLoss {
	/**
	 *
	 * @type {string}
	 * @memberof Xs2aProfitLossCheckResponseResultProfitLoss
	 */
	period_start: string;
	/**
	 *
	 * @type {string}
	 * @memberof Xs2aProfitLossCheckResponseResultProfitLoss
	 */
	period_end: string;
	/**
	 *
	 * @type {number}
	 * @memberof Xs2aProfitLossCheckResponseResultProfitLoss
	 */
	period_days: number;
	/**
	 *
	 * @type {number}
	 * @memberof Xs2aProfitLossCheckResponseResultProfitLoss
	 */
	turnover_income: number;
	/**
	 *
	 * @type {number}
	 * @memberof Xs2aProfitLossCheckResponseResultProfitLoss
	 */
	cash_deposit: number;
	/**
	 *
	 * @type {number}
	 * @memberof Xs2aProfitLossCheckResponseResultProfitLoss
	 */
	other_income: number;
	/**
	 *
	 * @type {number}
	 * @memberof Xs2aProfitLossCheckResponseResultProfitLoss
	 */
	rent_expense: number;
	/**
	 *
	 * @type {number}
	 * @memberof Xs2aProfitLossCheckResponseResultProfitLoss
	 */
	supplies_expense: number;
	/**
	 *
	 * @type {number}
	 * @memberof Xs2aProfitLossCheckResponseResultProfitLoss
	 */
	personnel_expense: number;
	/**
	 *
	 * @type {number}
	 * @memberof Xs2aProfitLossCheckResponseResultProfitLoss
	 */
	tax_expense: number;
	/**
	 *
	 * @type {number}
	 * @memberof Xs2aProfitLossCheckResponseResultProfitLoss
	 */
	other_expense: number;
	/**
	 *
	 * @type {number}
	 * @memberof Xs2aProfitLossCheckResponseResultProfitLoss
	 */
	cashflow: number;
	/**
	 *
	 * @type {number}
	 * @memberof Xs2aProfitLossCheckResponseResultProfitLoss
	 */
	cashflow_revenue_ratio: number;
}
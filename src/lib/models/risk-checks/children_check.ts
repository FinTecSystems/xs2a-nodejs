/**
 * The XS2A.children_check gathers payments from governmental facilities, which indicate how many children the account has. This risk-check has no configuration.
 * @export
 * @interface Xs2aChildrenCheck
 */
export interface Xs2aChildrenCheckRequest {}

/**
 *
 * @export
 * @interface Xs2aChildrenCheckResponse
 */
export interface Xs2aChildrenCheckResponse {
	/**
	 * Calculated count of children
	 * @type {number}
	 * @memberof Xs2aChildrenCheckResponse
	 */
	children_at_account_holder: number;
}
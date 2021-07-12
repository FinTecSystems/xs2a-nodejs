/**
 *
 * @export
 * @interface BlacklistAdd
 */
export interface BlacklistAdd {
	/**
	 * A valid IBAN to blacklist.
	 * @type {string}
	 * @memberof BlacklistAdd
	 */
	data: string;
}

/**
 *
 * @export
 * @interface BlacklistObject
 */
export interface BlacklistObject {
	/**
	 * Blacklist item id
	 * @type {string}
	 * @memberof BlacklistObject
	 */
	id: string;
	/**
	 * Type of the entry, e.g. iban
	 * @type {string}
	 * @memberof BlacklistObject
	 */
	type: string;
	/**
	 * IBAN
	 * @type {string}
	 * @memberof BlacklistObject
	 */
	data: string;
}
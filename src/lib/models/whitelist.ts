/**
 *
 * @export
 * @interface WhitelistAdd
 */
export interface WhitelistAdd {
	/**
	 * A valid IBAN to whitelist.
	 * @type {string}
	 * @memberof WhitelistAdd
	 */
	iban: string;
}
/**
 *
 * @export
 * @interface WhitelistObject
 */
export interface WhitelistObject {
	/**
	 * Whitelist item id
	 * @type {string}
	 * @memberof WhitelistObject
	 */
	id: string;
	/**
	 * Hashed representation of iban
	 * @type {string}
	 * @memberof WhitelistObject
	 */
	hash: string;
}
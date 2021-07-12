/**
 * XS2A.holder_identification_check. Using this module a list of names can be checked against the name of the accountholder of all accounts in the bank connection. For the request only the first name and last name must be transferred. As result you get the information if there is a match per account and given name and lastname.
 * @export
 * @interface Xs2aHolderIdentificationCheckRequest
 */
export interface Xs2aHolderIdentificationCheckRequest {
    /**
     * Array of objects containing firstnames and lastnames.
     * @type {Array<any>}
     * @memberof Xs2aHolderIdentificationCheckRequest
     */
    expect_holders: ExpectHoldersObject[];
}
/**
 *
 * @export
 * @interface Xs2aHolderIdentificationCheckResponse
 */
export interface Xs2aHolderIdentificationCheckResponse {
    /**
     * Object type, in this case a xs2a_holder_identification_check
     * @type {string}
     * @memberof Xs2aHolderIdentificationCheckResponse
     */
    object: 'xs2a_holder_identification_check';
    /**
     *
     * @type {Array<ExpectHoldersObject>}
     * @memberof Xs2aHolderIdentificationCheckResponse
     */
    expect_holders: ExpectHoldersObject[];
    /**
     *
     * @type {Array<AccountHoldersObject>}
     * @memberof Xs2aHolderIdentificationCheckResponse
     */
    accounts: AccountHoldersObject[];
    /**
     * Creation date of the object
     * @type {string}
     * @memberof Xs2aHolderIdentificationCheckResponse
     */
    created_at: string;
}
/**
 *
 * @export
 * @interface ExpectHoldersObject
 */
export interface ExpectHoldersObject {
    /**
     * Name to compare against. Usually the surname.
     * @type {string}
     * @memberof ExpectHoldersObject
     */
    name: string;
    /**
     * Firstname to compare against.
     * @type {string}
     * @memberof ExpectHoldersObject
     */
    firstname: string;
}
/**
 *
 * @export
 * @interface AccountHoldersObject
 */
export interface AccountHoldersObject {
    /**
     * Giro
     * @type {string}
     * @memberof AccountHoldersObject
     */
    type: string;
    /**
     * holder
     * @type {string}
     * @memberof AccountHoldersObject
     */
    holder: string;
    /**
     *
     * @type {string}
     * @memberof AccountHoldersObject
     */
    iban: string;
    /**
     *
     * @type {Array<MatchesObject>}
     * @memberof AccountHoldersObject
     */
    matches: MatchesObject[];
}
/**
 *
 * @export
 * @interface MatchesObject
 */
export interface MatchesObject {
    /**
     * name of the expected holder
     * @type {string}
     * @memberof MatchesObject
     */
    expected_holder: string;
    /**
     *
     * @type {string}
     * @memberof MatchesObject
     */
    match: string;
}

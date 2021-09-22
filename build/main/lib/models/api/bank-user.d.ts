/**
 *
 * @export
 * @interface BankUser
 */
export interface BankUser {
    /**
     * transaction ID
     * @type {string}
     * @memberof BankUser
     */
    id: string;
    /**
     * Name of the user
     * @type {string}
     * @memberof BankUser
     */
    name: string;
    /**
     * E-Mail of the test user
     * @type {string}
     * @memberof BankUser
     */
    email: string;
    /**
     * True, if this user has been created with a testing API key, false otherwise.
     * @type {boolean}
     * @memberof BankUser
     */
    testmode: boolean;
    /**
     * Date of creation
     * @type {string}
     * @memberof BankUser
     */
    created_at: string;
    /**
     * The value bank_user
     * @type {string}
     * @memberof BankUser
     */
    object: string;
}
/**
 *
 * @export
 * @interface BankUserRequest
 */
export interface BankUserRequest {
    /**
     * The name of the user.
     * @type {string}
     * @memberof BankUserRequest
     */
    name: string;
    /**
     * The email of the user.
     * @type {string}
     * @memberof BankUserRequest
     */
    email: string;
}
/**
 *
 * @export
 * @interface BankUserList
 */
export interface BankUserList {
    /**
     * Total number of results.
     * @type {number}
     * @memberof BankUserList
     */
    total: number;
    /**
     * Number of objects per page
     * @type {number}
     * @memberof BankUserList
     */
    per_page: number;
    /**
     * Current page.
     * @type {number}
     * @memberof BankUserList
     */
    current_page: number;
    /**
     * Last page, usually the total of available pages.
     * @type {number}
     * @memberof BankUserList
     */
    last_page: number;
    /**
     * URI to next page.
     * @type {string}
     * @memberof BankUserList
     */
    next_page_url?: string;
    /**
     * URI to previous page.
     * @type {string}
     * @memberof BankUserList
     */
    prev_page_url?: string;
    /**
     * Showing results from index element.
     * @type {number}
     * @memberof BankUserList
     */
    from?: number;
    /**
     * Showing results to index element.
     * @type {number}
     * @memberof BankUserList
     */
    to?: number;
    /**
     *
     * @type {Array<BankUser>}
     * @memberof BankUserList
     */
    data: BankUser[];
}
/**
 *
 * @export
 * @interface BankUserAccessToken
 */
export interface BankUserAccessToken {
    /**
     * access Token ID
     * @type {string}
     * @memberof BankUserAccessToken
     */
    id: string;
    /**
     * The Access Token
     * @type {string}
     * @memberof BankUserAccessToken
     */
    token: string;
    /**
     * The date-time this token expires. Note that the access token is valid for one hour. After one hour you have to refresh the token, to be valid another hour.
     * @type {string}
     * @memberof BankUserAccessToken
     */
    valid_until?: string;
    /**
     * Date of creation
     * @type {string}
     * @memberof BankUserAccessToken
     */
    created_at: string;
    /**
     * The value bank_user_access_token
     * @type {string}
     * @memberof BankUserAccessToken
     */
    object: 'bank_user_access_token';
}
/**
 *
 * @export
 * @interface BankUserAccessTokenList
 */
export interface BankUserAccessTokenList {
    /**
     * Total number of results.
     * @type {number}
     * @memberof BankUserAccessTokenList
     */
    total: number;
    /**
     * Number of objects per page
     * @type {number}
     * @memberof BankUserAccessTokenList
     */
    per_page: number;
    /**
     * Current page.
     * @type {number}
     * @memberof BankUserAccessTokenList
     */
    current_page: number;
    /**
     * Last page, usually the total of available pages.
     * @type {number}
     * @memberof BankUserAccessTokenList
     */
    last_page: number;
    /**
     * URI to next page.
     * @type {string}
     * @memberof BankUserAccessTokenList
     */
    next_page_url?: string;
    /**
     * URI to previous page.
     * @type {string}
     * @memberof BankUserAccessTokenList
     */
    prev_page_url?: string;
    /**
     * Showing results from index element.
     * @type {number}
     * @memberof BankUserAccessTokenList
     */
    from?: number;
    /**
     * Showing results to index element.
     * @type {number}
     * @memberof BankUserAccessTokenList
     */
    to?: number;
    /**
     *
     * @type {Array<BankUserAccessToken>}
     * @memberof BankUserAccessTokenList
     */
    data: BankUserAccessToken[];
}

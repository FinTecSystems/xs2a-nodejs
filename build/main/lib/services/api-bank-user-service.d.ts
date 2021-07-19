import { BankUser, BankUserAccessToken, BankUserAccessTokenList, BankUserList, BankUserRequest } from '../models/api/bank-user';
export declare class BankUserService {
    constructor();
    /**
     * Get a list of all xs2a.api bank users
     * @param {number} perPage Items per page
     * @param {number} page page to display
     * @returns {Promise<BankUserList>}
     */
    list(perPage?: number, page?: number): Promise<BankUserList>;
    /**
     * Create a xs2a.api bank user
     * @param {BankUserRequest} request
     * @returns {Promise<BankUser>}
     */
    create(request: BankUserRequest): Promise<BankUser>;
    /**
     * Get a xs2a.api bank user by user-id
     * @param {string} userId id of user to be retrieved
     * @returns {Promise<BankUser>}
     */
    get(userId: string): Promise<BankUser>;
    /**
     * Delete a xs2a.api bank user by user-id
     * @param {string} userId id of user to be retrieved
     * @return {Promise<any>}
     */
    delete(userId: string): Promise<any>;
    /**
     * Create a bank user access token
     * @param {string} userId bank-user-id of the bank user to create an accesstoken for
     * @param {string} validUntil The accesstoken will be valid until the given date (Format: YYYY-MM-DD hh:mm:ss).
     * @returns {Promise<BankUserAccessToken>}
     */
    createAccessToken(userId: string, validUntil: string): Promise<BankUserAccessToken>;
    /**
     * Get a list of accesstokens for a xs2a.api bank user
     * @param {string} userId The user-id for the user to retrieve all accesstoken for.
     * @returns {Promise<BankUserAccessTokenList>}
     */
    listAccessTokens(userId: string): Promise<BankUserAccessTokenList>;
    /**
     * Get a specific accesstoken for a xs2a.api bank user
     * @param {string} userId The user-id for the user to retrieve a specific accesstoken for.
     * @param {string} tokenId ID of the accesstoken to get.
     * @returns {Promise<BankUserAccessToken>}
     */
    getAccessToken(userId: string, tokenId: string): Promise<BankUserAccessToken>;
    /**
     * Refresh an accesstoken
     * @param {string} userId The user-id for the user to refresh a specific accesstoken for.
     * @param {string} tokenId ID of the accesstoken to refresh.
     * @param {string} validUntil The accesstoken is valid until the given date (Format: YYYY-MM-DD hh:mm:ss).
     * @returns {Promise<BankUserAccessToken>}
     */
    refreshAccessToken(userId: string, tokenId: string, validUntil: string): Promise<BankUserAccessToken>;
    /**
     * Delete an accesstoken
     * @param {string} userId The user-id for the user to delete a specific accesstoken for.
     * @param {string} tokenId ID of the accesstoken to delete.
     * @return {Promise<any>}
     */
    deleteAccessToken(userId: string, tokenId: string): Promise<any>;
}

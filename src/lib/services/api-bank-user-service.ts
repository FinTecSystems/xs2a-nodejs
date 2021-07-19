import { axios } from '../axios-instance';
import { BankUser, BankUserAccessToken, BankUserAccessTokenList, BankUserList, BankUserRequest } from '../models/api/bank-user';

export class BankUserService {
	constructor() {}

	/**
	 * Get a list of all xs2a.api bank users
	 * @param {number} perPage Items per page
	 * @param {number} page page to display
	 * @returns {Promise<BankUserList>}
	 */
	public list(perPage: number = 15, page: number = 1): Promise<BankUserList> {
		return new Promise((resolve, reject) => {
			axios
				.get('/api/users', {
					params: {
						page,
						per_page: perPage,
					}
				})
				.then(response => {
					resolve(response.data);
				})
				.catch(error => {
					reject(error.response.data);
				});
		});
	}

	/**
	 * Create a xs2a.api bank user
	 * @param {BankUserRequest} request
	 * @returns {Promise<BankUser>}
	 */
	public create(request: BankUserRequest): Promise<BankUser> {
		return new Promise((resolve, reject) => {
			axios
				.put('/api/users', request)
				.then(response => {
					resolve(response.data);
				})
				.catch(error => {
					reject(error.response.data);
				});
		});
	}

	/**
	 * Get a xs2a.api bank user by user-id
	 * @param {string} userId id of user to be retrieved
	 * @returns {Promise<BankUser>}
	 */
	public get(userId: string): Promise<BankUser> {
		return new Promise((resolve, reject) => {
			axios
				.get(`/api/users/${userId}`)
				.then(response => {
					resolve(response.data);
				})
				.catch(error => {
					reject(error.response.data);
				});
		});
	}

	/**
	 * Delete a xs2a.api bank user by user-id
	 * @param {string} userId id of user to be retrieved
	 * @return {Promise<any>}
	 */
	public delete(userId: string): Promise<any> {
		return new Promise((resolve, reject) => {
			axios
				.delete(`/api/users/${userId}`)
				.then(response => {
					resolve(response.data);
				})
				.catch(error => {
					reject(error.response.data);
				});
		});
	}


	/**
	 * Create a bank user access token
	 * @param {string} userId bank-user-id of the bank user to create an accesstoken for
	 * @param {string} validUntil The accesstoken will be valid until the given date (Format: YYYY-MM-DD hh:mm:ss).
	 * @returns {Promise<BankUserAccessToken>}
	 */
	public createAccessToken(userId: string, validUntil: string): Promise<BankUserAccessToken> {
		return new Promise((resolve, reject) => {
			axios
				.put(`/api/users/${userId}/accesstokens`, {
					valid_until: validUntil,
				})
				.then(response => {
					resolve(response.data);
				})
				.catch(error => {
					reject(error.response.data);
				});
		});
	}

	/**
	 * Get a list of accesstokens for a xs2a.api bank user
	 * @param {string} userId The user-id for the user to retrieve all accesstoken for.
	 * @returns {Promise<BankUserAccessTokenList>}
	 */
	public listAccessTokens(userId: string): Promise<BankUserAccessTokenList> {
		return new Promise((resolve, reject) => {
			axios
				.get(`/api/users/${userId}/accesstokens`)
				.then(response => {
					resolve(response.data);
				})
				.catch(error => {
					reject(error.response.data);
				});
		});
	}

	/**
	 * Get a specific accesstoken for a xs2a.api bank user
	 * @param {string} userId The user-id for the user to retrieve a specific accesstoken for.
	 * @param {string} tokenId ID of the accesstoken to get.
	 * @returns {Promise<BankUserAccessToken>}
	 */
	public getAccessToken(userId: string, tokenId: string): Promise<BankUserAccessToken> {
		return new Promise((resolve, reject) => {
			axios
				.get(`/api/users/${userId}/accesstokens/${tokenId}`)
				.then(response => {
					resolve(response.data);
				})
				.catch(error => {
					reject(error.response.data);
				});
		});
	}

	/**
	 * Refresh an accesstoken
	 * @param {string} userId The user-id for the user to refresh a specific accesstoken for.
	 * @param {string} tokenId ID of the accesstoken to refresh.
	 * @param {string} validUntil The accesstoken is valid until the given date (Format: YYYY-MM-DD hh:mm:ss).
	 * @returns {Promise<BankUserAccessToken>}
	 */
	public refreshAccessToken(userId: string, tokenId: string, validUntil: string): Promise<BankUserAccessToken> {
		return new Promise((resolve, reject) => {
			axios
				.patch(`/api/users/${userId}/accesstokens/${tokenId}`, {
					valid_until: validUntil,
				})
				.then(response => {
					resolve(response.data);
				})
				.catch(error => {
					reject(error.response.data);
				});
		});
	}

	/**
	 * Delete an accesstoken
	 * @param {string} userId The user-id for the user to delete a specific accesstoken for.
	 * @param {string} tokenId ID of the accesstoken to delete.
	 * @return {Promise<any>}
	 */
	public deleteAccessToken(userId: string, tokenId: string): Promise<any> {
		return new Promise((resolve, reject) => {
			axios
				.delete(`/api/users/${userId}/accesstokens/${tokenId}`)
				.then(response => {
					resolve(response.data);
				})
				.catch(error => {
					reject(error.response.data);
				});
		});
	}
}
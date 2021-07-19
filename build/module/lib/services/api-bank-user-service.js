import { axios } from '../axios-instance';
export class BankUserService {
    constructor() { }
    /**
     * Get a list of all xs2a.api bank users
     * @param {number} perPage Items per page
     * @param {number} page page to display
     * @returns {Promise<BankUserList>}
     */
    list(perPage = 15, page = 1) {
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
    create(request) {
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
    get(userId) {
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
    delete(userId) {
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
    createAccessToken(userId, validUntil) {
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
    listAccessTokens(userId) {
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
    getAccessToken(userId, tokenId) {
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
    refreshAccessToken(userId, tokenId, validUntil) {
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
    deleteAccessToken(userId, tokenId) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLWJhbmstdXNlci1zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9zZXJ2aWNlcy9hcGktYmFuay11c2VyLXNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRzFDLE1BQU0sT0FBTyxlQUFlO0lBQzNCLGdCQUFlLENBQUM7SUFFaEI7Ozs7O09BS0c7SUFDSSxJQUFJLENBQUMsVUFBa0IsRUFBRSxFQUFFLE9BQWUsQ0FBQztRQUNqRCxPQUFPLElBQUksT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFO1lBQ3RDLEtBQUs7aUJBQ0gsR0FBRyxDQUFDLFlBQVksRUFBRTtnQkFDbEIsTUFBTSxFQUFFO29CQUNQLElBQUk7b0JBQ0osUUFBUSxFQUFFLE9BQU87aUJBQ2pCO2FBQ0QsQ0FBQztpQkFDRCxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUU7Z0JBQ2hCLE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDeEIsQ0FBQyxDQUFDO2lCQUNELEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFDZCxNQUFNLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUM3QixDQUFDLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQUVEOzs7O09BSUc7SUFDSSxNQUFNLENBQUMsT0FBd0I7UUFDckMsT0FBTyxJQUFJLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTtZQUN0QyxLQUFLO2lCQUNILEdBQUcsQ0FBQyxZQUFZLEVBQUUsT0FBTyxDQUFDO2lCQUMxQixJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUU7Z0JBQ2hCLE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDeEIsQ0FBQyxDQUFDO2lC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
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BankConnectionsService = void 0;
const axios_instance_1 = require("../axios-instance");
class BankConnectionsService {
    constructor() { }
    /**
     * Create a xs2a.api bank user connection
     * @param {BankConnectionRequest} request
     * @returns {Promise<SessionResponse>}
     */
    create(request = {}) {
        return new Promise((resolve, reject) => {
            axios_instance_1.axios
                .put('/v1/api/connections', request)
                .then(response => {
                resolve(response.data);
            })
                .catch(error => {
                reject(error.response.data);
            });
        });
    }
    /**
     * Get a list of all bank connections for a xs2a.api bank user
     * @param {number} perPage Items per page
     * @param {number} page page to display
     * @returns {Promise<BankConnectionList>}
     */
    list(perPage = 15, page = 1) {
        return new Promise((resolve, reject) => {
            axios_instance_1.axios
                .get('/v1/api/connections', {
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
     * Get a specific Bank Connection
     * @param {string} connectionId The connection-id for the connection to be retrieved. You can also pass transaction id here, which you get when you create a bank connection.
     * @returns {Promise<BankConnection>}
     */
    get(connectionId) {
        return new Promise((resolve, reject) => {
            axios_instance_1.axios
                .get(`/v1/api/connections/${connectionId}`)
                .then(response => {
                resolve(response.data);
            })
                .catch(error => {
                reject(error.response.data);
            });
        });
    }
    /**
     * Delete a specific Bank Connection
     * @param {string} connectionId The connection-id for the connection to be deleted.
     * @return {Promise<any>}
     */
    delete(connectionId) {
        return new Promise((resolve, reject) => {
            axios_instance_1.axios
                .delete(`/v1/api/connections/${connectionId}`)
                .then(response => {
                resolve(response.data);
            })
                .catch(error => {
                reject(error.response.data);
            });
        });
    }
    /**
     * Syncing a bank connection means that the login to the bank is repeated, the new balance and the new list of turnovers is fetched and the list of accounts associated to the bank  user is updated accordingly. **Note**: Every event that occurs when synchronizing bank connections is sent out to a webhook URL. See the [Bank Connection Events Section](#tag/XS2A.api-Bank-Connection-Events) for more details. ### Error Handling Any bank connections that are in sync mode full are synced automatically by XS2A. No further steps are needed the  turnovers and balance information on the accounts will always be up to date. If a sync process fails for some reason,  e.g. the user has changed her password, that the automatic sync will stop. The field sync_message will contain more  information about the error. The field sync_fail_counter will have the number of subsequent failures. sync_active will  be set to false an the connection will not be synced again. If the case above the sync can however be forced via the API, using the `force` parameter as described below.  After 3 failures in a row the bank connection will be disabled and can not be synced again. It will have to be deleted and recreated.  The user will have to re-enter his credentials.
     * @summary Sync a bank connection
     * @param {string} connectionId The connection-id for the connection to be synced.
     * @param {BankConnectionSyncRequest} request request parameters for the sync
     * @returns {Promise<SessionResponse | null>} If the sync requires any form of user interaction a structure containing a new wizard_session_key will be returned, similar to creating a new bank connection. The HTTP response code will be 202 in this case. Otherwise it will be 204 (sync process will be executed in the background without user interaction).
     */
    sync(connectionId, request = {}) {
        return new Promise((resolve, reject) => {
            axios_instance_1.axios
                .post(`/v1/api/connections/${connectionId}/sync`, request)
                .then(response => {
                resolve(response.data);
            })
                .catch(error => {
                reject(error.response.data);
            });
        });
    }
    /**
     * Reset a bank connection regardless of its sync mode.
     * @param {string} connectionId The connection-id for the connection to be reset.
     * @returns {Promise<SessionResponse>} A wizard session response containing a new wizard_session_key with a response code 202.
     */
    reset(connectionId) {
        return new Promise((resolve, reject) => {
            axios_instance_1.axios
                .post(`/v1/api/connections/${connectionId}/reset`)
                .then(response => {
                resolve(response.data);
            })
                .catch(error => {
                reject(error.response.data);
            });
        });
    }
}
exports.BankConnectionsService = BankConnectionsService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLWJhbmstY29ubmVjdGlvbnMtc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvc2VydmljZXMvYXBpLWJhbmstY29ubmVjdGlvbnMtc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxzREFBMEM7QUFJMUMsTUFBYSxzQkFBc0I7SUFDbEMsZ0JBQWUsQ0FBQztJQUVoQjs7OztPQUlHO0lBQ0ksTUFBTSxDQUFDLFVBQWlDLEVBQUU7UUFDaEQsT0FBTyxJQUFJLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTtZQUN0QyxzQkFBSztpQkFDSCxHQUFHLENBQUMscUJBQXFCLEVBQUUsT0FBTyxDQUFDO2lCQUNuQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUU7Z0JBQ2hCLE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDeEIsQ0FBQyxDQUFDO2lCQUNELEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFDZCxNQUFNLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUM3QixDQUFDLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0ksSUFBSSxDQUFDLFVBQWtCLEVBQUUsRUFBRSxPQUFlLENBQUM7UUFDakQsT0FBTyxJQUFJLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTtZQUN0QyxzQkFBSztpQkFDSCxHQUFHLENBQUMscUJBQXFCLEVBQUU7Z0JBQzNCLE1BQU0sRUFBRTtvQkFDUCxJQUFJO29CQUNKLFFBQVEsRUFBRSxPQUFPO2lCQUNqQjthQUNELENBQUM7aUJBQ0QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFO2dCQUNoQixPQUFPLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3hCLENBQUMsQ0FBQztpQkFDRCxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQ2QsTUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDN0IsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNKLENBQUM7SUFFRDs7OztPQUlHO0lBQ0ksR0FBRyxDQUFDLFlBQW9CO1FBQzlCLE9BQU8sSUFBSSxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEVBQUU7WUFDdEMsc0JBQUs7aUJBQ0gsR0FBRyxDQUFDLHVCQUF1QixZQUFZLEVBQUUsQ0FBQztpQkFDMUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFO2dCQUNoQixPQUFPLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3hCLENBQUMsQ0FBQztpQkFDRCxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQ2QsTUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDN0IsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNKLENBQUM7SUFFRDs7OztPQUlHO0lBQ0ksTUFBTSxDQUFDLFlBQW9CO1FBQ2pDLE9BQU8sSUFBSSxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEVBQUU7WUFDdEMsc0JBQUs7aUJBQ0gsTUFBTSxDQUFDLHVCQUF1QixZQUFZLEVBQUUsQ0FBQztpQkFDN0MsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFO2dCQUNoQixPQUFPLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3hCLENBQUMsQ0FBQztpQkFDRCxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQ2QsTUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDN0IsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNKLENBQUM7SUFFRDs7Ozs7O09BTUc7SUFDSSxJQUFJLENBQUMsWUFBb0IsRUFBRSxVQUFxQyxFQUFFO1FBQ3hFLE9BQU8sSUFBSSxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEVBQUU7WUFDdEMsc0JBQUs7aUJBQ0gsSUFBSSxDQUFDLHVCQUF1QixZQUFZLE9BQU8sRUFBRSxPQUFPLENBQUM7aUJBQ3pELElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRTtnQkFDaEIsT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN4QixDQUFDLENBQUM7aUJBQ0QsS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUFFO2dCQUNkLE1BQU0sQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzdCLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDSixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNJLEtBQUssQ0FBQyxZQUFvQjtRQUNoQyxPQUFPLElBQUksT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFO1lBQ3RDLHNCQUFLO2lCQUNILElBQUksQ0FBQyx1QkFBdUIsWUFBWSxRQUFRLENBQUM7aUJBQ2pELElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRTtnQkFDaEIsT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN4QixDQUFDLENBQUM7aUJBQ0QsS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUFFO2dCQUNkLE1BQU0sQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzdCLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDSixDQUFDO0NBQ0Q7QUF0SEQsd0RBc0hDIn0=
import { axios } from '../axios-instance';
import { BankConnection, BankConnectionList, BankConnectionRequest, BankConnectionSyncRequest } from '../models/api/bank-connection';
import { SessionResponse } from '../models/session';

export class BankConnectionsService {
	constructor() {}

	/**
	 * Create a xs2a.api bank user connection
	 * @param {BankConnectionRequest} request
	 * @returns {Promise<SessionResponse>}
	 */
	public create(request: BankConnectionRequest = {}): Promise<SessionResponse> {
		return new Promise((resolve, reject) => {
			axios
				.put('/api/connections', request)
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
	public list(perPage: number = 15, page: number = 1): Promise<BankConnectionList> {
		return new Promise((resolve, reject) => {
			axios
				.get('/api/connections', {
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
	public get(connectionId: string): Promise<BankConnection> {
		return new Promise((resolve, reject) => {
			axios
				.get(`/api/connections/${connectionId}`)
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
	public delete(connectionId: string): Promise<any> {
		return new Promise((resolve, reject) => {
			axios
				.delete(`/api/connections/${connectionId}`)
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
	public sync(connectionId: string, request: BankConnectionSyncRequest = {}): Promise<SessionResponse | null> {
		return new Promise((resolve, reject) => {
			axios
				.post(`/api/connections/${connectionId}/sync`, request)
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
	public reset(connectionId: string): Promise<SessionResponse> {
		return new Promise((resolve, reject) => {
			axios
				.post(`/api/connections/${connectionId}/reset`)
				.then(response => {
					resolve(response.data);
				})
				.catch(error => {
					reject(error.response.data);
				});
		});
	}
}
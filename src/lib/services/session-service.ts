import { axios } from '../axios-instance';
import { WizardSessionObject } from '../models/wizard';

export class SessionService {
	constructor() {}

	/**
	 * Get a session object for a transaction ID.
	 * @summary This will return a wizard_session object.
	 * @param {string} transactionId To query this, you can use the transaction-id, which is returned, after the session is created.
	 * @returns {Promise<WizardSessionObject>}
	 */
	public get(transactionId: string): Promise<WizardSessionObject> {
		return new Promise((resolve, reject) => {
			axios
				.get(`/sessions/${transactionId}`)
				.then(response => {
					resolve(response.data);
				})
				.catch(error => {
					reject(error.response.data);
				});
		});
	}
}
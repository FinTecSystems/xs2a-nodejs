import { axios } from '../axios-instance';
import { WizardApiRequest, WizardFinalResponse, WizardResponse } from '../models/wizard';

export class WizardService {
	constructor() {}

	/**
	 * Navigate the Wizard
	 * @param {WizardApiRequest} request The wizard request to send
	 * @returns {Promise<WizardResponse | WizardFinalResponse>} Either another WizardResponse (step) or the final response
	 */
	public navigate(request: WizardApiRequest): Promise<WizardResponse | WizardFinalResponse> {
		return new Promise((resolve, reject) => {
			axios
				.post('/v1.1/wizard', request)
				.then(response => {
					resolve(response.data);
				})
				.catch(error => {
					reject(error.response.data);
				});
		});
	}
}
import { axios } from '../axios-instance';
import { WizardApiRequest, WizardFinalResponse, WizardResponse } from '../models/wizard';

export class APIWizardService {
	constructor() {}

	public navigate(request: WizardApiRequest): Promise<WizardResponse | WizardFinalResponse> {
		return new Promise((resolve, reject) => {
			axios
				.post('/api/wizard', request)
				.then(response => {
					resolve(response.data);
				})
				.catch(error => {
					reject(error.response.data);
				});
		});
	}
}
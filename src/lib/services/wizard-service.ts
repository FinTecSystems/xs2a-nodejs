import { axios } from '../axios-instance';
import { WizardApiRequest, WizardResponse } from '../models/wizard';

export class WizardService {
	constructor() {}

	public navigate(request: WizardApiRequest): Promise<WizardResponse> {
		return new Promise((resolve, reject) => {
			axios
				.post('/wizard', request)
				.then(response => {
					resolve(response.data);
				})
				.catch(error => {
					reject(error.response.data);
				});
		});
	}
}
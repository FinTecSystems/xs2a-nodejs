import { WizardApiRequest, WizardFinalResponse, WizardResponse } from '../models/wizard';
export declare class WizardService {
    constructor();
    /**
     * Navigate the Wizard
     * @param {WizardApiRequest} request The wizard request to send
     * @returns {Promise<WizardResponse | WizardFinalResponse>} Either another WizardResponse (step) or the final response
     */
    navigate(request: WizardApiRequest): Promise<WizardResponse | WizardFinalResponse>;
}

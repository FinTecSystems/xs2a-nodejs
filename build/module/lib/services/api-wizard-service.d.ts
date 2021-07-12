import { WizardApiRequest, WizardFinalResponse, WizardResponse } from '../models/wizard';
export declare class APIWizardService {
    constructor();
    navigate(request: WizardApiRequest): Promise<WizardResponse | WizardFinalResponse>;
}

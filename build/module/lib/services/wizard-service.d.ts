import { WizardApiRequest, WizardResponse } from '../models/wizard';
export declare class WizardService {
    constructor();
    navigate(request: WizardApiRequest): Promise<WizardResponse>;
}

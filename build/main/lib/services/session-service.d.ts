import { WizardSessionObject } from '../models/wizard';
export declare class SessionService {
    constructor();
    /**
     * Get a session object for a transaction ID.
     * @summary This will return a wizard_session object.
     * @param {string} transactionId To query this, you can use the transaction-id, which is returned, after the session is created.
     * @returns {Promise<WizardSessionObject>}
     */
    get(transactionId: string): Promise<WizardSessionObject>;
}

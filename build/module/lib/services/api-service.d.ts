import { BankAccountsService } from "./api-bank-accounts-service";
import { BankConnectionsService } from "./api-bank-connections-service";
import { BankUserService } from "./api-bank-user-service";
import { APIWizardService } from "./api-wizard-service";
export declare class APIService {
    BankAccounts: BankAccountsService;
    BankConnections: BankConnectionsService;
    BankUsers: BankUserService;
    Wizard: APIWizardService;
    constructor();
}

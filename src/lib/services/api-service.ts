import { BankAccountsService } from "./api-bank-accounts-service";
import { BankConnectionsService } from "./api-bank-connections-service";
import { BankUserService } from "./api-bank-user-service";
import { APIWizardService } from "./api-wizard-service";

export class APIService {
	public BankAccounts: BankAccountsService;
	public BankConnections: BankConnectionsService;
	public BankUsers: BankUserService;
	public Wizard: APIWizardService;

	constructor() {
		this.BankAccounts = new BankAccountsService();
		this.BankConnections = new BankConnectionsService();
		this.BankUsers = new BankUserService();
		this.Wizard = new APIWizardService();
	}
}
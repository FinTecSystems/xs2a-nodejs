import { BankAccountsService } from "./api-bank-accounts-service";
import { BankConnectionsService } from "./api-bank-connections-service";
import { BankUserService } from "./api-bank-user-service";
import { APIWizardService } from "./api-wizard-service";
export class APIService {
    BankAccounts;
    BankConnections;
    BankUsers;
    Wizard;
    constructor() {
        this.BankAccounts = new BankAccountsService();
        this.BankConnections = new BankConnectionsService();
        this.BankUsers = new BankUserService();
        this.Wizard = new APIWizardService();
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLXNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL3NlcnZpY2VzL2FwaS1zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUV4RCxNQUFNLE9BQU8sVUFBVTtJQUNmLFlBQVksQ0FBc0I7SUFDbEMsZUFBZSxDQUF5QjtJQUN4QyxTQUFTLENBQWtCO0lBQzNCLE1BQU0sQ0FBbUI7SUFFaEM7UUFDQyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksbUJBQW1CLEVBQUUsQ0FBQztRQUM5QyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksc0JBQXNCLEVBQUUsQ0FBQztRQUNwRCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksZUFBZSxFQUFFLENBQUM7UUFDdkMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLGdCQUFnQixFQUFFLENBQUM7SUFDdEMsQ0FBQztDQUNEIn0=
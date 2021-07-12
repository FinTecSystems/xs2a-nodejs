"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.APIService = void 0;
const api_bank_accounts_service_1 = require("./api-bank-accounts-service");
const api_bank_connections_service_1 = require("./api-bank-connections-service");
const api_bank_user_service_1 = require("./api-bank-user-service");
const api_wizard_service_1 = require("./api-wizard-service");
class APIService {
    constructor() {
        this.BankAccounts = new api_bank_accounts_service_1.BankAccountsService();
        this.BankConnections = new api_bank_connections_service_1.BankConnectionsService();
        this.BankUsers = new api_bank_user_service_1.BankUserService();
        this.Wizard = new api_wizard_service_1.APIWizardService();
    }
}
exports.APIService = APIService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLXNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL3NlcnZpY2VzL2FwaS1zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDJFQUFrRTtBQUNsRSxpRkFBd0U7QUFDeEUsbUVBQTBEO0FBQzFELDZEQUF3RDtBQUV4RCxNQUFhLFVBQVU7SUFNdEI7UUFDQyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksK0NBQW1CLEVBQUUsQ0FBQztRQUM5QyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUkscURBQXNCLEVBQUUsQ0FBQztRQUNwRCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksdUNBQWUsRUFBRSxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxxQ0FBZ0IsRUFBRSxDQUFDO0lBQ3RDLENBQUM7Q0FDRDtBQVpELGdDQVlDIn0=
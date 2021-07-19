"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BankAccountsService = void 0;
const axios_instance_1 = require("../axios-instance");
const generics_1 = require("../models/generics");
class BankAccountsService {
    constructor() { }
    /**
     * Retrieve the list of bank accounts for a xs2a.api bank user
     * @param {number} perPage Items per page
     * @param {number} page page to display
     * @returns {Promise<BankAccountsList>}
     */
    list(perPage = 15, page = 1) {
        return new Promise((resolve, reject) => {
            axios_instance_1.axios
                .get('/api/accounts', {
                params: {
                    page,
                    per_page: perPage,
                }
            })
                .then(response => {
                resolve(response.data);
            })
                .catch(error => {
                reject(error.response.data);
            });
        });
    }
    /**
     * Retrieve the list of all bank accounts for a specific bank connection
     * @param {string} connectionId The connection-id of the bank connection to get all bank accounts for
     * @param {number} perPage Items per page
     * @param {number} page page to display
     * @returns {Promise<BankAccountsList>}
     */
    listForBankConnection(connectionId, perPage = 15, page = 1) {
        return new Promise((resolve, reject) => {
            axios_instance_1.axios
                .get(`/api/connections/${connectionId}/accounts`, {
                params: {
                    page,
                    per_page: perPage,
                }
            })
                .then(response => {
                resolve(response.data);
            })
                .catch(error => {
                reject(error.response.data);
            });
        });
    }
    /**
     * Retrieve a specific bank account
     * @param {string} bankAccountId The bank-account-id for the account to be retrieved.
     * @returns {Promise<BankAccount>}
     */
    get(bankAccountId) {
        return new Promise((resolve, reject) => {
            axios_instance_1.axios
                .get(`/api/accounts/${bankAccountId}`)
                .then(response => {
                resolve(response.data);
            })
                .catch(error => {
                reject(error.response.data);
            });
        });
    }
    /**
     * Delete a specific bank account of a xs2a.api bank user
     * @param {string} bankAccountId The bank-account-id of the account to be deleted.
     * @return {Promise<any>}
     */
    delete(bankAccountId) {
        return new Promise((resolve, reject) => {
            axios_instance_1.axios
                .delete(`/api/accounts/${bankAccountId}`)
                .then(response => {
                resolve(response.data);
            })
                .catch(error => {
                reject(error.response.data);
            });
        });
    }
    /**
     * Retrieve the balance for a specific bank account
     * @param {string} bankAccountId The bank-account-id for the account the balance is to be retrieved.
     * @returns {Promise<BankAccountBalance>}
     */
    getBalance(bankAccountId) {
        return new Promise((resolve, reject) => {
            axios_instance_1.axios
                .get(`/api/accounts/${bankAccountId}/balance`)
                .then(response => {
                resolve(response.data);
            })
                .catch(error => {
                reject(error.response.data);
            });
        });
    }
    /**
     * Retrieve the turnovers for a specific bank account
     * @param {string} bankAccountId The bank-account-id for the account the balance is to be retrieved.
     * @param {string} from Filter turnovers by `booking_date` (<YYYY-MM-DD>).
     * @param {string} to Filter turnovers by `booking_date` (<YYYY-MM-DD>).
     * @param {number} onlyNew Filter turnovers by new flag (1 for true, 0 for false)
     * @returns {Promise<BankAccountTurnovers>}
     */
    getTurnovers(bankAccountId, from = '', to = '', onlyNew = 0) {
        return new Promise((resolve, reject) => {
            axios_instance_1.axios
                .get(`/api/accounts/${bankAccountId}/turnovers`, {
                params: {
                    from,
                    only_new: onlyNew,
                    to,
                }
            })
                .then(response => {
                resolve(response.data);
            })
                .catch(error => {
                reject(error.response.data);
            });
        });
    }
    /**
     * Mark turnovers as seen
     * @param {string} bankAccountId The bank-account-id for the account for which the turnovers are to be marked as seen.
     * @param {string} upTo Once you set a date, attribute new of all turnovers is set to false until the given date.
     * @return {Promise<any>}
     */
    markTurnoversAsSeen(bankAccountId, upTo = '') {
        let path = `/api/accounts/${bankAccountId}/markAsSeen`;
        if (upTo) {
            path += `/${upTo}`;
        }
        return new Promise((resolve, reject) => {
            axios_instance_1.axios
                .post(path)
                .then(response => {
                resolve(response.data);
            })
                .catch(error => {
                reject(error.response.data);
            });
        });
    }
    /**
     * Retrieve a Report for a specific bank account
     * @param {string} bankAccountId The bank-account-id for the account the report is to be retrieved.
     * @param {string} reportId ID of the report to be retrieved.
     * @param {ReportFormat} [format="json"] The format parameter is optional. The report is available in the following formats: html, pdf and json. This call defaults to JSON.
     * @param {ReportLocale} [locale="en"] Locale in which the report will be rendered. This has no effect when using json format.
     * @returns {Promise<any>}
     */
    getReport(bankAccountId, reportId, format = generics_1.ReportFormat.JSON, locale = generics_1.ReportLocale.EN) {
        return new Promise((resolve, reject) => {
            axios_instance_1.axios
                .get(`/api/accounts/${bankAccountId}/report/${reportId}`, {
                params: {
                    format,
                    locale,
                }
            })
                .then(response => {
                resolve(response.data);
            })
                .catch(error => {
                reject(error.response.data);
            });
        });
    }
}
exports.BankAccountsService = BankAccountsService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLWJhbmstYWNjb3VudHMtc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvc2VydmljZXMvYXBpLWJhbmstYWNjb3VudHMtc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxzREFBMEM7QUFFMUMsaURBQWdFO0FBRWhFLE1BQWEsbUJBQW1CO0lBQy9CLGdCQUFlLENBQUM7SUFFaEI7Ozs7O09BS0c7SUFDSSxJQUFJLENBQUMsVUFBa0IsRUFBRSxFQUFFLE9BQWUsQ0FBQztRQUNqRCxPQUFPLElBQUksT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFO1lBQ3RDLHNCQUFLO2lCQUNILEdBQUcsQ0FBQyxlQUFlLEVBQUU7Z0JBQ3JCLE1BQU0sRUFBRTtvQkFDUCxJQUFJO29CQUNKLFFBQVEsRUFBRSxPQUFPO2lCQUNqQjthQUNELENBQUM7aUJBQ0QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFO2dCQUNoQixPQUFPLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3hCLENBQUMsQ0FBQztpQkFDRCxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQ2QsTUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDN0IsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNKLENBQUM7SUFFRDs7Ozs7O09BTUc7SUFDSSxxQkFBcUIsQ0FBQyxZQUFvQixFQUFFLFVBQWtCLEVBQUUsRUFBRSxPQUFlLENBQUM7UUFDeEYsT0FBTyxJQUFJLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTtZQUN0QyxzQkFBSztpQkFDSCxHQUFHLENBQUMsb0JBQW9CLFlBQVksV0FBVyxFQUFFO2dCQUNqRCxNQUFNLEVBQUU7b0JBQ1AsSUFBSTtvQkFDSixRQUFRLEVBQUUsT0FBTztpQkFDakI7YUFDRCxD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
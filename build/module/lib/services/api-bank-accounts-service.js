import { axios } from '../axios-instance';
import { ReportFormat, ReportLocale } from '../models/generics';
export class BankAccountsService {
    constructor() { }
    /**
     * Retrieve the list of bank accounts for a xs2a.api bank user
     * @param perPage Items per page
     * @param page page to display
     * @returns {Promise<BankAccountsList>}
     */
    list(perPage = 15, page = 1) {
        return new Promise((resolve, reject) => {
            axios
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
     * @param connectionId The connection-id of the bank connection to get all bank accounts for
     * @param perPage Items per page
     * @param page page to display
     * @returns {Promise<BankAccountsList>}
     */
    listForBankConnection(connectionId, perPage = 15, page = 1) {
        return new Promise((resolve, reject) => {
            axios
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
     * Retrieve the list of all bank accounts for a specific bank connection
     * @param bankAccountId The bank-account-id for the account to be retrieved.
     * @returns {Promise<BankAccount>}
     */
    get(bankAccountId) {
        return new Promise((resolve, reject) => {
            axios
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
     * @param bankAccountId The bank-account-id for the connection to be deleted.
     */
    delete(bankAccountId) {
        return new Promise((resolve, reject) => {
            axios
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
     * @param bankAccountId The bank-account-id for the account the balance is to be retrieved.
     * @returns {Promise<BankAccountBalance>}
     */
    getBalance(bankAccountId) {
        return new Promise((resolve, reject) => {
            axios
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
     * Retrieve the balance for a specific bank account
     * @param bankAccountId The bank-account-id for the account the balance is to be retrieved.
     * @param {string} from Filter turnovers by `booking_date` (<YYYY-MM-DD>).
     * @param {string} to Filter turnovers by `booking_date` (<YYYY-MM-DD>).
     * @param {number} onlyNew Filter turnovers by new flag (1 for true, 0 for false)
     * @returns {Promise<BankAccountTurnovers>}
     */
    getTurnovers(bankAccountId, from = '', to = '', onlyNew = 0) {
        return new Promise((resolve, reject) => {
            axios
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
     * @param bankAccountId The bank-account-id for the account for which the turnovers are to be marked as seen.
     * @param {string} upTo Once you set a date, attribute new of all turnovers is set to false until the given date.
     * @returns {Promise<any>}
     */
    markTurnoversAsSeen(bankAccountId, upTo = '') {
        let path = `/api/accounts/${bankAccountId}/markAsSeen`;
        if (upTo) {
            path += `/${upTo}`;
        }
        return new Promise((resolve, reject) => {
            axios
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
     * @param {string} bankAccountId The bank-account-id for the account to be retrieved.
     * @param {string} reportId ID of the report to be retrieved.
     * @param {ReportFormat} format The format parameter is optional. The report is available in the following formats: html, pdf and json. This call defaults to html if the format parameter is omitted.
     * @param {ReportLocale} locale Locale in which the report will be rendered. This has no effect when using json format.
     * @returns {Promise<any>}
     */
    getReport(bankAccountId, reportId, format = ReportFormat.JSON, locale = ReportLocale.EN) {
        return new Promise((resolve, reject) => {
            axios
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLWJhbmstYWNjb3VudHMtc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvc2VydmljZXMvYXBpLWJhbmstYWNjb3VudHMtc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFMUMsT0FBTyxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUVoRSxNQUFNLE9BQU8sbUJBQW1CO0lBQy9CLGdCQUFlLENBQUM7SUFFaEI7Ozs7O09BS0c7SUFDSSxJQUFJLENBQUMsVUFBa0IsRUFBRSxFQUFFLE9BQWUsQ0FBQztRQUNqRCxPQUFPLElBQUksT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFO1lBQ3RDLEtBQUs7aUJBQ0gsR0FBRyxDQUFDLGVBQWUsRUFBRTtnQkFDckIsTUFBTSxFQUFFO29CQUNQLElBQUk7b0JBQ0osUUFBUSxFQUFFLE9BQU87aUJBQ2pCO2FBQ0QsQ0FBQztpQkFDRCxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUU7Z0JBQ2hCLE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDeEIsQ0FBQyxDQUFDO2lCQUNELEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFDZCxNQUFNLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUM3QixDQUFDLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQUVEOzs7Ozs7T0FNRztJQUNJLHFCQUFxQixDQUFDLFlBQW9CLEVBQUUsVUFBa0IsRUFBRSxFQUFFLE9BQWUsQ0FBQztRQUN4RixPQUFPLElBQUksT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFO1lBQ3RDLEtBQUs7aUJBQ0gsR0FBRyxDQUFDLG9CQUFvQixZQUFZLFdB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
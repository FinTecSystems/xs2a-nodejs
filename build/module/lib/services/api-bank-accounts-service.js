import { axios } from '../axios-instance';
import { ReportFormat, ReportLocale } from '../models/generics';
export class BankAccountsService {
    constructor() { }
    /**
     * Retrieve the list of bank accounts for a xs2a.api bank user
     * @param {number} perPage Items per page
     * @param {number} page page to display
     * @returns {Promise<BankAccountsList>}
     */
    list(perPage = 15, page = 1) {
        return new Promise((resolve, reject) => {
            axios
                .get('/v1/api/accounts', {
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
            axios
                .get(`/v1/api/connections/${connectionId}/accounts`, {
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
            axios
                .get(`/v1/api/accounts/${bankAccountId}`)
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
            axios
                .delete(`/v1/api/accounts/${bankAccountId}`)
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
            axios
                .get(`/v1/api/accounts/${bankAccountId}/balance`)
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
            axios
                .get(`/v1/api/accounts/${bankAccountId}/turnovers`, {
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
        let path = `/v1/api/accounts/${bankAccountId}/markAsSeen`;
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
     * @param {string} bankAccountId The bank-account-id for the account the report is to be retrieved.
     * @param {string} reportId ID of the report to be retrieved.
     * @param {ReportFormat} [format="json"] The format parameter is optional. The report is available in the following formats: html, pdf and json. This call defaults to JSON.
     * @param {ReportLocale} [locale="en"] Locale in which the report will be rendered. This has no effect when using json format.
     * @returns {Promise<any>}
     */
    getReport(bankAccountId, reportId, format = ReportFormat.JSON, locale = ReportLocale.EN) {
        return new Promise((resolve, reject) => {
            axios
                .get(`/v1/api/accounts/${bankAccountId}/report/${reportId}`, {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLWJhbmstYWNjb3VudHMtc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvc2VydmljZXMvYXBpLWJhbmstYWNjb3VudHMtc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFMUMsT0FBTyxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUVoRSxNQUFNLE9BQU8sbUJBQW1CO0lBQy9CLGdCQUFlLENBQUM7SUFFaEI7Ozs7O09BS0c7SUFDSSxJQUFJLENBQUMsVUFBa0IsRUFBRSxFQUFFLE9BQWUsQ0FBQztRQUNqRCxPQUFPLElBQUksT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFO1lBQ3RDLEtBQUs7aUJBQ0gsR0FBRyxDQUFDLGtCQUFrQixFQUFFO2dCQUN4QixNQUFNLEVBQUU7b0JBQ1AsSUFBSTtvQkFDSixRQUFRLEVBQUUsT0FBTztpQkFDakI7YUFDRCxDQUFDO2lCQUNELElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRTtnQkFDaEIsT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN4QixDQUFDLENBQUM7aUJBQ0QsS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUFFO2dCQUNkLE1BQU0sQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzdCLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDSixDQUFDO0lBRUQ7Ozs7OztPQU1HO0lBQ0kscUJBQXFCLENBQUMsWUFBb0IsRUFBRSxVQUFrQixFQUFFLEVBQUUsT0FBZSxDQUFDO1FBQ3hGLE9BQU8sSUFBSSxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEVBQUU7WUFDdEMsS0FBSztpQkFDSCxHQUFHLENBQUMsdUJBQXVCLFlBQVks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
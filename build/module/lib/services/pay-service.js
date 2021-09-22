import { axios } from '../axios-instance';
import { ReportFormat, ReportLocale } from '../models/generics';
export class PayService {
    constructor() { }
    /**
     * Create a Pay Session
     * @param {PayRequest} request The Pay Request
     * @returns {Promise<SessionResponse>}
     */
    create(request) {
        return new Promise((resolve, reject) => {
            axios
                .post('/v1/payments', request)
                .then(response => {
                resolve(response.data);
            })
                .catch(error => {
                reject(error.response.data);
            });
        });
    }
    /**
     * Get a specific xs2a.pay transaction object by transaction ID
     * @param {string} transactionId the id of the transaction to get
     * @returns {Promise<PayObject>}
     */
    get(transactionId) {
        return new Promise((resolve, reject) => {
            axios
                .get(`/v1/payments/${transactionId}`)
                .then(response => {
                resolve(response.data);
            })
                .catch(error => {
                reject(error.response.data);
            });
        });
    }
    /**
     * Change the payment status of a transaction to received or loss
     * @param {string} transactionId id of the transaction to update the payment status for
     * @param {PaymentStatus} statusToSet the new status to set
     * @returns {Promise<PayObject>}
     */
    updatePaymentStatus(transactionId, statusToSet) {
        return new Promise((resolve, reject) => {
            axios
                .post(`/v1/payments/${transactionId}/${statusToSet}`)
                .then(response => {
                resolve(response.data);
            })
                .catch(error => {
                reject(error.response.data);
            });
        });
    }
    /**
     * Get a specific report by transaction-id and report-id
     * @param {string} transactionId id of the transaction to get a report for
     * @param {string} [reportId=""] ID of the report to be retrieved. If not present, current default report will be used.
     * @param {ReportFormat} [format="json"] The format parameter is optional. The report is available in the following formats: html, pdf and json. This call defaults to JSON.
     * @param {ReportLocale} [locale="en"] Locale in which the report will be rendered. This has no effect when using json format.
     * @return {Promise<any>}
     */
    getReport(transactionId, reportId = '', format = ReportFormat.JSON, locale = ReportLocale.EN) {
        let path = `/risks/${transactionId}/report`;
        if (reportId) {
            path += `/${reportId}`;
        }
        return new Promise((resolve, reject) => {
            axios
                .get(path, {
                params: {
                    format,
                    locale,
                },
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
     * Get all events for a xs2a.pay transaction object
     * @param {string} transactionId ID of the transaction for which all events are to be retrieved for.
     * @param {number} perPage Items per page
     * @param {number} page which page to return
     * @return {Promise<EventsList>}
     */
    getEvents(transactionId, perPage = 15, page = 1) {
        return new Promise((resolve, reject) => {
            axios
                .get(`/v1/payments/${transactionId}/events`, {
                params: {
                    page,
                    per_page: perPage,
                },
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
     * Generate a Pain File
     * The payout & refund feature offers the possibility to initiate a payout or refund that are based on XS2A.pay transactions.
     * A SEPA pain file is created that can be processed by your bank.
     * @param {RefundPayoutRequest} request the refundPayout Request object
     * @return {Promise<RefundPayoutResponse>}
     */
    generatePainFile(request) {
        return new Promise((resolve, reject) => {
            axios
                .post('/v1/payments/refundPayout', request)
                .then(response => {
                resolve(response.data);
            })
                .catch(error => {
                reject(error.response.data);
            });
        });
    }
    /**
     * Get a list of all refund and payout with their message_id.
     * @param {number} perPage Items per page
     * @param {number} page which page to return
     * @returns {Promise<RefundPayoutList>}
     */
    listRefundPayouts(perPage = 15, page = 1) {
        return new Promise((resolve, reject) => {
            axios
                .get('/v1/payments/refundPayout', {
                params: {
                    page,
                    per_page: perPage,
                },
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
     * Get a specific refundPayout object for a transaction
     * @param {string} transactionId transaction id to get the refundPayout object for
     * @return {Promise<RefundsPayout>}
     */
    getRefundPayout(transactionId) {
        return new Promise((resolve, reject) => {
            axios
                .get(`/v1/payments/${transactionId}/refundPayout`)
                .then(response => {
                resolve(response.data);
            })
                .catch(error => {
                reject(error.response.data);
            });
        });
    }
    /**
     * Retrieve a specific pain file by its message_id.
     * @param {string} messageId messageId to get a specific pain file for
     * @return {Promise<any>}
     */
    getPainFile(messageId) {
        return new Promise((resolve, reject) => {
            axios
                .get(`/v1/payments/refundPayout/${messageId}`)
                .then(response => {
                resolve(response.data);
            })
                .catch(error => {
                reject(error.response.data);
            });
        });
    }
    /**
     * Delete a xs2a.pay transaction object
     * @param {string} transactionId the id of the transaction the pay object is to be deleted for
     * @return {Promise<DeletionResponse>}
     */
    delete(transactionId) {
        return new Promise((resolve, reject) => {
            axios
                .delete(`/v1/payments/${transactionId}`)
                .then(response => {
                resolve(response.data);
            })
                .catch(error => {
                reject(error.response.data);
            });
        });
    }
    /**
     * Get a list of all xs2a.pay transactions, or filter using query parameters.
     * @param {PayQueryParameters} [parameters={}] (Optional) Filter Paramaters
     * @return {Promise<PaymentsTransactionList>}
     */
    list(parameters = {}) {
        return new Promise((resolve, reject) => {
            axios
                .get('/v1/payments', { params: parameters })
                .then(response => {
                resolve(response.data);
            })
                .catch(error => {
                reject(error.response.data);
            });
        });
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5LXNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL3NlcnZpY2VzL3BheS1zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUUxQyxPQUFPLEVBQW9CLFlBQVksRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUtsRixNQUFNLE9BQU8sVUFBVTtJQUN0QixnQkFBZSxDQUFDO0lBRWhCOzs7O09BSUc7SUFDSSxNQUFNLENBQUMsT0FBbUI7UUFDaEMsT0FBTyxJQUFJLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTtZQUN0QyxLQUFLO2lCQUNILElBQUksQ0FBQyxjQUFjLEVBQUUsT0FBTyxDQUFDO2lCQUM3QixJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUU7Z0JBQ2hCLE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDeEIsQ0FBQyxDQUFDO2lCQUNELEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFDZCxNQUFNLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUM3QixDQUFDLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQUVEOzs7O09BSUc7SUFDSSxHQUFHLENBQUMsYUFBcUI7UUFDL0IsT0FBTyxJQUFJLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTtZQUN0QyxLQUFLO2lCQUNILEdBQUcsQ0FBQyxnQkFBZ0IsYUFBYSxFQUFFLENBQUM7aUJBQ3BDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRTtnQkFDaEIsT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN4QixDQUFDLENBQUM7aUJBQ0QsS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUFFO2dCQUNkLE1BQU0s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
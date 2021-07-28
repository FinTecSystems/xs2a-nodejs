"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PayService = void 0;
const axios_instance_1 = require("../axios-instance");
const generics_1 = require("../models/generics");
class PayService {
    constructor() { }
    /**
     * Create a Pay Session
     * @param {PayRequest} request The Pay Request
     * @returns {Promise<SessionResponse>}
     */
    create(request) {
        return new Promise((resolve, reject) => {
            axios_instance_1.axios
                .post('/payments', request)
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
            axios_instance_1.axios
                .get(`/payments/${transactionId}`)
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
            axios_instance_1.axios
                .post(`/payments/${transactionId}/${statusToSet}`)
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
    getReport(transactionId, reportId = '', format = generics_1.ReportFormat.JSON, locale = generics_1.ReportLocale.EN) {
        let path = `/risks/${transactionId}/report`;
        if (reportId) {
            path += `/${reportId}`;
        }
        return new Promise((resolve, reject) => {
            axios_instance_1.axios
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
            axios_instance_1.axios
                .get(`/payments/${transactionId}/events`, {
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
            axios_instance_1.axios
                .post('/payments/refundPayout', request)
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
            axios_instance_1.axios
                .get('/payments/refundPayout', {
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
            axios_instance_1.axios
                .get(`/payments/${transactionId}/refundPayout`)
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
            axios_instance_1.axios
                .get(`/payments/refundPayout/${messageId}`)
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
            axios_instance_1.axios
                .delete(`/payments/${transactionId}`)
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
            axios_instance_1.axios
                .get('/payments', { params: parameters })
                .then(response => {
                resolve(response.data);
            })
                .catch(error => {
                reject(error.response.data);
            });
        });
    }
}
exports.PayService = PayService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5LXNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL3NlcnZpY2VzL3BheS1zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHNEQUEwQztBQUUxQyxpREFBa0Y7QUFLbEYsTUFBYSxVQUFVO0lBQ3RCLGdCQUFlLENBQUM7SUFFaEI7Ozs7T0FJRztJQUNJLE1BQU0sQ0FBQyxPQUFtQjtRQUNoQyxPQUFPLElBQUksT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFO1lBQ3RDLHNCQUFLO2lCQUNILElBQUksQ0FBQyxXQUFXLEVBQUUsT0FBTyxDQUFDO2lCQUMxQixJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUU7Z0JBQ2hCLE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDeEIsQ0FBQyxDQUFDO2lCQUNELEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFDZCxNQUFNLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUM3QixDQUFDLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQUVEOzs7O09BSUc7SUFDSSxHQUFHLENBQUMsYUFBcUI7UUFDL0IsT0FBTyxJQUFJLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTtZQUN0QyxzQkFBSztpQkFDSCxHQUFHLENBQUMsYUFBYSxhQUFhLEVBQUUsQ0FBQztpQkFDakMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFO2dCQUNoQixPQUFPLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3hCLENBQUMsQ0FBQztpQkFDRCxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQ2QsTUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDN0IsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENB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
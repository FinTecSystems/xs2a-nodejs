import { axios } from '../axios-instance';
import { EventsList } from '../models/event';
import { DeletionResponse, ReportFormat, ReportLocale } from '../models/generics';
import { PaymentStatus, PaymentsTransactionList, PayObject, PayQueryParameters, PayRequest } from '../models/pay';
import { RefundPayoutList, RefundPayoutRequest, RefundPayoutResponse, RefundsPayout } from '../models/refund_payout';
import { SessionResponse } from '../models/session';

export class PayService {
	constructor() {}

	/**
	 * Create a Pay Session
	 * @param {PayRequest} request The Pay Request
	 * @returns {Promise<SessionResponse>}
	 */
	public create(request: PayRequest): Promise<SessionResponse> {
		return new Promise((resolve, reject) => {
			axios
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
	public get(transactionId: string): Promise<PayObject> {
		return new Promise((resolve, reject) => {
			axios
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
	public updatePaymentStatus(transactionId: string, statusToSet: PaymentStatus): Promise<PayObject> {
		return new Promise((resolve, reject) => {
			axios
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
	 * @param {string} reportId ID of the report to be retrieved. If not present, current default report will be used.
	 * @param {ReportFormat} [format="json"] The format parameter is optional. The report is available in the following formats: html, pdf and json. This call defaults to JSON.
	 * @param {ReportLocale} [locale="en"] Locale in which the report will be rendered. This has no effect when using json format.
	 * @return {Promise<any>}
	 */
	public getReport(transactionId: string, reportId: string, format: ReportFormat = ReportFormat.JSON, locale: ReportLocale = ReportLocale.EN): Promise<any> {
		return new Promise((resolve, reject) => {
			axios
				.get(`/payments/${transactionId}/report/${reportId}`, {
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
	public getEvents(transactionId: string, perPage: number = 15, page: number = 1): Promise<EventsList> {
		return new Promise((resolve, reject) => {
			axios
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
	public generatePainFile(request: RefundPayoutRequest): Promise<RefundPayoutResponse> {
		return new Promise((resolve, reject) => {
			axios
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
	public listRefundPayouts(perPage: number = 15, page: number = 1): Promise<RefundPayoutList> {
		return new Promise((resolve, reject) => {
			axios
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
	public getRefundPayout(transactionId: string): Promise<RefundsPayout> {
		return new Promise((resolve, reject) => {
			axios
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
	public getPainFile(messageId: string): Promise<any> {
		return new Promise((resolve, reject) => {
			axios
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
	public delete(transactionId: string): Promise<DeletionResponse> {
		return new Promise((resolve, reject) => {
			axios
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
	public list(parameters: PayQueryParameters = {}): Promise<PaymentsTransactionList> {
		return new Promise((resolve, reject) => {
			axios
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

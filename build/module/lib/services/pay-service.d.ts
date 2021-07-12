import { EventsList } from '../models/event';
import { DeletionResponse, ReportFormat, ReportLocale } from '../models/generics';
import { PaymentStatus, PaymentsTransactionList, PayObject, PayQueryParameters, PayRequest } from '../models/pay';
import { RefundPayoutList, RefundPayoutRequest, RefundPayoutResponse, RefundsPayout } from '../models/refund_payout';
import { SessionResponse } from '../models/session';
export declare class PayService {
    constructor();
    /**
     * Create a XS2A.Pay Request
     *
     * ### Example
     * ```js
     * import { XS2A } from 'xs2a-nodejs';
     *
     * const client = new XS2A('your-api-key');
     * const riskRequest = await client.pay.create({ ... });
     * ```
     */
    create(request: PayRequest): Promise<SessionResponse>;
    /**
     * Get a specific xs2a.pay transaction object by transaction ID
     */
    get(transactionId: string): Promise<PayObject>;
    /**
     * Change the payment status of a transaction to received or loss
     */
    updatePaymentStatus(transactionId: string, statusToSet: PaymentStatus): Promise<object>;
    /**
     * Get a specific report by transaction-id and report-id
     * @param transactionId id of the transaction to get a report for
     * @param reportId ID of the report to be retrieved. If not present, current default report will be used.
     * @param format The format parameter is optional. The report is available in the following formats: html, pdf and json. This call defaults to html if the format parameter is omitted.
     * @param locale Locale in which the report will be rendered. This has no effect when using json format.
     * @returns {Promise<any>}
     */
    getReport(transactionId: string, reportId: string, format?: ReportFormat, locale?: ReportLocale): Promise<any>;
    /**
     * Get all events for a xs2a.pay transaction object
     * @param transactionId ID of the transaction for which all events are to be retrieved for.
     * @param perPage Items per page
     * @param page which page to return
     * @returns {Promise<any>}
     */
    getEvents(transactionId: string, perPage?: number, page?: number): Promise<EventsList>;
    /**
     * Generate a Pain File
     * The payout & refund feature offers the possibility to initiate a payout or refund that are based on XS2A.pay transactions.
     * A SEPA pain file is created that can be processed by your bank.
     */
    generatePainFile(request: RefundPayoutRequest): Promise<RefundPayoutResponse>;
    /**
     * Get a list of all refund and payout with their message_id.
     */
    listRefundPayouts(perPage?: number, page?: number): Promise<RefundPayoutList>;
    /**
     * Get a list of all refund and payout with their message_id.
     */
    getRefundPayout(transactionId: string): Promise<RefundsPayout>;
    /**
     * Here you can retrieve a specific pain file by its message_id.
     */
    getPainFile(messageId: string): Promise<any>;
    /**
     * Delete a xs2a.pay transaction object
     */
    delete(transactionId: string): Promise<DeletionResponse>;
    /**
     * Get a list of all xs2a.pay transactions, or filter using query parameters.
     */
    list(parameters?: PayQueryParameters): Promise<PaymentsTransactionList>;
}

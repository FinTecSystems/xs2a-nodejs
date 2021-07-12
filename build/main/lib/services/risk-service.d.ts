import { EventsList } from '../models/event';
import { DeletionResponse, ReportFormat, ReportLocale } from '../models/generics';
import { RiskObject, RiskQueryParameters, RiskRequest, RisksTransactionList, UploadFormat, Xs2aRiskUploadJsonSuccess, Xs2aRiskUploadJsonWrapper } from '../models/risk';
import { AccountSnapshotFormat, AccountSnapshotJSON2 } from '../models/risk-checks/account_snapshot';
import { SessionResponse } from '../models/session';
export declare class RiskService {
    constructor();
    /**
     * Create a xs2a.risk object and receive a wizard session key in return.
     *
     * ### Example
     * ```js
     * import { XS2A } from 'xs2a-nodejs';
     *
     * const client = new XS2A('your-api-key');
     * const riskRequest = await client.risk.create();
     * ```
     */
    create(request?: RiskRequest): Promise<SessionResponse>;
    /**
     * Get a specific xs2a.risk transaction object by transaction ID
     */
    get(transactionId: string): Promise<RiskObject>;
    /**
     * Get a specific xs2a.risk account snapshot by transaction ID
     */
    getAccountSnapshot(transactionId: string, format?: AccountSnapshotFormat): Promise<AccountSnapshotJSON2>;
    /**
     * XS2A.risk.fullpdf is a wonderful way to show you all the checks in one pdf.
     * Only the risk-cheks will be shown in this pdf, which were selected in the transaction (WizardSession). So if xs2a_account_snapshot and xs2a_name_check has been selected, only this information of this checks, can be found in the fullpdf.
     */
    getFullPDF(transactionId: string): Promise<any>;
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
     * Get all events for a xs2a.risk transaction object
     * @param transactionId ID of the transaction for which all events are to be retrieved for.
     * @param perPage Items per page
     * @param page which page to return
     * @returns {Promise<any>}
     */
    getEvents(transactionId: string, perPage?: number, page?: number): Promise<EventsList>;
    /**
     * This action will complete the started wizard_session and can **not** be done in testmode.
     * @summary Complete xs2a.risk by uploading account data to our systems.
     * @param {string} wizardSessionId Wizard-session-id which was received
     * @param {Array<Xs2aRiskUploadJsonWrapper>} [body] Upload an account-snapshot to finalize your transaction.
     * @param {string} [format] The format parameter is optional and defines which format you are about to upload. The account snapshot upload function is available in the following formats: json and CAMT. This call defaults to json if the format parameter is omitted. If you are using CAMT format, please insert the whole **camt xml code** as payload. (no json)
     * @returns {Xs2aRiskUploadJsonSuccess}
     */
    completeManually(wizardSessionId: string, format: UploadFormat | undefined, body: Xs2aRiskUploadJsonWrapper[]): Promise<Xs2aRiskUploadJsonSuccess>;
    /**
     * Delete a specific xs2a.risk transaction object by transaction ID
     */
    delete(transactionId: string): Promise<DeletionResponse>;
    /**
     * Get a paginated list of all xs2a.risk transaction objects, or filter using query parameters.
     */
    list(parameters?: RiskQueryParameters): Promise<RisksTransactionList>;
}

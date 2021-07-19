"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RiskService = void 0;
const axios_instance_1 = require("../axios-instance");
const generics_1 = require("../models/generics");
const risk_1 = require("../models/risk");
const account_snapshot_1 = require("../models/risk-checks/account_snapshot");
class RiskService {
    constructor() { }
    /**
     * Create a Risk Session
     * @param {RiskRequest} [request={}] The Risk Request
     * @returns {Promise<SessionResponse>}
     */
    create(request = {}) {
        return new Promise((resolve, reject) => {
            axios_instance_1.axios
                .post('/risks', request)
                .then(response => {
                resolve(response.data);
            })
                .catch(error => {
                reject(error.response.data);
            });
        });
    }
    /**
     * Get a specific xs2a.risk transaction object by transaction ID
     * @param {string} transactionId the id of the transaction to get
     * @return {Promise<RiskObject>}
     */
    get(transactionId) {
        return new Promise((resolve, reject) => {
            axios_instance_1.axios
                .get(`/risks/${transactionId}`)
                .then(response => {
                resolve(response.data);
            })
                .catch(error => {
                reject(error.response.data);
            });
        });
    }
    /**
     * Get a specific xs2a.risk account snapshot by transaction ID
     * @param {string} transactionId id of transaction to get account_snapshot for
     * @param {AccountSnapshotFormat} format the format the snapshot should be in (Defaults to JSON2)
     * @return {Promise<AccountSnapshotJSON2>}
     */
    getAccountSnapshot(transactionId, format = account_snapshot_1.AccountSnapshotFormat.JSON2) {
        return new Promise((resolve, reject) => {
            axios_instance_1.axios
                .get(`/risks/${transactionId}/accountSnapshot`, { params: format })
                .then(response => {
                resolve(response.data);
            })
                .catch(error => {
                reject(error.response.data);
            });
        });
    }
    /**
     * XS2A.risk.fullpdf is a wonderful way to show you all the checks in one pdf.
     * Only the risk-cheks will be shown in this pdf, which were selected in the transaction (WizardSession). So if xs2a_account_snapshot and xs2a_name_check has been selected, only this information of this checks, can be found in the fullpdf.
     * @param {string} transactionId id of the transaction to generate a full pdf for
     * @return {Promise<any>}
     */
    getFullPDF(transactionId) {
        return new Promise((resolve, reject) => {
            axios_instance_1.axios
                .get(`/risks/${transactionId}/fullpdf`)
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
     * @returns {Promise<any>}
     */
    getReport(transactionId, reportId, format = generics_1.ReportFormat.JSON, locale = generics_1.ReportLocale.EN) {
        return new Promise((resolve, reject) => {
            axios_instance_1.axios
                .get(`/risks/${transactionId}/reports/${reportId}`, {
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
     * Get all events for a xs2a.risk transaction object
     * @param {string} transactionId ID of the transaction for which all events are to be retrieved for.
     * @param {number} perPage Items per page
     * @param {number} page which page to return
     * @returns {Promise<EventsList>}
     */
    getEvents(transactionId, perPage = 15, page = 1) {
        return new Promise((resolve, reject) => {
            axios_instance_1.axios
                .get(`/risks/${transactionId}/events`, {
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
     * This action will complete the started wizard_session and can **not** be done in testmode.
     * @summary Complete xs2a.risk by uploading account data to our systems.
     * @param {string} wizardSessionId Wizard-session-id which was received
     * @param {UploadFormat} [format="json"] The format parameter is optional and defines which format you are about to upload. The account snapshot upload function is available in the following formats: json and CAMT. This call defaults to json if the format parameter is omitted. If you are using CAMT format, please insert the whole **camt xml code** as payload. (no json)
     * @param {Array<Xs2aRiskUploadJsonWrapper>} body Upload an account-snapshot to finalize your transaction.
     * @returns {Promise<Xs2aRiskUploadJsonSuccess>}
     */
    completeManually(wizardSessionId, format = risk_1.UploadFormat.JSON, body) {
        return new Promise((resolve, reject) => {
            axios_instance_1.axios
                .post(`/risks/upload/${wizardSessionId}`, body, { params: format })
                .then(response => {
                resolve(response.data);
            })
                .catch(error => {
                reject(error.response.data);
            });
        });
    }
    /**
     * Delete a specific xs2a.risk transaction object by transaction ID
     * @param {string} transactionId id of transaction to be deleted
     * @return {Promise<DeletionResponse>}
     */
    delete(transactionId) {
        return new Promise((resolve, reject) => {
            axios_instance_1.axios
                .delete(`/risks/${transactionId}`)
                .then(response => {
                resolve(response.data);
            })
                .catch(error => {
                reject(error.response.data);
            });
        });
    }
    /**
     * Get a paginated list of all xs2a.risk transaction objects, or filter using query parameters.
     * @param {RiskQueryParameters} [parameters={}] (Optional) Filter Parameters
     * @return {Promise<RisksTransactionList>}
     */
    list(parameters = {}) {
        return new Promise((resolve, reject) => {
            axios_instance_1.axios
                .get('/risks', { params: parameters })
                .then(response => {
                resolve(response.data);
            })
                .catch(error => {
                reject(error.response.data);
            });
        });
    }
}
exports.RiskService = RiskService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmlzay1zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9zZXJ2aWNlcy9yaXNrLXNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsc0RBQTBDO0FBRTFDLGlEQUFrRjtBQUVsRix5Q0FBd0s7QUFDeEssNkVBQXFHO0FBR3JHLE1BQWEsV0FBVztJQUN2QixnQkFBZSxDQUFDO0lBRWhCOzs7O09BSUc7SUFDSSxNQUFNLENBQUMsVUFBdUIsRUFBRTtRQUN0QyxPQUFPLElBQUksT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFO1lBQ3RDLHNCQUFLO2lCQUNILElBQUksQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDO2lCQUN2QixJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUU7Z0JBQ2hCLE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDeEIsQ0FBQyxDQUFDO2lCQUNELEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFDZCxNQUFNLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUM3QixDQUFDLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQUVEOzs7O09BSUc7SUFDSSxHQUFHLENBQUMsYUFBcUI7UUFDL0IsT0FBTyxJQUFJLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTtZQUN0QyxzQkFBSztpQkFDSCxHQUFHLENBQUMsVUFBVSxhQUFhLEVBQUUsQ0FBQztpQkFDOUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFO2dCQUNoQixPQUFPLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3hCLENBQUMsQ0FBQztpQkFDRCxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQ2QsTUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7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
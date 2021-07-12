import { axios } from '../axios-instance';
import { EventsList } from '../models/event';
import { DeletionResponse, ReportFormat, ReportLocale } from '../models/generics';

import { RiskObject, RiskQueryParameters, RiskRequest, RisksTransactionList, UploadFormat, Xs2aRiskUploadJsonSuccess, Xs2aRiskUploadJsonWrapper } from '../models/risk';
import { AccountSnapshotFormat, AccountSnapshotJSON2 } from '../models/risk-checks/account_snapshot';
import { SessionResponse } from '../models/session';

export class RiskService {
	constructor() {}

	/**
	 * Create a Risk Session
	 * @param {RiskRequest} request The Risk Request
	 * @returns {Promise<SessionResponse>}
	 */
	public create(request: RiskRequest = {}): Promise<SessionResponse> {
		return new Promise((resolve, reject) => {
			axios
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
	 */
	public get(transactionId: string): Promise<RiskObject> {
		return new Promise((resolve, reject) => {
			axios
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
	 */
	public getAccountSnapshot(transactionId: string, format: AccountSnapshotFormat = AccountSnapshotFormat.JSON2): Promise<AccountSnapshotJSON2> {
		return new Promise((resolve, reject) => {
			axios
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
	 */
	public getFullPDF(transactionId: string): Promise<any> {
		return new Promise((resolve, reject) => {
			axios
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
	 * @param transactionId id of the transaction to get a report for
	 * @param reportId ID of the report to be retrieved. If not present, current default report will be used.
	 * @param format The format parameter is optional. The report is available in the following formats: html, pdf and json. This call defaults to html if the format parameter is omitted.
	 * @param locale Locale in which the report will be rendered. This has no effect when using json format.
	 * @returns {Promise<any>}
	 */
	public getReport(transactionId: string, reportId: string, format: ReportFormat = ReportFormat.JSON, locale: ReportLocale = ReportLocale.EN): Promise<any> {
		return new Promise((resolve, reject) => {
			axios
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
	 * @param transactionId ID of the transaction for which all events are to be retrieved for.
	 * @param perPage Items per page
	 * @param page which page to return
	 * @returns {Promise<any>}
	 */
	public getEvents(transactionId: string, perPage: number = 15, page: number = 1): Promise<EventsList> {
		return new Promise((resolve, reject) => {
			axios
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
	 * @param {Array<Xs2aRiskUploadJsonWrapper>} [body] Upload an account-snapshot to finalize your transaction.
	 * @param {string} [format] The format parameter is optional and defines which format you are about to upload. The account snapshot upload function is available in the following formats: json and CAMT. This call defaults to json if the format parameter is omitted. If you are using CAMT format, please insert the whole **camt xml code** as payload. (no json)
	 * @returns {Xs2aRiskUploadJsonSuccess}
	 */
	public completeManually(wizardSessionId: string, format: UploadFormat = UploadFormat.JSON, body: Xs2aRiskUploadJsonWrapper[]): Promise<Xs2aRiskUploadJsonSuccess> {
		return new Promise((resolve, reject) => {
			axios
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
	 */
	public delete(transactionId: string): Promise<DeletionResponse> {
		return new Promise((resolve, reject) => {
			axios
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
	 */
	public list(parameters: RiskQueryParameters = {}): Promise<RisksTransactionList> {
		return new Promise((resolve, reject) => {
			axios
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

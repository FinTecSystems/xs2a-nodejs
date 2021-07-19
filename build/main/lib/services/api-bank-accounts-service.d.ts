import { BankAccount, BankAccountBalance, BankAccountsList, BankAccountTurnovers } from '../models/api/bank-accounts';
import { ReportFormat, ReportLocale } from '../models/generics';
export declare class BankAccountsService {
    constructor();
    /**
     * Retrieve the list of bank accounts for a xs2a.api bank user
     * @param {number} perPage Items per page
     * @param {number} page page to display
     * @returns {Promise<BankAccountsList>}
     */
    list(perPage?: number, page?: number): Promise<BankAccountsList>;
    /**
     * Retrieve the list of all bank accounts for a specific bank connection
     * @param {string} connectionId The connection-id of the bank connection to get all bank accounts for
     * @param {number} perPage Items per page
     * @param {number} page page to display
     * @returns {Promise<BankAccountsList>}
     */
    listForBankConnection(connectionId: string, perPage?: number, page?: number): Promise<BankAccountsList>;
    /**
     * Retrieve a specific bank account
     * @param {string} bankAccountId The bank-account-id for the account to be retrieved.
     * @returns {Promise<BankAccount>}
     */
    get(bankAccountId: string): Promise<BankAccount>;
    /**
     * Delete a specific bank account of a xs2a.api bank user
     * @param {string} bankAccountId The bank-account-id of the account to be deleted.
     * @return {Promise<any>}
     */
    delete(bankAccountId: string): Promise<any>;
    /**
     * Retrieve the balance for a specific bank account
     * @param {string} bankAccountId The bank-account-id for the account the balance is to be retrieved.
     * @returns {Promise<BankAccountBalance>}
     */
    getBalance(bankAccountId: string): Promise<BankAccountBalance>;
    /**
     * Retrieve the turnovers for a specific bank account
     * @param {string} bankAccountId The bank-account-id for the account the balance is to be retrieved.
     * @param {string} from Filter turnovers by `booking_date` (<YYYY-MM-DD>).
     * @param {string} to Filter turnovers by `booking_date` (<YYYY-MM-DD>).
     * @param {number} onlyNew Filter turnovers by new flag (1 for true, 0 for false)
     * @returns {Promise<BankAccountTurnovers>}
     */
    getTurnovers(bankAccountId: string, from?: string, to?: string, onlyNew?: number): Promise<BankAccountTurnovers>;
    /**
     * Mark turnovers as seen
     * @param {string} bankAccountId The bank-account-id for the account for which the turnovers are to be marked as seen.
     * @param {string} upTo Once you set a date, attribute new of all turnovers is set to false until the given date.
     * @return {Promise<any>}
     */
    markTurnoversAsSeen(bankAccountId: string, upTo?: string): Promise<any>;
    /**
     * Retrieve a Report for a specific bank account
     * @param {string} bankAccountId The bank-account-id for the account the report is to be retrieved.
     * @param {string} reportId ID of the report to be retrieved.
     * @param {ReportFormat} [format="json"] The format parameter is optional. The report is available in the following formats: html, pdf and json. This call defaults to JSON.
     * @param {ReportLocale} [locale="en"] Locale in which the report will be rendered. This has no effect when using json format.
     * @returns {Promise<any>}
     */
    getReport(bankAccountId: string, reportId: string, format?: ReportFormat, locale?: ReportLocale): Promise<any>;
}

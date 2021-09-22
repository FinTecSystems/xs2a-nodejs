import { Country } from "./country";
import { Currency } from "./currency";
import { Language } from "./language";
import { Xs2aAccountCharacteristicsCheckRequest, Xs2aAccountCharacteristicsCheckResponse } from "./risk-checks/account_characteristics_check";
import { Xs2aAccountLinkedOffersCheckRequest, Xs2aAccountLinkedOffersCheckResponse } from "./risk-checks/account_linked_offers_check";
import { Xs2aAccountSnapshotRequest, Xs2aAccountSnapshotResponse } from "./risk-checks/account_snapshot";
import { Xs2aAccountStatusCheckRequest, Xs2aAccountStatusCheckResponse } from "./risk-checks/account_status_check";
import { Xs2aAllAccountsCheckRequest, Xs2aAllAccountsCheckResponse } from "./risk-checks/all_accounts_check";
import { Xs2aBalanceCheckRequest, Xs2aBalanceCheckResponse } from "./risk-checks/balance_check";
import { Xs2aBalanceOverviewRequest, Xs2aBalanceOverviewResponse } from "./risk-checks/balance_overview";
import { Xs2aCashflowOverviewRequest, Xs2aCashflowOverviewResponse } from "./risk-checks/cashflow_overview";
import { Xs2aChargebackCheckRequest, Xs2aChargebackCheckResponse } from "./risk-checks/chargeback_check";
import { Xs2aChildrenCheckRequest, Xs2aChildrenCheckResponse } from "./risk-checks/children_check";
import { Xs2aCreditCheckRequest, Xs2aCreditCheckResponse } from "./risk-checks/credit_check";
import { Xs2aDirectDebitCheckRequest, Xs2aDirectDebitCheckResponse } from "./risk-checks/direct_debit_check";
import { Xs2aFactSheetListsRequest, Xs2aFactSheetListsResponse } from "./risk-checks/fact_sheet_lists";
import { Xs2aHolderIdentificationCheckRequest, Xs2aHolderIdentificationCheckResponse } from "./risk-checks/holder_identification_check";
import { Xs2aIncomeCheckRequest, Xs2aIncomeCheckResponse } from "./risk-checks/income_check";
import { Xs2aOverdraftLimitCheckRequest, Xs2aOverdraftLimitCheckResponse } from "./risk-checks/overdraft_limit_check";
import { Xs2aProfitLossCheckRequest, Xs2aProfitLossCheckResponse } from "./risk-checks/profit_loss_check";
import { Xs2aRatingB2BCheckRequest, Xs2aRatingB2BCheckResponse } from "./risk-checks/rating_b2b_check";
import { Xs2aRatingB2CCheckRequest, Xs2aRatingB2CCheckResponse } from "./risk-checks/rating_b2c_check";
import { Xs2aRiskCalculationsCheckRequest, Xs2aRiskCalculationsCheckResponse } from "./risk-checks/risk_calculations_check";
import { Xs2aSeizureCheckRequest, Xs2aSeizureCheckResponse } from "./risk-checks/seizure_check";
import { Xs2aStandingOrdersCheckRequest, Xs2aStandingOrdersCheckResponse } from "./risk-checks/standing_orders_check";
export interface RiskRequest {
    /**
     * bank code of the customers bank, requires also parameter country_id. If supplied the step/page for entering a bank code will be skipped.
     * @type {number}
     * @memberof RiskRequest
     */
    bank_code?: number;
    /**
     * Two letter country code id, e.g. AT, CH, DE
     * @type {Country}
     * @memberof RiskRequest
     */
    country_id?: Country;
    /**
     * The (national) account number of the customer. Is the account number valid, an IBAN will be calculated using the bank code and the account number. Afterwards the procedure is equal to the following description for iban (see below). If you include this field, you must also include the parameter bank_code.
     * @type {string}
     * @memberof RiskRequest
     */
    account_number?: string;
    /**
     * IBAN of the customer. If it is a valid IBAN, the IBAN will be pinned for the current session. The customer will not be able to choose a different account, even if there are more accounts available to chose from. If the given IBAN is not in the customer list of accounts, the transaction will be aborted. In the case of an invalid IBAN XS2A will return a validation error with HTTP status code 422.
     * @type {string}
     * @memberof RiskRequest
     */
    iban?: string;
    /**
     * BIC of the customer. If the given BIC is valid, the step/page for entering a bank code will be skipped.
     * @type {string}
     * @memberof RiskRequest
     */
    bic?: string;
    /**
     * The account balance amount to be checked against.
     * @type {number}
     * @memberof RiskRequest
     */
    check_amount?: number;
    /**
     * Currency id of check_amount, e.g. EUR
     * @type {Currency}
     * @memberof RiskRequest
     */
    check_currency_id?: Currency;
    /**
     *
     * @type {object}
     * @memberof RiskRequest
     */
    metadata?: object;
    /**
     * The internal ID of your merchant, if any.
     * @type {string}
     * @memberof RiskRequest
     */
    merchant_id?: string;
    /**
     * The fints product ID can be enclosed in the initial request. If you have an eIDAS certificate, then you have to send it with every request.
     * @type {string}
     * @memberof RiskRequest
     */
    fints_product_id?: string;
    /**
     *
     * @type {EasyOnboardingOverwrite}
     * @memberof RiskRequest
     */
    easy_onboarding?: EasyOnboardingOverwrite;
    /**
     *
     * @type {Language}
     * @memberof RiskRequest
     */
    language?: Language;
    /**
     *
     * @type {Xs2aAccountSnapshotRequest}
     * @memberof RiskRequest
     */
    xs2a_account_snapshot?: Xs2aAccountSnapshotRequest;
    /**
     *
     * @type {Xs2aBalanceCheckRequest}
     * @memberof RiskRequest
     */
    xs2a_balance_check?: Xs2aBalanceCheckRequest;
    /**
     *
     * @type {Xs2aBalanceOverviewRequest}
     * @memberof RiskRequest
     */
    xs2a_balance_overview?: Xs2aBalanceOverviewRequest;
    /**
     *
     * @type {Xs2aCashflowOverviewRequest}
     * @memberof RiskRequest
     */
    xs2a_cashflow_overview?: Xs2aCashflowOverviewRequest;
    /**
     *
     * @type {Xs2aChargebackCheckRequest}
     * @memberof RiskRequest
     */
    xs2a_chargeback_check?: Xs2aChargebackCheckRequest;
    /**
     *
     * @type {Xs2aChildrenCheckRequest}
     * @memberof RiskRequest
     */
    xs2a_children_check?: Xs2aChildrenCheckRequest;
    /**
     *
     * @type {Xs2aRatingB2BCheckRequest}
     * @memberof RiskRequest
     */
    xs2a_rating_b2b_check?: Xs2aRatingB2BCheckRequest;
    /**
     *
     * @type {Xs2aRatingB2CCheckRequest}
     * @memberof RiskRequest
     */
    xs2a_rating_b2c_check?: Xs2aRatingB2CCheckRequest;
    /**
     *
     * @type {Xs2aProfitLossCheckRequest}
     * @memberof RiskRequest
     */
    xs2a_profit_loss_check?: Xs2aProfitLossCheckRequest;
    /**
     *
     * @type {Xs2aIncomeCheckRequest}
     * @memberof RiskRequest
     */
    xs2a_income_check?: Xs2aIncomeCheckRequest;
    /**
     *
     * @type {Xs2aAccountLinkedOffersCheckRequest}
     * @memberof RiskRequest
     */
    xs2a_account_linked_offers_check?: Xs2aAccountLinkedOffersCheckRequest;
    /**
     *
     * @type {Xs2aCreditCheckRequest}
     * @memberof RiskRequest
     */
    xs2a_credit_check?: Xs2aCreditCheckRequest;
    /**
     *
     * @type {Xs2aDirectDebitCheckRequest}
     * @memberof RiskRequest
     */
    xs2a_direct_debit_check?: Xs2aDirectDebitCheckRequest;
    /**
     *
     * @type {Xs2aFactSheetListsRequest}
     * @memberof RiskRequest
     */
    xs2a_fact_sheet_lists?: Xs2aFactSheetListsRequest;
    /**
     *
     * @type {Xs2aOverdraftLimitCheckRequest}
     * @memberof RiskRequest
     */
    xs2a_overdraft_limit_check?: Xs2aOverdraftLimitCheckRequest;
    /**
     *
     * @type {Xs2aSeizureCheckRequest}
     * @memberof RiskRequest
     */
    xs2a_seizure_check?: Xs2aSeizureCheckRequest;
    /**
     *
     * @type {Xs2aStandingOrdersCheckRequest}
     * @memberof RiskRequest
     */
    xs2a_standing_orders_check?: Xs2aStandingOrdersCheckRequest;
    /**
     *
     * @type {Xs2aAllAccountsCheckRequest}
     * @memberof RiskRequest
     */
    xs2a_all_accounts_check?: Xs2aAllAccountsCheckRequest;
    /**
     *
     * @type {Xs2aAccountStatusCheckRequest}
     * @memberof RiskRequest
     */
    xs2a_account_status_check?: Xs2aAccountStatusCheckRequest;
    /**
     *
     * @type {Xs2aHolderIdentificationCheckRequest}
     * @memberof RiskRequest
     */
    xs2a_holder_identification_check?: Xs2aHolderIdentificationCheckRequest;
    /**
     *
     * @type {Xs2aRiskCalculationsCheckRequest}
     * @memberof RiskRequest
     */
    xs2a_risk_calculations_check?: Xs2aRiskCalculationsCheckRequest;
    /**
     *
     * @type {Xs2aAccountCharacteristicsCheckRequest}
     * @memberof RiskRequest
     */
    xs2a_account_characteristics_check?: Xs2aAccountCharacteristicsCheckRequest;
}
export interface RiskQueryParameters {
    /**
     * Filter using account holder of the account
     * @type {string}
     * @memberof RiskQueryParameters
     */
    account_holder?: string;
    /**
     * Filter using iban
     * @type {string}
     * @memberof RiskQueryParameters
     */
    iban?: string;
    /**
     * Filter using bic
     * @type {string}
     * @memberof RiskQueryParameters
     */
    bic?: string;
    /**
     * Filter using two letter country id
     * @type {Country}
     * @memberof RiskQueryParameters
     */
    country_id?: Country;
    /**
     * Filter by merchant_id
     * @type {string}
     * @memberof RiskQueryParameters
     */
    merchant_id?: string;
    /**
     * Items per page
     * @type {number}
     * @memberof RiskQueryParameters
     */
    per_page?: number;
    /**
     * Which page to display
     * @type {number}
     * @memberof RiskQueryParameters
     */
    page?: number;
    /**
     * Filter by date. Pass ISO8861 conform dates (yyyy-mm-ddThh:mm:ss-zzzz). The time and timezone portions are optional and may be omitted (e.g yyyy-mm-dd or yyyy-mm-ddThh:mm:ss).
     * @type {string}
     * @memberof RiskQueryParameters
     */
    from?: string;
    /**
     * Filter by date. Pass ISO8861 conform dates (yyyy-mm-ddThh:mm:ss-zzzz). The time and timezone portions are optional and may be omitted (e.g yyyy-mm-dd or yyyy-mm-ddThh:mm:ss).
     * @type {string}
     * @memberof RiskQueryParameters
     */
    to?: string;
    /**
     * Filter by date (format yyyy-mm-dd or yyyy-mm-ddThh:mm:ssZ or an ISO8601 conform date. You can also supply date expressions like \&quot;-2 weeks\&quot; oder \&quot;-4 month\&quot;). This parameter has been deprecated in favor of from and to.
     * @type {string}
     * @memberof RiskQueryParameters
     */
    since?: string;
}
/**
 *
 * @export
 * @interface RiskObject
 */
export interface RiskObject {
    /**
     * Transaction id
     * @type {string}
     * @memberof RiskObject
     */
    id: string;
    /**
     * Internal XS2A transaction id. This id will be the same for the whole transaction
     * @type {string}
     * @memberof RiskObject
     */
    transaction: string;
    /**
     * Account holder name
     * @type {string}
     * @memberof RiskObject
     */
    account_holder: string;
    /**
     * IBAN
     * @type {string}
     * @memberof RiskObject
     */
    iban: string;
    /**
     * BIC
     * @type {string}
     * @memberof RiskObject
     */
    bic: string;
    /**
     * Bank name
     * @type {string}
     * @memberof RiskObject
     */
    bank_name: string;
    /**
     * Two letter country code id, e.g. AT, CH, DE
     * @type {Country}
     * @memberof RiskObject
     */
    country_id?: Country;
    /**
     * Indicates whether or not it is a test transaction
     * @type {string}
     * @memberof RiskObject
     */
    testmode: string;
    /**
     * Date of creation
     * @type {string}
     * @memberof RiskObject
     */
    created_at: string;
    /**
     * Custom data will be returned unchanged. If no data was submitted, this field will be null
     * @type {object | null}
     * @memberof RiskObject
     */
    metadata?: object | null;
    /**
     * Data will be returned unchanged
     * @type {string}
     * @memberof RiskObject
     */
    merchant_id?: string;
    /**
     * Object type, in this case a xs2a_risk
     * @type {string}
     * @memberof RiskObject
     */
    object: string;
    /**
     *
     * @type {Xs2aAccountSnapshotResponse}
     * @memberof RiskObject
     */
    xs2a_account_snapshot?: Xs2aAccountSnapshotResponse;
    /**
     *
     * @type {Xs2aBalanceCheckResponse}
     * @memberof RiskObject
     */
    xs2a_balance_check?: Xs2aBalanceCheckResponse;
    /**
     *
     * @type {Xs2aBalanceOverviewResponse}
     * @memberof RiskObject
     */
    xs2a_balance_overview?: Xs2aBalanceOverviewResponse;
    /**
     *
     * @type {Xs2aCashflowOverviewResponse}
     * @memberof RiskObject
     */
    xs2a_cashflow_overview?: Xs2aCashflowOverviewResponse;
    /**
     *
     * @type {Xs2aChargebackCheckResponse}
     * @memberof RiskObject
     */
    xs2a_chargeback_check?: Xs2aChargebackCheckResponse;
    /**
     *
     * @type {Xs2aChildrenCheckResponse}
     * @memberof RiskObject
     */
    xs2a_children_check?: Xs2aChildrenCheckResponse;
    /**
     *
     * @type {Xs2aRatingB2bCheckResponse}
     * @memberof RiskObject
     */
    xs2a_rating_b2b_check?: Xs2aRatingB2BCheckResponse;
    /**
     *
     * @type {Xs2aRatingB2cCheckResponse}
     * @memberof RiskObject
     */
    xs2a_rating_b2c_check?: Xs2aRatingB2CCheckResponse;
    /**
     *
     * @type {Xs2aProfitLossCheckResponse}
     * @memberof RiskObject
     */
    xs2a_profit_loss_check?: Xs2aProfitLossCheckResponse;
    /**
     *
     * @type {Xs2aIncomeCheckResponse}
     * @memberof RiskObject
     */
    xs2a_income_check?: Xs2aIncomeCheckResponse;
    /**
     *
     * @type {Xs2aAccountLinkedOffersCheckResponse}
     * @memberof RiskObject
     */
    xs2a_account_linked_offers_check?: Xs2aAccountLinkedOffersCheckResponse;
    /**
     *
     * @type {Xs2aCreditCheckResponse}
     * @memberof RiskObject
     */
    xs2a_credit_check?: Xs2aCreditCheckResponse;
    /**
     *
     * @type {Xs2aDirectDebitCheckResponse}
     * @memberof RiskObject
     */
    xs2a_direct_debit_check?: Xs2aDirectDebitCheckResponse;
    /**
     *
     * @type {Xs2aFactSheetListsResponse}
     * @memberof RiskObject
     */
    xs2a_fact_sheet_lists?: Xs2aFactSheetListsResponse;
    /**
     *
     * @type {Xs2aOverdraftLimitCheckResponse}
     * @memberof RiskObject
     */
    xs2a_overdraft_limit_check?: Xs2aOverdraftLimitCheckResponse;
    /**
     *
     * @type {Xs2aSeizureCheckResponse}
     * @memberof RiskObject
     */
    xs2a_seizure_check?: Xs2aSeizureCheckResponse;
    /**
     *
     * @type {Xs2aStandingOrdersCheckResponse}
     * @memberof RiskObject
     */
    xs2a_standing_orders_check?: Xs2aStandingOrdersCheckResponse;
    /**
     *
     * @type {Xs2aAllAccountsCheckResponse}
     * @memberof RiskObject
     */
    xs2a_all_accounts_check?: Xs2aAllAccountsCheckResponse;
    /**
     *
     * @type {Xs2aAccountStatusCheckResponse}
     * @memberof RiskObject
     */
    xs2a_account_status_check?: Xs2aAccountStatusCheckResponse;
    /**
     *
     * @type {Xs2aHolderIdentificationCheckResponse}
     * @memberof RiskObject
     */
    xs2a_holder_identification_check?: Xs2aHolderIdentificationCheckResponse;
    /**
     *
     * @type {Xs2aRiskCalculationsCheckResponse}
     * @memberof RiskObject
     */
    xs2a_risk_calculations_check?: Xs2aRiskCalculationsCheckResponse;
    /**
     *
     * @type {Xs2aAccountCharacteristicsCheckResponse}
     * @memberof RiskObject
     */
    xs2a_account_characteristics_check?: Xs2aAccountCharacteristicsCheckResponse;
}
/**
 *
 * @export
 * @interface RisksTransactionList
 */
export interface RisksTransactionList {
    /**
     * Total number of results.
     * @type {number}
     * @memberof RisksTransactionList
     */
    total: number;
    /**
     * Number of objects per page
     * @type {number}
     * @memberof RisksTransactionList
     */
    per_page: number;
    /**
     * Current page.
     * @type {number}
     * @memberof RisksTransactionList
     */
    current_page: number;
    /**
     * Last page, usually the total of available pages.
     * @type {number}
     * @memberof RisksTransactionList
     */
    last_page: number;
    /**
     * Showing results from index element.
     * @type {number}
     * @memberof RisksTransactionList
     */
    from?: number;
    /**
     * Showing results to index element.
     * @type {number}
     * @memberof RisksTransactionList
     */
    to?: number;
    /**
     *
     * @type {Array<RiskObject>}
     * @memberof RisksTransactionList
     */
    data: RiskObject[];
}
interface EasyOnboardingOverwrite {
    success_link: string;
    abort_link: string;
}
/**
 *
 * @export
 * @interface Xs2aRiskUploadJsonWrapper
 */
export interface Xs2aRiskUploadJsonWrapper {
    /**
     *
     * @type {any}
     * @memberof Xs2aRiskUploadJsonWrapper
     */
    account?: any;
    /**
     *
     * @type {any}
     * @memberof Xs2aRiskUploadJsonWrapper
     */
    balance?: any;
    /**
     *
     * @type {any}
     * @memberof Xs2aRiskUploadJsonWrapper
     */
    turnovers?: any;
}
/**
 *
 * @export
 * @interface Xs2aRiskUploadJsonSuccess
 */
export interface Xs2aRiskUploadJsonSuccess {
    /**
     *
     * @type {string}
     * @memberof Xs2aRiskUploadJsonSuccess
     */
    id?: string;
    /**
     *
     * @type {string}
     * @memberof Xs2aRiskUploadJsonSuccess
     */
    transaction?: string;
    /**
     *
     * @type {string}
     * @memberof Xs2aRiskUploadJsonSuccess
     */
    account_holder?: string;
    /**
     *
     * @type {string}
     * @memberof Xs2aRiskUploadJsonSuccess
     */
    iban?: string;
    /**
     *
     * @type {string}
     * @memberof Xs2aRiskUploadJsonSuccess
     */
    bic?: string;
    /**
     *
     * @type {string}
     * @memberof Xs2aRiskUploadJsonSuccess
     */
    bank_name?: string;
    /**
     *
     * @type {Country}
     * @memberof Xs2aRiskUploadJsonSuccess
     */
    country_id?: Country;
    /**
     *
     * @type {number}
     * @memberof Xs2aRiskUploadJsonSuccess
     */
    testmode?: number;
    /**
     *
     * @type {string}
     * @memberof Xs2aRiskUploadJsonSuccess
     */
    created_at?: string;
    /**
     *
     * @type {string}
     * @memberof Xs2aRiskUploadJsonSuccess
     */
    metadata?: string;
    /**
     *
     * @type {string}
     * @memberof Xs2aRiskUploadJsonSuccess
     */
    merchant_id?: string;
    /**
     *
     * @type {string}
     * @memberof Xs2aRiskUploadJsonSuccess
     */
    object?: string;
}
/**
 * The format parameter (optional) defines which format you are about to upload.
 * The account snapshot upload function is available in the following formats: json and CAMT.
 * This call defaults to json if the format parameter is omitted.
 * If you are using CAMT format, please insert the whole camt xml code as payload. (no json)
 */
export declare enum UploadFormat {
    JSON = "json",
    JSON2 = "json2",
    CAMT = "camt"
}
export {};

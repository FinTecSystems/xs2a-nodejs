import { Country } from "./country";
import { Currency } from "./currency";
import { Language } from "./language";
/**
 *
 * @export
 * @interface PayRequest
 */
export interface PayRequest {
    /**
     * The amount to be transferred, either in EUR or CHF (depending on `currency_id`). This is a float, meaning for i.e. 1,50 Euro, you would send `1.5`, and for 15 Euro, you would send `15.0`.
     * @type {number}
     * @memberof PayRequest
     */
    amount: number;
    /**
     *
     * @type {CurrencyId}
     * @memberof PayRequest
     */
    currency_id: Currency;
    /**
     * We suggest to keep the purpose as short as possible (between 5 and 140 characters) and to place critical information at the beginning of the purpose. The reason for this suggestion is that we might have to limit the length of your given purpose. A SEPA purpose can be up to 140 characters. However some banks only offer a reference field which is limited to 35 characters. If your purpose is longer than bank supported purpose field, we will shorten it to the maximum length supported by that bank. Not all characters are supported for the purpose field. Sender banks impose different rules for the purpose field, therefore we suggest to limit the character set to a-z, A-Z, 0-9. If you use other characters please be advised that we might have to remove or replace characters considered invalid by the sender bank. We usually will replace the invalid characters with a whitespace or normalize the characters.
     * @type {string}
     * @memberof PayRequest
     */
    purpose: string;
    /**
     * Sender banks impose different rules for the recipient_holder field, we suggest to limit the character set to a-z, A-Z, 0-9. If you use other characters please be advised that we might have to remove or replace characters considered invalid by the sender bank. We usually will replace the invalid characters with a whitespace or normalize the characters.
     * @type {string}
     * @memberof PayRequest
     */
    recipient_holder: string;
    /**
     * IBAN of the recipient account
     * @type {string}
     * @memberof PayRequest
     */
    recipient_iban: string;
    /**
     *
     * @type {any}
     * @memberof PayRequest
     */
    metadata?: any;
    /**
     *
     * @type {Language}
     * @memberof PayRequest
     */
    language?: Language;
    /**
     * The internal ID of your merchant, if any. You may fill this field with the internal ID your merchant, if you are a PSP.
     * @type {string}
     * @memberof PayRequest
     */
    merchant_id?: string;
    /**
     * The fints product ID can be enclosed in the initial request. If you have an eIDAS certificate, then you have to send it with every request.
     * @type {string}
     * @memberof PayRequest
     */
    fints_product_id?: string;
    /**
     *
     * @type {any}
     * @memberof PayRequest
     */
    easy_onboarding?: any;
    /**
     * Name of the sender account holder. If this is set, the account holder will be pinned and validated for the current session. The customer will not be able to choose an account with a different name than provided. The name will be compared with our XS2A.name_check module. A match is not only string equals. To a certain point changes in the name will be tolerated. (i.e. a prepending academic title will not break the match)
     * @type {string}
     * @memberof PayRequest
     */
    sender_holder?: string;
    /**
     * IBAN of the sender account. If it is a valid IBAN, the IBAN will be pinned for the current session. The customer will not be able to choose a different account, even if there are more accounts available to chose from. If the given IBAN is not in the customer list of accounts, the transaction will be aborted. In the case of an invalid IBAN XS2A will return a validation error with HTTP status code 422.
     * @type {string}
     * @memberof PayRequest
     */
    sender_iban?: string;
    /**
     * BIC of the sender account. If the given BIC is valid, the step/page for entering a bank code will be skipped.
     * @type {string}
     * @memberof PayRequest
     */
    sender_bic?: string;
    /**
     * Two letter country code id of the sender account, e.g. AT, CH, DE
     * @type {Country}
     * @memberof PayRequest
     */
    sender_country_id?: Country;
    /**
     * BIC of the recipient account
     * @type {string}
     * @memberof PayRequest
     */
    recipient_bic?: string;
    /**
     * Street of the recipient account. **Required if `sender_country_id` is `CH`**
     * @type {string}
     * @memberof PayRequest
     */
    recipient_street?: string;
    /**
     * Zip-code of the recipient account. **Required if `sender_country_id` is `CH`**
     * @type {string}
     * @memberof PayRequest
     */
    recipient_zip?: string;
    /**
     * City of the recipient account. **Required if `sender_country_id` is `CH`**
     * @type {string}
     * @memberof PayRequest
     */
    recipient_city?: string;
    /**
     * Two letter country code id, e.g. AT, CH, DE
     * @type {Country}
     * @memberof PayRequest
     */
    recipient_country_id?: Country;
}
/**
 *
 * @export
 * @interface PayObject
 */
export interface PayObject {
    /**
     * Transaction id
     * @type {string}
     * @memberof PayObject
     */
    id: string;
    /**
     * Internal XS2A transaction id. This id will be the same for the whole transaction
     * @type {string}
     * @memberof PayObject
     */
    transaction: string;
    /**
     * Account holder of the sender account
     * @type {string}
     * @memberof PayObject
     */
    sender_holder?: string;
    /**
     * IBAN of the sender account
     * @type {string}
     * @memberof PayObject
     */
    sender_iban?: string;
    /**
     * BIC of the sender account
     * @type {string}
     * @memberof PayObject
     */
    sender_bic?: string;
    /**
     * Name of the sender bank
     * @type {string}
     * @memberof PayObject
     */
    sender_bank_name?: string;
    /**
     * Two letter country code id, e.g. AT, CH, DE or the sender account
     * @type {Country}
     * @memberof PayObject
     */
    sender_country_id?: Country;
    /**
     * Account holder of the recipient account
     * @type {string}
     * @memberof PayObject
     */
    recipient_holder?: string;
    /**
     * IBAN of the recipient account
     * @type {string}
     * @memberof PayObject
     */
    recipient_iban?: string;
    /**
     * BIC of the recipient account
     * @type {string}
     * @memberof PayObject
     */
    recipient_bic?: string;
    /**
     * Name of the recipient bank
     * @type {string}
     * @memberof PayObject
     */
    recipient_bank_name?: string;
    /**
     * Two letter country code id, e.g. AT, CH, DE or the recipient account
     * @type {Country}
     * @memberof PayObject
     */
    recipient_country_id?: Country;
    /**
     * Purpose of transfer
     * @type {string}
     * @memberof PayObject
     */
    purpose: string;
    /**
     * Amount to transfer
     * @type {number}
     * @memberof PayObject
     */
    amount: number;
    /**
     * Currency id of amount, e.g. 'EUR'
     * @type {Currency}
     * @memberof PayObject
     */
    currency_id?: Currency;
    /**
     * Indicates whether or not it is a test transaction
     * @type {string}
     * @memberof PayObject
     */
    testmode: string;
    /**
     * Payment status of the transaction, values NONE, RECEIVED, LOSS
     * @type {string}
     * @memberof PayObject
     */
    payment_status: PaymentStatus;
    /**
     * Custom data will be returned unchanged. If no data was submitted, this field will be null
     * @type {any}
     * @memberof PayObject
     */
    metadata?: any;
    /**
     * Data will be returned unchanged
     * @type {string}
     * @memberof PayObject
     */
    merchant_id?: string;
    /**
     * Object type, in this case a xs2a_payment
     * @type {string}
     * @memberof PayObject
     */
    object: string;
}
export interface PayQueryParameters {
    /**
     * Holder of the sender account
     */
    sender_holder?: string;
    /**
     * IBAN of the sender account
     */
    sender_iban?: string;
    /**
     * BIC of the sender account
     */
    sender_bic?: string;
    /**
     * Account number of the sender account
     */
    sender_account_number?: string;
    /**
     * National bank code of the sender account
     */
    sender_bank_code?: string;
    /**
     * Two letter country code id of the sender account, e.g. AT, CH, DE
     */
    sender_country_id?: Country;
    /**
     * Holder of the recipient account
     */
    recipient_holder?: string;
    /**
     * IBAN of the recipient account
     */
    recipient_iban?: string;
    /**
     * BIC of the recipient account
     */
    recipient_bic?: string;
    /**
     * Two letter country code id of the recipient account, e.g. AT, CH, DE
     */
    recipient_country_id?: Country;
    /**
     * Amount to transfer
     */
    amount?: number;
    /**
     * Purpose of transfer
     */
    purpose?: string;
    /**
     * Items per page
     */
    per_page?: number;
    /**
     * Which page to display
     */
    page?: number;
    /**
     * Filter by date. Pass ISO8601 conform dates (yyyy-mm-ddThh:mm:ss-zzzz). The time and timezone portions are optional and may be omitted (e.g yyyy-mm-dd or yyyy-mm-ddThh:mm:ss).
     */
    from?: string;
    /**
     * Filter by date. Pass ISO8601 conform dates (yyyy-mm-ddThh:mm:ss-zzzz). The time and timezone portions are optional and may be omitted (e.g yyyy-mm-dd or yyyy-mm-ddThh:mm:ss).
     */
    to?: string;
}
/**
 *
 * @export
 * @interface PaymentsTransactionList
 */
export interface PaymentsTransactionList {
    /**
     * Total number of results.
     * @type {number}
     * @memberof PaymentsTransactionList
     */
    total: number;
    /**
     * Number of objects per page
     * @type {number}
     * @memberof PaymentsTransactionList
     */
    per_page: number;
    /**
     * Current page.
     * @type {number}
     * @memberof PaymentsTransactionList
     */
    current_page: number;
    /**
     * Last page, usually the total of available pages.
     * @type {number}
     * @memberof PaymentsTransactionList
     */
    last_page: number;
    /**
     * Showing results from index element.
     * @type {number}
     * @memberof PaymentsTransactionList
     */
    from?: number;
    /**
     * Showing results to index element.
     * @type {number}
     * @memberof PaymentsTransactionList
     */
    to?: number;
    /**
     *
     * @type {Array<RiskObject>}
     * @memberof PaymentsTransactionList
     */
    data: PayObject[];
}
export declare enum PaymentStatus {
    RECEIVED = "RECEIVED",
    LOSS = "LOSS",
    NONE = "NONE"
}

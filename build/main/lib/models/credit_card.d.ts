import { Country } from "./country";
/**
 *
 * @export
 * @interface CreditCardsObject
 */
export interface CreditCardsObject {
    /**
     * name of the account holder
     * @type {string}
     * @memberof CreditCardsObject
     */
    holder: string;
    /**
     * credit card number, shaded
     * @type {string}
     * @memberof CreditCardsObject
     */
    iban: string;
    /**
     *
     * @type {string}
     * @memberof CreditCardsObject
     */
    bic: string;
    /**
     *
     * @type {Country}
     * @memberof CreditCardsObject
     */
    country_id: Country;
    /**
     * name of the bank
     * @type {string}
     * @memberof CreditCardsObject
     */
    bank_name: string;
    /**
     * type of the credit card
     * @type {string}
     * @memberof CreditCardsObject
     */
    description: string;
}

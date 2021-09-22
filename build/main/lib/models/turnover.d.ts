import { Currency } from ".";
/**
 *
 * @export
 * @interface Turnover
 */
export interface Turnover {
    /**
     * The booking date.
     * @type {string}
     * @memberof Turnover
     */
    booking_date: string;
    /**
     * The turnover amount. Negative for expenditures.
     * @type {number}
     * @memberof Turnover
     */
    amount: number;
    /**
     * The two-letter currency ID, e.g. 'EUR'
     * @type {string}
     * @memberof Turnover
     */
    currency?: Currency;
    /**
     * A string array of purpose lines. The contents vary from bank to bank.
     * @type {Array<string>}
     * @memberof Turnover
     */
    purpose: string[];
    /**
     * The counter IBAN of the booking. This is not always present.
     * @type {string}
     * @memberof Turnover
     */
    counter_iban?: string;
    /**
     * The counter BIC of the booking. This is not always present.
     * @type {string}
     * @memberof Turnover
     */
    counter_bic?: string;
    /**
     * The counter holder of the booking. This is not always present.
     * @type {string}
     * @memberof Turnover
     */
    counter_holder?: string;
    /**
     * True, if the turnover has not been booked yet
     * @type {boolean}
     * @memberof Turnover
     */
    prebooked?: boolean;
    /**
     * True, if the turnover has been canceled.
     * @type {boolean}
     * @memberof Turnover
     */
    canceled?: boolean;
    /**
     * An array of strings of tags for this turnover. Find all possible tags here: https://manage.xs2a.com/documentation/tags
     * @type {Array<string>}
     * @memberof Turnover
     */
    tags?: string[];
    /**
     * The ID of the category found for this turnover.  The structure of this `category_id` string is hierarchical, meaning,  the more numbers there are, the more detailed the category is. For example, while `K.1` means \"expenses for wholesale and retail trade\", some  turnovers might be categorized more detailed as `K.1.1` (\"expenses in retail stores\"), or even as `K.1.1.1` (\"groceries full-range trader\"). You can find the complete list of categories [here](https://manage.xs2a.com/documentation/categories).  **NOTE**: As new categories are introduced and the categorization itself is improved constantly, it is possible that  the same turnover can be categorized with a different (more detailed) `category_id` at a future point in time. You should develop your application in such a way,  that, for example, if your logic relies on something happening when a `category_id` is `K.1.1`, but you get `K.1.2` for which no logic is in place (because it might be  a new `category_id` or the turnover is now categorized more detailed), **you should always fall back to the next higher level category**, in this case `K.1`. This way, your logic can  still handle the turnover based on a more general category, while not throwing an error.
     * @type {string}
     * @memberof Turnover
     */
    category_id?: string;
    /**
     * The ID of the creditor.
     * @type {string}
     * @memberof Turnover
     */
    creditor_id?: string;
    /**
     * True, if this turnover is new since the last sync.
     * @type {boolean}
     * @memberof Turnover
     */
    new?: boolean;
}

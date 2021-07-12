import { PayObject } from "./pay";
import { RiskObject } from "./risk";
/**
 *
 * @export
 * @interface EventObject
 */
export interface EventObject {
    /**
     * Transaction id
     * @type {string}
     * @memberof EventObject
     */
    id: string;
    /**
     * The transaction ID this object belongs to. May be null for some events.
     * @type {string}
     * @memberof EventObject
     */
    transaction: string;
    /**
     * The type of event. transaction.created or transaction.updated
     * @type {string}
     * @memberof EventObject
     */
    type: string;
    /**
     * The object, that this event relates to. This is usually a transaction object.
     * @type {RiskObject | PayObject}
     * @memberof EventObject
     */
    data: RiskObject | PayObject;
    /**
     * Indicates whether or not this event belongs to a test transaction
     * @type {string}
     * @memberof EventObject
     */
    testmode: string;
    /**
     * A human readable message that describes this event.
     * @type {string}
     * @memberof EventObject
     */
    message: string;
    /**
     * The date the event was fired.
     * @type {string}
     * @memberof EventObject
     */
    created_at: string;
    /**
     * xs2a_event for event objects.
     * @type {string}
     * @memberof EventObject
     */
    object: string;
}
/**
 *
 * @export
 * @interface EventsList
 */
export interface EventsList {
    /**
     * Total number of results.
     * @type {number}
     * @memberof EventsList
     */
    total: number;
    /**
     * Number of objects per page
     * @type {number}
     * @memberof EventsList
     */
    per_page: number;
    /**
     * Current page.
     * @type {number}
     * @memberof EventsList
     */
    current_page: number;
    /**
     * Last page, usually the total of available pages.
     * @type {number}
     * @memberof EventsList
     */
    last_page: number;
    /**
     * URI to next page.
     * @type {string}
     * @memberof EventsList
     */
    next_page_url: string;
    /**
     * URI to previous page.
     * @type {string}
     * @memberof EventsList
     */
    prev_page_url: string;
    /**
     * Showing results from index element.
     * @type {number}
     * @memberof EventsList
     */
    from: number;
    /**
     * Showing results to index element.
     * @type {number}
     * @memberof EventsList
     */
    to: number;
    /**
     *
     * @type {Array<EventObject>}
     * @memberof EventsList
     */
    data: EventObject[];
}
export interface EventsQueryParameters {
    /**
     * transaction id for which all events are to be retrieved for.
     */
    transaction_id?: string;
    /**
     * The type of event e.g. 'transaction.created' or 'transaction.updated' etc.
     */
    type?: string;
    /**
     * Items per page
     */
    per_page?: number;
    /**
     * Which page to display
     */
    page?: number;
    /**
     * Filter by date. Pass ISO8861 conform dates (yyyy-mm-ddThh:mm:ss-zzzz). The time and timezone portions are optional and may be omitted (e.g yyyy-mm-dd or yyyy-mm-ddThh:mm:ss).
     */
    from?: string;
    /**
     * Filter by date. Pass ISO8861 conform dates (yyyy-mm-ddThh:mm:ss-zzzz). The time and timezone portions are optional and may be omitted (e.g yyyy-mm-dd or yyyy-mm-ddThh:mm:ss).
     */
    to?: string;
    /**
     * Filter by date (format yyyy-mm-dd or yyyy-mm-ddThh:mm:ssZ or an ISO8601 conform date. You can also supply date expressions like \&quot;-2 weeks\&quot; oder \&quot;-4 month\&quot;). This parameter has been deprecated in favor of from and to.
     */
    since?: string;
}

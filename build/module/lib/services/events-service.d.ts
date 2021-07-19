import { EventObject, EventsList, EventsQueryParameters } from '../models/event';
export declare class EventsService {
    constructor();
    /**
     * An event is basically the API representation of a webhook. Every webhook you receive fires an event, that you can process further.
     * @summary Get all events for a xs2a transaction object
     * @param {EventsQueryParameters} [parameters={}] (Optional) Filter Parameters
     * @returns {Promise<EventsList>}
     */
    getAll(parameters?: EventsQueryParameters): Promise<EventsList>;
    /**
     * Download a specific event for a xs2a transaction object
     * @param {string} eventId id of event to retrieve
     * @returns {Promise<EventObject>}
     */
    get(eventId: string): Promise<EventObject>;
}

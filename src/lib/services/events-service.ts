import { axios } from '../axios-instance';
import { EventObject, EventsList, EventsQueryParameters } from '../models/event';

export class EventsService {
	constructor() {}

	/**
	 * An event is basically the API representation of a webhook. Every webhook you receive fires an event, that you can process further.
	 * @summary Get all events for a xs2a transaction object
	 * @param {EventsQueryParameters} [parameters={}] (Optional) Filter Parameters
	 * @returns {Promise<EventsList>}
	 */
	public getAll(parameters: EventsQueryParameters = {}): Promise<EventsList> {
		return new Promise((resolve, reject) => {
			axios
				.get('/v1/events', { params: parameters })
				.then(response => {
					resolve(response.data);
				})
				.catch(error => {
					reject(error.response.data);
				});
		});
	}

	/**
	 * Download a specific event for a xs2a transaction object
	 * @param {string} eventId id of event to retrieve
	 * @returns {Promise<EventObject>}
	 */
	public get(eventId: string): Promise<EventObject> {
		return new Promise((resolve, reject) => {
			axios
				.get(`/v1/events/${eventId}`)
				.then(response => {
					resolve(response.data);
				})
				.catch(error => {
					reject(error.response.data);
				});
		});
	}
}
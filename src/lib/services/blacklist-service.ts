import { axios } from '../axios-instance';
import { BlacklistAdd, BlacklistObject } from '../models/blacklist';

export class BlacklistService {
	constructor() {}

	/**
	 * Add an entry to the blacklist
	 * @param {BlacklistAdd} entry entry to add
	 * @returns {Promise<BlacklistObject>}
	 */
	public add(entry: BlacklistAdd): Promise<BlacklistObject> {
		return new Promise((resolve, reject) => {
			axios
				.post('/v1/blacklist', entry)
				.then(response => {
					resolve(response.data);
				})
				.catch(error => {
					reject(error.response.data);
				});
		});
	}

	/**
	 * Get the details about a blacklist item
	 * @param {string} id id of entry to get
	 * @returns {Promise<BlacklistObject>}
	 */
	public get(id: string): Promise<BlacklistObject> {
		return new Promise((resolve, reject) => {
			axios
				.get(`/v1/blacklist/${id}`)
				.then(response => {
					resolve(response.data);
				})
				.catch(error => {
					reject(error.response.data);
				});
		});
	}

	/**
	 * Remove an entry from the blacklist
	 * @param {string} id id of entry to remove
	 * @returns {Promise<BlacklistObject>}
	 */
	public delete(id: string): Promise<BlacklistObject> {
		return new Promise((resolve, reject) => {
			axios
				.delete(`/v1/blacklist/${id}`)
				.then(response => {
					resolve(response.data);
				})
				.catch(error => {
					reject(error.response.data);
				});
		});
	}
}
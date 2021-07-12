import { axios } from '../axios-instance';
import { WhitelistAdd, WhitelistObject } from '../models/whitelist';

export class WhitelistService {
	constructor() {}

	/**
	 * Add an entry to the whitelist
	 * @param {WhitelistAdd} entry entry to add
	 * @returns {Promise<WhitelistObject>}
	 */
	public add(entry: WhitelistAdd): Promise<WhitelistObject> {
		return new Promise((resolve, reject) => {
			axios
				.post('/whitelist', entry)
				.then(response => {
					resolve(response.data);
				})
				.catch(error => {
					reject(error.response.data);
				});
		});
	}

	/**
	 * Get the details about a whitelist item
	 * @param id id of entry to get
	 * @returns {Promise<WhitelistObject>}
	 */
	public get(id: string): Promise<WhitelistObject> {
		return new Promise((resolve, reject) => {
			axios
				.get(`/whitelist/${id}`)
				.then(response => {
					resolve(response.data);
				})
				.catch(error => {
					reject(error.response.data);
				});
		});
	}

	/**
	 * Remove an entry from the whitelist
	 * @param id id of entry to remove
	 * @returns {Promise<WhitelistObject>}
	 */
	public delete(id: string): Promise<WhitelistObject> {
		return new Promise((resolve, reject) => {
			axios
				.delete(`/whitelist/${id}`)
				.then(response => {
					resolve(response.data);
				})
				.catch(error => {
					reject(error.response.data);
				});
		});
	}
}
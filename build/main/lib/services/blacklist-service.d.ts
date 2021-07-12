import { BlacklistAdd, BlacklistObject } from '../models/blacklist';
export declare class BlacklistService {
    constructor();
    /**
     * Add an entry to the blacklist
     * @param {BlacklistAdd} entry entry to add
     * @returns {Promise<BlacklistObject>}
     */
    add(entry: BlacklistAdd): Promise<BlacklistObject>;
    /**
     * Get the details about a blacklist item
     * @param id id of entry to get
     * @returns {Promise<BlacklistObject>}
     */
    get(id: string): Promise<BlacklistObject>;
    /**
     * Remove an entry from the blacklist
     * @param id id of entry to remove
     * @returns {Promise<BlacklistObject>}
     */
    delete(id: string): Promise<BlacklistObject>;
}

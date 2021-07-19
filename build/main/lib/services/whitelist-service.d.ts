import { WhitelistAdd, WhitelistObject } from '../models/whitelist';
export declare class WhitelistService {
    constructor();
    /**
     * Add an entry to the whitelist
     * @param {WhitelistAdd} entry entry to add
     * @returns {Promise<WhitelistObject>}
     */
    add(entry: WhitelistAdd): Promise<WhitelistObject>;
    /**
     * Get the details about a whitelist item
     * @param {string} id id of entry to get
     * @returns {Promise<WhitelistObject>}
     */
    get(id: string): Promise<WhitelistObject>;
    /**
     * Remove an entry from the whitelist
     * @param {string} id id of entry to remove
     * @returns {Promise<WhitelistObject>}
     */
    delete(id: string): Promise<WhitelistObject>;
}

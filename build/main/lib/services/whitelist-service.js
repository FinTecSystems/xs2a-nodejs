"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WhitelistService = void 0;
const axios_instance_1 = require("../axios-instance");
class WhitelistService {
    constructor() { }
    /**
     * Add an entry to the whitelist
     * @param {WhitelistAdd} entry entry to add
     * @returns {Promise<WhitelistObject>}
     */
    add(entry) {
        return new Promise((resolve, reject) => {
            axios_instance_1.axios
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
    get(id) {
        return new Promise((resolve, reject) => {
            axios_instance_1.axios
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
    delete(id) {
        return new Promise((resolve, reject) => {
            axios_instance_1.axios
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
exports.WhitelistService = WhitelistService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2hpdGVsaXN0LXNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL3NlcnZpY2VzL3doaXRlbGlzdC1zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHNEQUEwQztBQUcxQyxNQUFhLGdCQUFnQjtJQUM1QixnQkFBZSxDQUFDO0lBRWhCOzs7O09BSUc7SUFDSSxHQUFHLENBQUMsS0FBbUI7UUFDN0IsT0FBTyxJQUFJLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTtZQUN0QyxzQkFBSztpQkFDSCxJQUFJLENBQUMsWUFBWSxFQUFFLEtBQUssQ0FBQztpQkFDekIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFO2dCQUNoQixPQUFPLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3hCLENBQUMsQ0FBQztpQkFDRCxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQ2QsTUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDN0IsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNKLENBQUM7SUFFRDs7OztPQUlHO0lBQ0ksR0FBRyxDQUFDLEVBQVU7UUFDcEIsT0FBTyxJQUFJLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTtZQUN0QyxzQkFBSztpQkFDSCxHQUFHLENBQUMsY0FBYyxFQUFFLEVBQUUsQ0FBQztpQkFDdkIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFO2dCQUNoQixPQUFPLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3hCLENBQUMsQ0FBQztpQkFDRCxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQ2QsTUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDN0IsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNKLENBQUM7SUFFRDs7OztPQUlHO0lBQ0ksTUFBTSxDQUFDLEVBQVU7UUFDdkIsT0FBTyxJQUFJLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTtZQUN0QyxzQkFBSztpQkFDSCxNQUFNLENBQUMsY0FBYyxFQUFFLEVBQUUsQ0FBQztpQkFDMUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFO2dCQUNoQixPQUFPLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3hCLENBQUMsQ0FBQztpQkFDRCxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQ2QsTUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDN0IsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNKLENBQUM7Q0FDRDtBQXhERCw0Q0F3REMifQ==
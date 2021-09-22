"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SessionService = void 0;
const axios_instance_1 = require("../axios-instance");
class SessionService {
    constructor() { }
    /**
     * Get a session object for a transaction ID.
     * @summary This will return a wizard_session object.
     * @param {string} transactionId To query this, you can use the transaction-id, which is returned, after the session is created.
     * @returns {Promise<WizardSessionObject>}
     */
    get(transactionId) {
        return new Promise((resolve, reject) => {
            axios_instance_1.axios
                .get(`/v1/sessions/${transactionId}`)
                .then(response => {
                resolve(response.data);
            })
                .catch(error => {
                reject(error.response.data);
            });
        });
    }
}
exports.SessionService = SessionService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Vzc2lvbi1zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9zZXJ2aWNlcy9zZXNzaW9uLXNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsc0RBQTBDO0FBRzFDLE1BQWEsY0FBYztJQUMxQixnQkFBZSxDQUFDO0lBRWhCOzs7OztPQUtHO0lBQ0ksR0FBRyxDQUFDLGFBQXFCO1FBQy9CLE9BQU8sSUFBSSxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEVBQUU7WUFDdEMsc0JBQUs7aUJBQ0gsR0FBRyxDQUFDLGdCQUFnQixhQUFhLEVBQUUsQ0FBQztpQkFDcEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFO2dCQUNoQixPQUFPLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3hCLENBQUMsQ0FBQztpQkFDRCxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQ2QsTUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDN0IsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNKLENBQUM7Q0FDRDtBQXJCRCx3Q0FxQkMifQ==
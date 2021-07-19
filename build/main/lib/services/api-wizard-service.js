"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.APIWizardService = void 0;
const axios_instance_1 = require("../axios-instance");
class APIWizardService {
    constructor() { }
    /**
     * Navigate the Wizard from within a Bank Users Scope
     * @param {WizardApiRequest} request The wizard request to send
     * @returns {Promise<WizardResponse | WizardFinalResponse>} Either another WizardResponse (step) or the final response
     */
    navigate(request) {
        return new Promise((resolve, reject) => {
            axios_instance_1.axios
                .post('/api/wizard', request)
                .then(response => {
                resolve(response.data);
            })
                .catch(error => {
                reject(error.response.data);
            });
        });
    }
}
exports.APIWizardService = APIWizardService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLXdpemFyZC1zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9zZXJ2aWNlcy9hcGktd2l6YXJkLXNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsc0RBQTBDO0FBRzFDLE1BQWEsZ0JBQWdCO0lBQzVCLGdCQUFlLENBQUM7SUFFaEI7Ozs7T0FJRztJQUNJLFFBQVEsQ0FBQyxPQUF5QjtRQUN4QyxPQUFPLElBQUksT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFO1lBQ3RDLHNCQUFLO2lCQUNILElBQUksQ0FBQyxhQUFhLEVBQUUsT0FBTyxDQUFDO2lCQUM1QixJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUU7Z0JBQ2hCLE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDeEIsQ0FBQyxDQUFDO2lCQUNELEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFDZCxNQUFNLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUM3QixDQUFDLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ0osQ0FBQztDQUNEO0FBcEJELDRDQW9CQyJ9
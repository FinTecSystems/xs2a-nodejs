"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventsService = void 0;
const axios_instance_1 = require("../axios-instance");
class EventsService {
    constructor() { }
    /**
     * An event is basically the API representation of a webhook. Every webhook you receive fires an event, that you can process further.
     * @summary Get all events for a xs2a transaction object
     * @returns {Promise<WizardSessionObject>}
     */
    getAll(parameters = {}) {
        return new Promise((resolve, reject) => {
            axios_instance_1.axios
                .get('/events', { params: parameters })
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
    get(eventId) {
        return new Promise((resolve, reject) => {
            axios_instance_1.axios
                .get(`/events/${eventId}`)
                .then(response => {
                resolve(response.data);
            })
                .catch(error => {
                reject(error.response.data);
            });
        });
    }
}
exports.EventsService = EventsService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZlbnRzLXNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL3NlcnZpY2VzL2V2ZW50cy1zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHNEQUEwQztBQUcxQyxNQUFhLGFBQWE7SUFDekIsZ0JBQWUsQ0FBQztJQUVoQjs7OztPQUlHO0lBQ0ksTUFBTSxDQUFDLGFBQW9DLEVBQUU7UUFDbkQsT0FBTyxJQUFJLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTtZQUN0QyxzQkFBSztpQkFDSCxHQUFHLENBQUMsU0FBUyxFQUFFLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxDQUFDO2lCQUN0QyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUU7Z0JBQ2hCLE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDeEIsQ0FBQyxDQUFDO2lCQUNELEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFDZCxNQUFNLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUM3QixDQUFDLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQUVEOzs7O09BSUc7SUFDSSxHQUFHLENBQUMsT0FBZTtRQUN6QixPQUFPLElBQUksT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFO1lBQ3RDLHNCQUFLO2lCQUNILEdBQUcsQ0FBQyxXQUFXLE9BQU8sRUFBRSxDQUFDO2lCQUN6QixJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUU7Z0JBQ2hCLE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDeEIsQ0FBQyxDQUFDO2lCQUNELEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFDZCxNQUFNLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUM3QixDQUFDLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ0osQ0FBQztDQUNEO0FBdENELHNDQXNDQyJ9
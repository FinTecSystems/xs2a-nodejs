"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.XS2A = void 0;
const axios_instance_1 = require("./axios-instance");
const environment_1 = require("./conf/environment");
const api_service_1 = require("./services/api-service");
const blacklist_service_1 = require("./services/blacklist-service");
const events_service_1 = require("./services/events-service");
const pay_service_1 = require("./services/pay-service");
const risk_service_1 = require("./services/risk-service");
const session_service_1 = require("./services/session-service");
const whitelist_service_1 = require("./services/whitelist-service");
const wizard_service_1 = require("./services/wizard-service");
class XS2A {
    constructor(apiKey, url = environment_1.API_BASE_URL) {
        this.apiKey = apiKey;
        axios_instance_1.axios.defaults.headers.common.Authorization = `Basic ${Buffer.from(`api:${this.apiKey}`).toString('base64')}`;
        axios_instance_1.axios.defaults.headers.common['Content-Type'] = 'application/json';
        axios_instance_1.axios.defaults.headers.common['X-Client'] = 'xs2a-node';
        axios_instance_1.axios.defaults.headers.common['X-Client-Version'] = '1.0.3';
        axios_instance_1.axios.defaults.baseURL = url;
        this.Risk = new risk_service_1.RiskService();
        this.Pay = new pay_service_1.PayService();
        this.API = new api_service_1.APIService();
        this.Blacklist = new blacklist_service_1.BlacklistService();
        this.Whitelist = new whitelist_service_1.WhitelistService();
        this.Events = new events_service_1.EventsService();
        this.Sessions = new session_service_1.SessionService();
        this.Wizard = new wizard_service_1.WizardService();
    }
}
exports.XS2A = XS2A;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieHMyYS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9saWIveHMyYS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxxREFBeUM7QUFDekMsb0RBQWtEO0FBQ2xELHdEQUFvRDtBQUNwRCxvRUFBZ0U7QUFDaEUsOERBQTBEO0FBQzFELHdEQUFvRDtBQUNwRCwwREFBc0Q7QUFDdEQsZ0VBQTREO0FBQzVELG9FQUFnRTtBQUNoRSw4REFBMEQ7QUFFMUQsTUFBYSxJQUFJO0lBVWhCLFlBQW9CLE1BQWMsRUFBRSxHQUFHLEdBQUcsMEJBQVk7UUFBbEMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNqQyxzQkFBSyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLGFBQWEsR0FBRyxTQUFTLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQztRQUM5RyxzQkFBSyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxHQUFHLGtCQUFrQixDQUFDO1FBQ25FLHNCQUFLLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLEdBQUcsV0FBVyxDQUFDO1FBQ3hELHNCQUFLLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsa0JBQWtCLENBQUMsR0FBRyxPQUFPLENBQUM7UUFDNUQsc0JBQUssQ0FBQyxRQUFRLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQztRQUU3QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksMEJBQVcsRUFBRSxDQUFDO1FBQzlCLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSx3QkFBVSxFQUFFLENBQUM7UUFDNUIsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLHdCQUFVLEVBQUUsQ0FBQztRQUM1QixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksb0NBQWdCLEVBQUUsQ0FBQztRQUN4QyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksb0NBQWdCLEVBQUUsQ0FBQztRQUN4QyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksOEJBQWEsRUFBRSxDQUFDO1FBQ2xDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxnQ0FBYyxFQUFFLENBQUM7UUFDckMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLDhCQUFhLEVBQUUsQ0FBQztJQUNuQyxDQUFDO0NBQ0Q7QUExQkQsb0JBMEJDIn0=
import { axios } from './axios-instance';
import { API_BASE_URL } from './conf/environment';
import { APIService } from './services/api-service';
import { BlacklistService } from './services/blacklist-service';
import { EventsService } from './services/events-service';
import { PayService } from './services/pay-service';
import { RiskService } from './services/risk-service';
import { SessionService } from './services/session-service';
import { WhitelistService } from './services/whitelist-service';
import { WizardService } from './services/wizard-service';
export class XS2A {
    apiKey;
    Risk;
    Pay;
    API;
    Blacklist;
    Whitelist;
    Events;
    Sessions;
    Wizard;
    constructor(apiKey, url = API_BASE_URL) {
        this.apiKey = apiKey;
        axios.defaults.headers.common.Authorization = `Basic ${Buffer.from(`api:${this.apiKey}`).toString('base64')}`;
        axios.defaults.headers.common['Content-Type'] = 'application/json';
        axios.defaults.headers.common['X-Client'] = 'xs2a-node';
        axios.defaults.headers.common['X-Client-Version'] = '1.0.3';
        axios.defaults.baseURL = url;
        this.Risk = new RiskService();
        this.Pay = new PayService();
        this.API = new APIService();
        this.Blacklist = new BlacklistService();
        this.Whitelist = new WhitelistService();
        this.Events = new EventsService();
        this.Sessions = new SessionService();
        this.Wizard = new WizardService();
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieHMyYS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9saWIveHMyYS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDMUQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDNUQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDaEUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBRTFELE1BQU0sT0FBTyxJQUFJO0lBVUk7SUFUYixJQUFJLENBQWM7SUFDbEIsR0FBRyxDQUFhO0lBQ2hCLEdBQUcsQ0FBYTtJQUNoQixTQUFTLENBQW1CO0lBQzVCLFNBQVMsQ0FBbUI7SUFDNUIsTUFBTSxDQUFnQjtJQUN0QixRQUFRLENBQWlCO0lBQ3pCLE1BQU0sQ0FBZ0I7SUFFN0IsWUFBb0IsTUFBYyxFQUFFLEdBQUcsR0FBRyxZQUFZO1FBQWxDLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDakMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLGFBQWEsR0FBRyxTQUFTLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQztRQUM5RyxLQUFLLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLEdBQUcsa0JBQWtCLENBQUM7UUFDbkUsS0FBSyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxHQUFHLFdBQVcsQ0FBQztRQUN4RCxLQUFLLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsa0JBQWtCLENBQUMsR0FBRyxPQUFPLENBQUM7UUFDNUQsS0FBSyxDQUFDLFFBQVEsQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDO1FBRTdCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxXQUFXLEVBQUUsQ0FBQztRQUM5QixJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksVUFBVSxFQUFFLENBQUM7UUFDNUIsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLFVBQVUsRUFBRSxDQUFDO1FBQzVCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxnQkFBZ0IsRUFBRSxDQUFDO1FBQ3hDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxnQkFBZ0IsRUFBRSxDQUFDO1FBQ3hDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxhQUFhLEVBQUUsQ0FBQztRQUNsQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksY0FBYyxFQUFFLENBQUM7UUFDckMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLGFBQWEsRUFBRSxDQUFDO0lBQ25DLENBQUM7Q0FDRCJ9
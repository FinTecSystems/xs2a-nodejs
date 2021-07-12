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
	public Risk: RiskService;
	public Pay: PayService;
	public API: APIService;
	public Blacklist: BlacklistService;
	public Whitelist: WhitelistService;
	public Events: EventsService;
	public Sessions: SessionService;
	public Wizard: WizardService;

	constructor(private apiKey: string, url = API_BASE_URL) {
		axios.defaults.headers.common.Authorization = `Basic ${Buffer.from(`api:${this.apiKey}`).toString('base64')}`;
		axios.defaults.headers.common['Content-Type'] = 'application/json';
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

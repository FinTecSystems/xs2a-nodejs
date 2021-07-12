import { APIService } from './services/api-service';
import { BlacklistService } from './services/blacklist-service';
import { EventsService } from './services/events-service';
import { PayService } from './services/pay-service';
import { RiskService } from './services/risk-service';
import { SessionService } from './services/session-service';
import { WhitelistService } from './services/whitelist-service';
import { WizardService } from './services/wizard-service';
export declare class XS2A {
    private apiKey;
    Risk: RiskService;
    Pay: PayService;
    API: APIService;
    Blacklist: BlacklistService;
    Whitelist: WhitelistService;
    Events: EventsService;
    Sessions: SessionService;
    Wizard: WizardService;
    constructor(apiKey: string, url?: string);
}

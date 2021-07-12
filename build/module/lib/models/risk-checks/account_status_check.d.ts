import { CreditCardsObject } from "../credit_card";
import { OtherAccountsObject, UserAccountsObject } from "../user_account";
/**
 * With XS2A.xs2a_account_status_check a list of accounts within the bank connection can be requested. Basically you have to decide if the account status data for the reference account or all accounts within the bank account should be collected. In addition the request can be filtered over a period in days. As result you get data about account or accountholder identification, current account balance, turnovers and the quality of the turnovers.
 * @export
 * @interface Xs2aAccountStatusCheckRequest
 */
export interface Xs2aAccountStatusCheckRequest {
    /**
     * If needed limit the fetched turnovers to create it. Default 365. Valid Range: 10 - 365
     * @type {number}
     * @memberof Xs2aAccountStatusCheckRequest
     */
    limit_turnover_days?: number;
    /**
     * True, if you want to receive all accounts including their turnovers
     * @type {boolean}
     * @memberof Xs2aAccountStatusCheckRequest
     */
    all_accounts?: boolean;
}
/**
 *
 * @export
 * @interface Xs2aAccountStatusCheckResponse
 */
export interface Xs2aAccountStatusCheckResponse {
    /**
     *
     * @type {Array<UserAccountsObject>}
     * @memberof Xs2aAccountStatusCheckResponse
     */
    account_details: UserAccountsObject[];
    /**
     *
     * @type {Array<OtherAccountsObject>}
     * @memberof Xs2aAccountStatusCheckResponse
     */
    other_accounts: OtherAccountsObject[];
    /**
     *
     * @type {Array<CreditCardsObject>}
     * @memberof Xs2aAccountStatusCheckResponse
     */
    credit_cards: CreditCardsObject[];
    /**
     * The limit of turnover days for this check
     * @type {number}
     * @memberof Xs2aAccountStatusCheckResponse
     */
    days: number;
    /**
     * Shows the chosen option, with all accounts or not
     * @type {boolean}
     * @memberof Xs2aAccountStatusCheckResponse
     */
    all_accounts: boolean;
    /**
     * Creation date of the object
     * @type {string}
     * @memberof Xs2aAccountStatusCheckResponse
     */
    created_at: string;
    /**
     * Object type, in this case a xs2a_account_status_check
     * @type {string}
     * @memberof Xs2aAccountStatusCheckResponse
     */
    object: 'xs2a_account_status_check';
}

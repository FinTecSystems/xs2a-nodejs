/**
 * The Account Linked Offers Check validates with the consent of the user, based on an account view, whether third party offers might be of interest to the user and hands over an advertising link for one-time use to a FinTecSystems business partner.
 * @export
 * @interface Xs2aAccountLinkedOffersCheckRequest
 */
export interface Xs2aAccountLinkedOffersCheckRequest {
}
/**
 *
 * @export
 * @interface Xs2aAccountLinkedOffersCheckResponse
 */
export interface Xs2aAccountLinkedOffersCheckResponse {
    /**
     *
     * @type {Array<Xs2aAccountLinkedOffersCheckResponseLinks>}
     * @memberof Xs2aAccountLinkedOffersCheckResponse
     */
    links: Xs2aAccountLinkedOffersCheckResponseLinks[];
}
/**
 *
 * @export
 * @interface Xs2aAccountLinkedOffersCheckResponseLinks
 */
export interface Xs2aAccountLinkedOffersCheckResponseLinks {
    /**
     *
     * @type {string}
     * @memberof Xs2aAccountLinkedOffersCheckResponseLinks
     */
    link: string;
    /**
     *
     * @type {string}
     * @memberof Xs2aAccountLinkedOffersCheckResponseLinks
     */
    description: string;
    /**
     *
     * @type {string}
     * @memberof Xs2aAccountLinkedOffersCheckResponseLinks
     */
    image: string;
}

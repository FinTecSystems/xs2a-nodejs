/**
 *
 * @export
 * @interface WizardApiRequest
 */
export interface WizardApiRequest {
    /**
     * The wizard session key.
     * @type {string}
     * @memberof WizardApiRequest
     */
    key: string;
    /**
     * Valid values are: back (go back one step), switch-login-tabs (switch to another transport), poll (status polling), change-language (change the language) and abort (abort the transaction).
     * @type {string}
     * @memberof WizardApiRequest
     */
    action?: WizardActions;
    /**
     * Arbitrary form values
     */
    [key: string]: any;
}
export declare enum WizardActions {
    BACK = "back",
    SWITCHLOGINTABS = "switch-login-tabs",
    POLL = "poll",
    CHANGELANGUAGE = "change-language",
    ABORT = "abort"
}
/**
 *
 * @export
 * @interface WizardFinalResponse
 */
export interface WizardFinalResponse {
    /**
     * The http status code
     * @type {number}
     * @memberof WizardFinalResponse
     */
    code: number;
    /**
     * Will be set if an error occurs during the processing of the current step (e.g. the session has expired). If the recoverable flag equals false a new session has to be started.
     * @type {Array<string>}
     * @memberof WizardFinalResponse
     */
    error: string[];
    /**
     *
     * @type {WizardFinalResponseForm}
     * @memberof WizardFinalResponse
     */
    form: WizardFinalResponseForm;
    /**
     * The error message
     * @type {string}
     * @memberof WizardFinalResponse
     */
    message: string;
    /**
     *
     * @type {any}
     * @memberof WizardFinalResponse
     */
    polling: any;
    additional_data: any;
}
/**
 *
 * @export
 * @interface WizardFinalResponseForm
 */
export interface WizardFinalResponseForm {
    /**
     *
     * @type {Array<string>}
     * @memberof WizardFinalResponseForm
     */
    elements: string[];
    /**
     *
     * @type {string}
     * @memberof WizardFinalResponseForm
     */
    name: string;
    /**
     *
     * @type {Array<string>}
     * @memberof WizardFinalResponseForm
     */
    parameters: string[];
}
/**
 *
 * @export
 * @interface WizardResponse
 */
export interface WizardResponse {
    /**
     * The http status code
     * @type {number}
     * @memberof WizardResponse
     */
    code: number;
    /**
     * The error message
     * @type {string}
     * @memberof WizardResponse
     */
    message?: string;
    /**
     * Will be set if an error occurs during the processing of the current step (e.g. the session has expired). If the recoverable flag equals false a new session has to be started.
     * @type {Array<string>}
     * @memberof WizardResponse
     */
    error?: any;
    /**
     *
     * @type {Polling}
     * @memberof WizardResponse
     */
    polling?: Polling;
    /**
     *
     * @type {FormObject}
     * @memberof WizardResponse
     */
    form?: FormObject;
}
/**
 *
 * @export
 * @interface WizardSessionObject
 */
export interface WizardSessionObject {
    /**
     * Internal identifier.
     * @type {string}
     * @memberof WizardSessionObject
     */
    id: string;
    /**
     * Public transaction identifier.
     * @type {string}
     * @memberof WizardSessionObject
     */
    transaction: string;
    /**
     * Key to start the wizard
     * @type {string}
     * @memberof WizardSessionObject
     */
    wizard_session_key: string;
    /**
     * Name of the used product.
     * @type {string}
     * @memberof WizardSessionObject
     */
    product?: Product;
    /**
     * An array which contains the current wizard configuration.
     * @type {any}
     * @memberof WizardSessionObject
     */
    parameters: any;
    /**
     * The last occurred error. This is overwritten, if another error occurs.
     * @type {string}
     * @memberof WizardSessionObject
     */
    last_error: string;
    /**
     * true if this session runs in testmode. false otherwise.
     * @type {boolean}
     * @memberof WizardSessionObject
     */
    testmode: boolean;
    /**
     * true if this session was finished successfully. false if not or still running.
     * @type {boolean}
     * @memberof WizardSessionObject
     */
    finished: boolean;
    /**
     * The current wizard step of this session.
     * @type {string}
     * @memberof WizardSessionObject
     */
    current_step: string;
    /**
     * Type of creation
     * @type {string}
     * @memberof WizardSessionObject
     */
    created_at: string;
    /**
     * String with content 'wizard_session'
     * @type {string}
     * @memberof WizardSessionObject
     */
    object: 'wizard_session';
}
export declare enum Product {
    RISK = "xs2a_risk",
    PAY = "xs2a_pay"
}
/**
 * The polling attribute indicates whether the transaction status needs to be polled. This is usually the case when your customer has to approve a payment via the bankâ€™s mobile app.  If polling is an empty object no action is required. If interval is set you need to POST a request every interval milliseconds to the wizard API endpoint providing the wizard session key as well as the parameter action=poll until you receive the finish response.
 * @export
 * @interface Polling
 */
export interface Polling {
    /**
     * The inverval in milliseconds
     * @type {number}
     * @memberof Polling
     */
    interval: number;
}
/**
 *
 * @export
 * @interface FormCaptcha
 */
export interface FormCaptcha {
    /**
     * The type of the form element (here: captcha)
     * @type {string}
     * @memberof FormCaptcha
     */
    type: string;
    /**
     * The name of the form element
     * @type {string}
     * @memberof FormCaptcha
     */
    name: string;
    /**
     * The base64 encoded image
     * @type {string}
     * @memberof FormCaptcha
     */
    data: string;
    /**
     * The set value of the form element
     * @type {string}
     * @memberof FormCaptcha
     */
    value: string;
    /**
     * List of validation rules, concatenated with a pipe character
     * @type {string}
     * @memberof FormCaptcha
     */
    validation: string;
    /**
     * Indicates whether the validation of the element failed
     * @type {boolean}
     * @memberof FormCaptcha
     */
    invalid: boolean;
    /**
     * A list of failed validation rules. String if empty and Array of Strings if populated
     * @type {any}
     * @memberof FormCaptcha
     */
    failed_validation_rules: any;
    /**
     * The validation error (human readable)
     * @type {string}
     * @memberof FormCaptcha
     */
    validation_error: string;
}
/**
 *
 * @export
 * @interface FormCheckbox
 */
export interface FormCheckbox {
    /**
     * The type of the form element (here: checkbox)
     * @type {string}
     * @memberof FormCheckbox
     */
    type: string;
    /**
     * The name of the form element
     * @type {string}
     * @memberof FormCheckbox
     */
    name: string;
    /**
     * Indicates whether the checkbox is checked
     * @type {boolean}
     * @memberof FormCheckbox
     */
    checked: boolean;
    /**
     * The label of the form element
     * @type {string}
     * @memberof FormCheckbox
     */
    label: string;
    /**
     * List of validation rules, concatenated with a pipe character
     * @type {string}
     * @memberof FormCheckbox
     */
    validation: string;
    /**
     * Indicates whether the validation of the element failed
     * @type {boolean}
     * @memberof FormCheckbox
     */
    invalid: boolean;
    /**
     * A list of failed validation rules. String if empty and Array of Strings if populated
     * @type {any}
     * @memberof FormCheckbox
     */
    failed_validation_rules: any;
    /**
     * The validation error (human readable)
     * @type {string}
     * @memberof FormCheckbox
     */
    validation_error: string;
}
/**
 *
 * @export
 * @interface FormFlicker
 */
export interface FormFlicker {
    /**
     * The type of the form element (here: flicker)
     * @type {string}
     * @memberof FormFlicker
     */
    type: string;
    /**
     * The name of the form element
     * @type {string}
     * @memberof FormFlicker
     */
    name: string;
    /**
     * The set value of the form element
     * @type {string}
     * @memberof FormFlicker
     */
    value: string;
    /**
     * The actual flicker image as an array representation (0 = black bar, 1 = white bar)
     * @type {Array<Array<string>>}
     * @memberof FormFlicker
     */
    code: string[][];
    /**
     * The label of the form element
     * @type {string}
     * @memberof FormFlicker
     */
    label: string;
    /**
     * List of validation rules, concatenated with a pipe character
     * @type {string}
     * @memberof FormFlicker
     */
    validation: string;
    /**
     * Indicates whether the validation of the element failed
     * @type {boolean}
     * @memberof FormFlicker
     */
    invalid: boolean;
    /**
     * A list of failed validation rules. String if empty and Array of Strings if populated
     * @type {any}
     * @memberof FormFlicker
     */
    failed_validation_rules: any;
    /**
     * The validation error (human readable)
     * @type {string}
     * @memberof FormFlicker
     */
    validation_error: string;
}
/**
 *
 * @export
 * @interface FormHelpText
 */
export interface FormHelpText {
    /**
     * The type of the form element (here: help_text)
     * @type {string}
     * @memberof FormHelpText
     */
    type: string;
    /**
     * The title of the form element
     * @type {string}
     * @memberof FormHelpText
     */
    title: string;
    /**
     * The text of the form element
     * @type {string}
     * @memberof FormHelpText
     */
    text: string;
}
/**
 *
 * @export
 * @interface FormImage
 */
export interface FormImage {
    /**
     * The type of the form element (here: image)
     * @type {string}
     * @memberof FormImage
     */
    type: string;
    /**
     * The base64 encoded image
     * @type {string}
     * @memberof FormImage
     */
    data: string;
    /**
     * The label of the form element
     * @type {string}
     * @memberof FormImage
     */
    label: string;
}
/**
 *
 * @export
 * @interface FormMulti
 */
export interface FormMulti {
    /**
     * The type of the form element (here: image)
     * @type {string}
     * @memberof FormMulti
     */
    type: string;
    /**
     * The name of the form element
     * @type {string}
     * @memberof FormMulti
     */
    name: string;
    /**
     * Name of the selected element (value of one of the nested elements)
     * @type {string}
     * @memberof FormMulti
     */
    selected: string;
    /**
     * Array containing the nested elements
     * @type {Array<FormMultiElements>}
     * @memberof FormMulti
     */
    elements: FormMultiElements[];
}
/**
 *
 * @export
 * @interface FormMultiElements
 */
export interface FormMultiElements {
    /**
     * The label of the element
     * @type {string}
     * @memberof FormMultiElements
     */
    label: string;
    /**
     * The value of the form element
     * @type {string}
     * @memberof FormMultiElements
     */
    value: string;
    /**
     * Array containing the nested elements
     * @type {Array<FormCaptcha | FormCheckbox | FormFlicker | FormHelpText | FormImage | FormPassword | FormRadio | FormSelect | FormTabs | FormText>}
     * @memberof FormMultiElements
     */
    elements: (FormCaptcha | FormCheckbox | FormFlicker | FormHelpText | FormImage | FormPassword | FormRadio | FormSelect | FormTabs | FormText)[];
}
/**
 * Contains the form objects
 * @export
 * @interface FormObject
 */
export interface FormObject {
    /**
     * ???
     * @type {string}
     * @memberof FormObject
     */
    name: string;
    /**
     * Contains the elements of the form. Can contain any of 'Form.Element'
     * @type {Array<FormCaptcha | FormCheckbox | FormFlicker | FormHelpText | FormImage | FormMulti | FormMultiElements | FormPassword | FormRadio | FormSelect | FormTabs | FormText>}
     * @memberof FormObject
     */
    elements: (FormCaptcha | FormCheckbox | FormFlicker | FormHelpText | FormImage | FormMulti | FormMultiElements | FormPassword | FormRadio | FormSelect | FormTabs | FormText)[];
}
/**
 *
 * @export
 * @interface FormPassword
 */
export interface FormPassword {
    /**
     * The type of the form element (here: password)
     * @type {string}
     * @memberof FormPassword
     */
    type: string;
    /**
     * The name of the form element
     * @type {string}
     * @memberof FormPassword
     */
    name: string;
    /**
     * The set value of the form element
     * @type {string}
     * @memberof FormPassword
     */
    value: string;
    /**
     * The label of the form element
     * @type {string}
     * @memberof FormPassword
     */
    label: string;
    /**
     * List of validation rules, concatenated with a pipe character
     * @type {string}
     * @memberof FormPassword
     */
    validation: string;
    /**
     * Indicates whether the validation of the element failed
     * @type {boolean}
     * @memberof FormPassword
     */
    invalid: boolean;
    /**
     * A list of failed validation rules. String if empty and Array of Strings if populated
     * @type {any}
     * @memberof FormPassword
     */
    failed_validation_rules: any;
    /**
     * The validation error (human readable)
     * @type {string}
     * @memberof FormPassword
     */
    validation_error: string;
}
/**
 *
 * @export
 * @interface FormRadio
 */
export interface FormRadio {
    /**
     * The type of the form element (here: radio)
     * @type {string}
     * @memberof FormRadio
     */
    type: string;
    /**
     * The name of the form element
     * @type {string}
     * @memberof FormRadio
     */
    name: string;
    /**
     * Index of the checked element
     * @type {number}
     * @memberof FormRadio
     */
    checked: number;
    /**
     * An array of possible options
     * @type {Array<FormRadioOption>}
     * @memberof FormRadio
     */
    options: FormRadioOption[];
    /**
     * The label of the form element
     * @type {string}
     * @memberof FormRadio
     */
    label: string;
    /**
     * List of validation rules, concatenated with a pipe character
     * @type {string}
     * @memberof FormRadio
     */
    validation: string;
    /**
     * Indicates whether the validation of the element failed
     * @type {boolean}
     * @memberof FormRadio
     */
    invalid: boolean;
    /**
     * A list of failed validation rules. String if empty and Array of Strings if populated
     * @type {any}
     * @memberof FormRadio
     */
    failed_validation_rules: any;
    /**
     * The validation error (human readable)
     * @type {string}
     * @memberof FormRadio
     */
    validation_error: string;
}
export interface FormRadioOption {
    label: string;
    disabled: boolean;
}
/**
 *
 * @export
 * @interface FormSelect
 */
export interface FormSelect {
    /**
     * The type of the form element (here: select)
     * @type {string}
     * @memberof FormSelect
     */
    type: string;
    /**
     * The name of the form element
     * @type {string}
     * @memberof FormSelect
     */
    name: string;
    /**
     * Index of the checked element
     * @type {number}
     * @memberof FormSelect
     */
    selected: number;
    /**
     * Object with key as key and value as label
     * @type {Map<string, string>}
     * @memberof FormSelect
     */
    options: Map<string, string>;
    /**
     * The label of the form element
     * @type {string}
     * @memberof FormSelect
     */
    label: string;
    /**
     * List of validation rules, concatenated with a pipe character
     * @type {string}
     * @memberof FormSelect
     */
    validation: string;
    /**
     * Indicates whether the validation of the element failed
     * @type {boolean}
     * @memberof FormSelect
     */
    invalid: boolean;
    /**
     * A list of failed validation rules. String if empty and Array of Strings if populated
     * @type {any}
     * @memberof FormSelect
     */
    failed_validation_rules: any;
    /**
     * The validation error (human readable)
     * @type {string}
     * @memberof FormSelect
     */
    validation_error: string;
}
/**
 *
 * @export
 * @interface FormTabs
 */
export interface FormTabs {
    /**
     * The type of the form element (here: tabs)
     * @type {string}
     * @memberof FormTabs
     */
    type: string;
    /**
     * The name of the form element
     * @type {string}
     * @memberof FormTabs
     */
    name: string;
    /**
     * An array of possible transports
     * @type {Array<string>}
     * @memberof FormTabs
     */
    tabs: string[];
    /**
     * The label of the form element
     * @type {string}
     * @memberof FormTabs
     */
    label: string;
    /**
     * The selected transport
     * @type {string}
     * @memberof FormTabs
     */
    selected: string;
}
/**
 *
 * @export
 * @interface FormText
 */
export interface FormText {
    /**
     * The type of the form element (here: text)
     * @type {string}
     * @memberof FormText
     */
    type: string;
    /**
     * The name of the form element
     * @type {string}
     * @memberof FormText
     */
    name: string;
    /**
     * The set value of the form element
     * @type {string}
     * @memberof FormText
     */
    value: string;
    /**
     * The label of the form element
     * @type {string}
     * @memberof FormText
     */
    label: string;
    /**
     * List of validation rules, concatenated with a pipe character
     * @type {string}
     * @memberof FormText
     */
    validation: string;
    /**
     * Indicates whether the validation of the element failed
     * @type {boolean}
     * @memberof FormText
     */
    invalid: boolean;
    /**
     * A list of failed validation rules. String if empty and Array of Strings if populated
     * @type {any}
     * @memberof FormText
     */
    failed_validation_rules: any;
    /**
     * The validation error (human readable)
     * @type {string}
     * @memberof FormText
     */
    validation_error: string;
}

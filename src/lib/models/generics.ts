export interface DeletionResponse {
	code: number;
	message: string;
}

export enum ReportLocale {
	DE = "de",
	EN = "en",
}

export enum ReportFormat {
	HTML = "html",
	PDF = "pdf",
	JSON = "json",
}
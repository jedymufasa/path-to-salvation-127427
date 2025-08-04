const API_BASE_URL = 'http://localhost:3001';

export interface TractSection {
	id: number;
	title: string;
	content: string;
	image_url: string | null;
}

export interface SalvationStep {
	id: number;
	title: string;
	summary: string;
	details: string;
	scripture: string;
}

export interface ShareInfo {
	title: string;
	text: string;
	url: string;
}

export interface ContactRequest {
	name: string;
	email: string;
	message?: string;
}

// PUBLIC_INTERFACE
/**
 * Fetches the digital tract content from the backend.
 * @returns A promise that resolves to an array of tract sections.
 */
export async function getTract(): Promise<TractSection[]> {
	const response = await fetch(`${API_BASE_URL}/tract`);
	if (!response.ok) {
		throw new Error('Failed to fetch tract content');
	}
	return await response.json();
}

// PUBLIC_INTERFACE
/**
 * Fetches the steps to salvation from the backend.
 * @returns A promise that resolves to an array of salvation steps.
 */
export async function getSalvationSteps(): Promise<SalvationStep[]> {
	const response = await fetch(`${API_BASE_URL}/salvation-steps`);
	if (!response.ok) {
		throw new Error('Failed to fetch salvation steps');
	}
	return await response.json();
}

// PUBLIC_INTERFACE
/**
 * Fetches social media sharing information from the backend.
 * @returns A promise that resolves to the sharing information.
 */
export async function getShareInfo(): Promise<ShareInfo> {
	const response = await fetch(`${API_BASE_URL}/share-info`);
	if (!response.ok) {
		throw new Error('Failed to fetch share info');
	}
	return await response.json();
}

// PUBLIC_INTERFACE
/**
 * Submits a contact request to the backend.
 * @param contact The contact request data.
 * @returns A promise that resolves to the submitted contact data.
 */
export async function submitContactRequest(contact: ContactRequest): Promise<ContactRequest> {
	const response = await fetch(`${API_BASE_URL}/contact`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(contact)
	});
	if (!response.ok) {
        const errorData = await response.json();
		throw new Error(errorData.detail || 'Failed to submit contact request');
	}
	return await response.json();
}

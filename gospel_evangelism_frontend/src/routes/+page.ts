import { getTract, getSalvationSteps } from '$lib/api';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	try {
		// Fetch data in parallel
		const [tractSections, salvationSteps] = await Promise.all([
			getTract(),
			getSalvationSteps()
		]);

		return {
			tractSections,
			salvationSteps
		};
	} catch (error) {
		console.error('Failed to load page data:', error);
		// Return empty arrays on failure so the page can still render
		return {
			tractSections: [],
			salvationSteps: []
		};
	}
}

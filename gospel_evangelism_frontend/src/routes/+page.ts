import { getTract, getSalvationSteps } from '$lib/api';
import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
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
};

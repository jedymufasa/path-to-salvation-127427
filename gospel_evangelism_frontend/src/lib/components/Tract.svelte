<script lang="ts">
	import type { TractSection } from '$lib/api';

	let { tractSections } = $props<{ tractSections: TractSection[] }>();
</script>

<section id="tract">
	<h2>The Path to Salvation</h2>
	{#if tractSections.length > 0}
		{#each tractSections as section (section.id)}
			<article class="tract-section">
				<h3>{section.title}</h3>
				{#if section.image_url}
					<img src={section.image_url} alt={section.title} class="tract-image" />
				{/if}
				<!-- eslint-disable-next-line svelte/no-at-html-tags -->
				<p>{@html section.content}</p>
			</article>
		{/each}
	{:else}
		<p>Loading tract...</p>
	{/if}
</section>

<style>
	.tract-section {
		margin-bottom: 2rem;
		padding: 1.5rem;
		background-color: #ffffff;
		border-radius: var(--border-radius);
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
	}
	.tract-image {
		max-width: 100%;
		height: auto;
		border-radius: var(--border-radius);
		margin-bottom: 1rem;
	}
	p {
		font-size: 1.1rem;
	}
</style>

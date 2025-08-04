<script lang="ts">
	import type { TractSection } from '$lib/api';

	let { tractSections } = $props<{ tractSections: TractSection[] }>();
</script>

<section id="tract">
	<h2>The Message of Hope</h2>
	<div class="tract-container">
		{#if tractSections.length > 0}
			{#each tractSections as section (section.id)}
				<article class="tract-section">
					<h3>{section.title}</h3>
					{#if section.image_url}
						<div class="image-container">
							<img src={section.image_url} alt={section.title} class="tract-image" />
						</div>
					{/if}
					<div class="content">
						<!-- eslint-disable-next-line svelte/no-at-html-tags -->
						{@html section.content}
					</div>
				</article>
			{/each}
		{:else}
			<p class="loading-message">Loading the message...</p>
		{/if}
	</div>
</section>

<style>
	.tract-container {
		display: grid;
		gap: 2.5rem;
	}
	.tract-section {
		background-color: var(--color-bg-offset);
		border-radius: var(--border-radius);
		border: 1px solid var(--color-border);
		padding: 2rem;
		transition: box-shadow var(--transition-speed) ease;
	}

	.tract-section:hover {
		box-shadow: var(--shadow-md);
	}

	.tract-section h3 {
		margin-top: 0;
		color: var(--color-primary);
	}

	.image-container {
		width: 100%;
		margin-bottom: 1.5rem;
		overflow: hidden;
		border-radius: var(--border-radius);
	}

	.tract-image {
		max-width: 100%;
		height: auto;
		display: block;
	}

	.content :global(p) {
		font-size: 1.1rem;
		line-height: 1.7;
		color: var(--color-text-secondary);
	}

	.content :global(strong) {
		color: var(--color-text);
		font-weight: 600;
	}

	.loading-message {
		text-align: center;
		padding: 2rem;
		color: var(--color-text-secondary);
	}
</style>

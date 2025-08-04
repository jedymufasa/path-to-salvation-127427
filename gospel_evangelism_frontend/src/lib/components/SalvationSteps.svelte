<script lang="ts">
	import type { SalvationStep } from '$lib/api';
	import { slide } from 'svelte/transition';

	let { salvationSteps } = $props<{ salvationSteps: SalvationStep[] }>();
	let activeStep = $state<number | null>(null);

	function toggleStep(stepId: number) {
		activeStep = activeStep === stepId ? null : stepId;
	}
</script>

<section id="salvation-steps">
	<h2>The Way of Salvation</h2>
	<div class="steps-container">
		{#if salvationSteps.length > 0}
			{#each salvationSteps as step, i (step.id)}
				<div class="step">
					<button class="step-header" onclick={() => toggleStep(step.id)} aria-expanded={activeStep === step.id}>
						<span class="step-number">0{i + 1}</span>
						<span class="step-title">{step.title}</span>
						<span class="icon" class:rotated={activeStep === step.id}>
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg>
						</span>
					</button>
					{#if activeStep === step.id}
						<div class="step-content" transition:slide={{ duration: 300 }}>
							<h4>{step.summary}</h4>
							<div class="details">
								<!-- eslint-disable-next-line svelte/no-at-html-tags -->
								{@html step.details}
							</div>
							<div class="scripture">
								<!-- eslint-disable-next-line svelte/no-at-html-tags -->
								{@html step.scripture}
							</div>
						</div>
					{/if}
				</div>
			{/each}
		{:else}
			<p class="loading-message">Loading salvation steps...</p>
		{/if}
	</div>
</section>

<style>
	.steps-container {
		border: 1px solid var(--color-border);
		border-radius: var(--border-radius);
		overflow: hidden;
	}

	.step:not(:last-child) {
		border-bottom: 1px solid var(--color-border);
	}

	.step-header {
		width: 100%;
		background: var(--color-bg);
		color: var(--color-text);
		text-align: left;
		padding: 1.5rem;
		font-size: 1.2rem;
		display: flex;
		align-items: center;
		cursor: pointer;
		transition: background-color var(--transition-speed) ease;
		border: none;
		font-weight: 600;
	}

	.step-header:hover {
		background-color: var(--color-bg-offset);
	}
	
	.step-number {
		color: var(--color-primary);
		font-weight: 700;
		font-size: 1.1rem;
		margin-right: 1.5rem;
	}

	.step-title {
		flex-grow: 1;
	}

	.icon {
		transition: transform var(--transition-speed) ease;
		color: var(--color-text-secondary);
	}
	
	.icon.rotated {
		transform: rotate(180deg);
	}

	.step-content {
		padding: 0 1.5rem 2rem 4rem; /* Aligns with title text */
		background-color: var(--color-bg);
		border-top: 1px solid var(--color-border);
	}
	
	.step-content h4 {
		margin-top: 1.5rem;
		font-size: 1.2rem;
		color: var(--color-text);
	}

	.details :global(p) {
		font-size: 1.05rem;
		color: var(--color-text-secondary);
	}
	
	.scripture {
		margin-top: 2rem;
		padding: 1.25rem;
		background-color: var(--color-bg-offset);
		border-left: 4px solid var(--color-primary);
		border-radius: 4px;
		font-style: italic;
	}
	
	.scripture :global(p) {
		margin: 0;
		color: var(--color-text);
	}

	.loading-message {
		text-align: center;
		padding: 2rem;
		color: var(--color-text-secondary);
	}
</style>

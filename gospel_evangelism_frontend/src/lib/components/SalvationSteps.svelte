<script lang="ts">
	import type { SalvationStep } from '$lib/api';

	let { salvationSteps } = $props<{ salvationSteps: SalvationStep[] }>();
	let activeStep = $state(0);

	function toggleStep(stepId: number) {
		activeStep = activeStep === stepId ? -1 : stepId;
	}
</script>

<section id="salvation-steps">
	<h2>The Way of Salvation</h2>
	<div class="steps-container">
		{#if salvationSteps.length > 0}
			{#each salvationSteps as step (step.id)}
				<div class="step">
					<button class="step-header" onclick={() => toggleStep(step.id)}>
						<span>{step.title}</span>
						<span class="icon">{activeStep === step.id ? '−' : '+'}</span>
					</button>
					{#if activeStep === step.id}
						<div class="step-content">
							<h4>{step.summary}</h4>
							<!-- eslint-disable-next-line svelte/no-at-html-tags -->
							<p>{@html step.details}</p>
							<!-- eslint-disable-next-line svelte/no-at-html-tags -->
							<p class="scripture"><em>{@html step.scripture}</em></p>
						</div>
					{/if}
				</div>
			{/each}
		{:else}
			<p>Loading salvation steps...</p>
		{/if}
	</div>
</section>

<style>
	.steps-container {
		border: 1px solid var(--color-light-gray);
		border-radius: var(--border-radius);
		overflow: hidden;
	}
	.step {
		border-bottom: 1px solid var(--color-light-gray);
	}
	.step:last-child {
		border-bottom: none;
	}
	.step-header {
		width: 100%;
		background: var(--color-primary);
        color: white;
		text-align: left;
		padding: 1rem 1.5rem;
		font-size: 1.2rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.step-header:hover {
        opacity: 1;
		background-color: #004d00;
	}
	.icon {
		font-size: 1.5rem;
		font-weight: bold;
	}
	.step-content {
		padding: 1.5rem;
		background-color: #ffffff;
	}
	.scripture {
		margin-top: 1.5rem;
		padding: 1rem;
		background-color: var(--color-light-gray);
		border-left: 4px solid var(--color-secondary);
		border-radius: 4px;
	}
</style>

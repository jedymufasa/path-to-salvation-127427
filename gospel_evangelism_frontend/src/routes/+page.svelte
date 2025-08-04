<script lang="ts">
	import ContactForm from '$lib/components/ContactForm.svelte';
	import SalvationSteps from '$lib/components/SalvationSteps.svelte';
	import ShareButtons from '$lib/components/ShareButtons.svelte';
	import Tract from '$lib/components/Tract.svelte';

	let { data } = $props();

	function handleCtaClick(event: MouseEvent) {
		const tractElement = document.getElementById('tract');
		if (tractElement) {
			event.preventDefault();
			tractElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
		}
	}
</script>

<svelte:head>
	<title>Path to Salvation - A Guide to Eternal Life</title>
	<meta
		name="description"
		content="A digital gospel tract explaining the path to salvation through Jesus Christ. Learn about God's love, man's problem, God's remedy, and man's response."
	/>
</svelte:head>

<div class="hero">
	<div class="hero-content">
		<h1>Find Hope and a New Beginning</h1>
		<p class="subtitle">Discover the most important message you will ever hear.</p>
		<a href="#tract" class="cta-button" onclick={handleCtaClick}>Begin the Journey</a>
	</div>
</div>

<Tract tractSections={data.tractSections} />
<SalvationSteps salvationSteps={data.salvationSteps} />
<ContactForm />
<ShareButtons />

<style>
	.hero {
		text-align: center;
		padding: 6rem 1.5rem;
		background-color: var(--color-bg-offset);
		display: flex;
		align-items: center;
		justify-content: center;
		margin: -2rem -1.5rem 4rem -1.5rem; /* Extend to screen edges */
		border-bottom: 1px solid var(--color-border);
	}

	.hero-content {
		max-width: 50rem;
	}

	.hero h1 {
		font-size: 3.5rem;
		font-weight: 700;
		color: var(--color-text);
		margin-bottom: 1.5rem;
	}

	.subtitle {
		font-size: 1.35rem;
		margin-bottom: 2.5rem;
		color: var(--color-text-secondary);
		max-width: 40rem;
		margin-left: auto;
		margin-right: auto;
	}

	.cta-button {
		display: inline-block;
		background-color: var(--color-primary);
		color: white;
		padding: 1rem 2.5rem;
		text-decoration: none;
		border-radius: var(--border-radius);
		font-weight: 600;
		font-size: 1.1rem;
		transition:
			transform var(--transition-speed) ease-in-out,
			box-shadow var(--transition-speed) ease-in-out;
	}

	.cta-button:hover {
		transform: translateY(-3px);
		box-shadow: var(--shadow-lg);
		text-decoration: none;
		color: white;
	}

	@media (max-width: 768px) {
		.hero {
			padding: 4rem 1rem;
			margin: -1.5rem -1rem 3rem -1rem;
		}
		.hero h1 {
			font-size: 2.75rem;
		}
		.subtitle {
			font-size: 1.2rem;
		}
	}
</style>

<script lang="ts">
	import Tract from '$lib/components/Tract.svelte';
	import SalvationSteps from '$lib/components/SalvationSteps.svelte';
	import ContactForm from '$lib/components/ContactForm.svelte';
	import ShareButtons from '$lib/components/ShareButtons.svelte';

	let { data } = $props();
</script>

<svelte:head>
	<title>Path to Salvation - A Guide to Eternal Life</title>
	<meta
		name="description"
		content="A digital gospel tract explaining the path to salvation through Jesus Christ. Learn about God's love, man's problem, God's remedy, and man's response."
	/>
</svelte:head>

<div class="hero">
	<h1>Find Hope and a New Beginning</h1>
	<p class="subtitle">Discover the most important message you will ever hear.</p>
	<a href="#tract" class="cta-button">Begin the Journey</a>
</div>

<Tract tractSections={data.tractSections} />
<SalvationSteps salvationSteps={data.salvationSteps} />
<ContactForm />
<ShareButtons />

<style>
	.hero {
		text-align: center;
		padding: 4rem 1rem;
		background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
			url(https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop)
				center/cover no-repeat;
		color: white;
		border-radius: var(--border-radius);
		margin-bottom: 3rem;
	}
	.hero h1 {
		color: white;
		font-size: 3rem;
	}
	.subtitle {
		font-size: 1.5rem;
		margin-bottom: 2rem;
		color: var(--color-secondary);
	}
	.cta-button {
		display: inline-block;
		background-color: var(--color-secondary);
		color: var(--color-primary);
		padding: 1rem 2rem;
		text-decoration: none;
		border-radius: var(--border-radius);
		font-weight: bold;
		transition:
			transform 0.2s,
			box-shadow 0.2s;
	}
	.cta-button:hover {
		transform: translateY(-3px);
		box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
	}

	@media (max-width: 768px) {
		.hero h1 {
			font-size: 2.5rem;
		}
		.subtitle {
			font-size: 1.2rem;
		}
	}
</style>

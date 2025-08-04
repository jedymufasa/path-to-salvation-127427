<script lang="ts">
	import { onMount } from 'svelte';
	import { getShareInfo, type ShareInfo } from '$lib/api';

	// SVG Icons for social platforms
	const icons = {
		facebook: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>`,
		twitter: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M22 4s-.7 2.1-2 3.4c1.6 1.4 3.3 4.4 3.3 4.4s-1.4 1.4-3.3 1.4c.1 1.4.1 4.4-4.4 6.3-4.5 1.9-9.5-1.4-12.3-4.4s-3.3-6.3-2-9.5c1.3-3.2 4.4-4.4 4.4-4.4s-1.4.1-2.3.7c.3-1.3 1.3-3.3 4.4-3.3s4.4 2.1 4.4 2.1-.7-2.1-2.3-2.1c1.6-.7 3.3-.7 3.3-.7z"></path></svg>`,
		linkedin: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path></svg>`,
		whatsapp: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.447-4.433-9.886-9.888-9.886-5.448 0-9.886 4.434-9.889 9.885-.002 2.02.634 3.963 1.792 5.661l-1.267 4.625 4.75-1.249z"></path></svg>`
	};

	let shareInfo: ShareInfo | null = null;

	onMount(async () => {
		try {
			shareInfo = await getShareInfo();
		} catch (e) {
			console.error('Failed to load share info:', e);
		}
	});

	function getShareUrl(platform: 'facebook' | 'twitter' | 'linkedin' | 'whatsapp') {
		if (!shareInfo) return '';
		const url = encodeURIComponent(shareInfo.url);
		const text = encodeURIComponent(shareInfo.text);
		const title = encodeURIComponent(shareInfo.title);

		switch (platform) {
			case 'facebook':
				return `https://www.facebook.com/sharer/sharer.php?u=${url}`;
			case 'twitter':
				return `https://twitter.com/intent/tweet?url=${url}&text=${text}`;
			case 'linkedin':
				return `https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${title}&summary=${text}`;
			case 'whatsapp':
				return `https://api.whatsapp.com/send?text=${text}%20${url}`;
		}
	}
</script>

{#if shareInfo}
	<section id="share" class="share-section">
		<h2>Share the Good News</h2>
		<p>Help spread this message of hope by sharing it with others.</p>
		<div class="share-buttons">
			<a
				href={getShareUrl('facebook')}
				target="_blank"
				rel="noopener noreferrer"
				class="share-button facebook"
				aria-label="Share on Facebook"
			>
				<!-- eslint-disable-next-line svelte/no-at-html-tags -->
				{@html icons.facebook}
				<span>Facebook</span>
			</a>
			<a
				href={getShareUrl('twitter')}
				target="_blank"
				rel="noopener noreferrer"
				class="share-button twitter"
				aria-label="Share on Twitter"
			>
				<!-- eslint-disable-next-line svelte/no-at-html-tags -->
				{@html icons.twitter}
				<span>Twitter</span>
			</a>
			<a
				href={getShareUrl('linkedin')}
				target="_blank"
				rel="noopener noreferrer"
				class="share-button linkedin"
				aria-label="Share on LinkedIn"
			>
				<!-- eslint-disable-next-line svelte/no-at-html-tags -->
				{@html icons.linkedin}
				<span>LinkedIn</span>
			</a>
			<a
				href={getShareUrl('whatsapp')}
				target="_blank"
				rel="noopener noreferrer"
				class="share-button whatsapp"
				aria-label="Share on WhatsApp"
			>
				<!-- eslint-disable-next-line svelte/no-at-html-tags -->
				{@html icons.whatsapp}
				<span>WhatsApp</span>
			</a>
		</div>
	</section>
{/if}

<style>
	.share-section {
		text-align: center;
		background-color: var(--color-bg-offset);
		padding: 3rem 1.5rem;
		border-radius: var(--border-radius);
		border: 1px solid var(--color-border);
	}

	.share-section h2 {
		margin-top: 0;
	}

	.share-section p {
		max-width: 40rem;
		margin: -1rem auto 2.5rem auto;
	}

	.share-buttons {
		display: flex;
		justify-content: center;
		gap: 1rem;
		flex-wrap: wrap;
	}
	.share-button {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		padding: 0.75rem 1.5rem;
		color: white !important;
		text-decoration: none;
		border-radius: var(--border-radius);
		font-weight: 500;
		font-size: 1rem;
		transition: transform 0.2s, box-shadow 0.2s;
	}
	.share-button:hover {
		transform: translateY(-2px);
		box-shadow: var(--shadow-md);
		text-decoration: none;
	}

	.share-button :global(svg) {
		width: 1.25em;
		height: 1.25em;
	}
	
	.facebook { background-color: #1877f2; }
	.twitter { background-color: #1da1f2; }
	.linkedin { background-color: #0077b5; }
	.whatsapp { background-color: #25d366; }
</style>

<script lang="ts">
	import { onMount } from 'svelte';
	import { getShareInfo, type ShareInfo } from '$lib/api';

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
		<div class="share-buttons">
			<a
				href={getShareUrl('facebook')}
				target="_blank"
				rel="noopener noreferrer"
				class="share-button facebook"
				aria-label="Share on Facebook"
			>
				Facebook
			</a>
			<a
				href={getShareUrl('twitter')}
				target="_blank"
				rel="noopener noreferrer"
				class="share-button twitter"
				aria-label="Share on Twitter"
			>
				Twitter
			</a>
			<a
				href={getShareUrl('linkedin')}
				target="_blank"
				rel="noopener noreferrer"
				class="share-button linkedin"
				aria-label="Share on LinkedIn"
			>
				LinkedIn
			</a>
			<a
				href={getShareUrl('whatsapp')}
				target="_blank"
				rel="noopener noreferrer"
				class="share-button whatsapp"
				aria-label="Share on WhatsApp"
			>
				WhatsApp
			</a>
		</div>
	</section>
{/if}

<style>
	.share-section {
		text-align: center;
	}
	.share-buttons {
		display: flex;
		justify-content: center;
		gap: 1rem;
		flex-wrap: wrap;
	}
	.share-button {
		padding: 0.8rem 1.5rem;
		color: white !important;
		text-decoration: none;
		border-radius: var(--border-radius);
		font-weight: 600;
		transition: opacity 0.3s;
	}
	.share-button:hover {
		opacity: 0.8;
	}
	.facebook {
		background-color: #1877f2;
	}
	.twitter {
		background-color: #1da1f2;
	}
	.linkedin {
		background-color: #0077b5;
	}
	.whatsapp {
		background-color: #25d366;
	}
</style>

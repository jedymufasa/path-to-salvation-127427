<script lang="ts">
	import { submitContactRequest, type ContactRequest } from '$lib/api';
	import { slide } from 'svelte/transition';

	let name = '';
	let email = '';
	let message = '';
	let submitting = false;
	let error: string | null = null;
	let success = false;

	async function handleSubmit(event: SubmitEvent) {
		event.preventDefault();
		submitting = true;
		error = null;
		success = false;
		const contact: ContactRequest = { name, email, message };

		try {
			await submitContactRequest(contact);
			success = true;
			name = '';
			email = '';
			message = '';
		} catch (e: unknown) {
			if (e instanceof Error) {
				error = e.message;
			} else {
				error = 'An unknown error occurred. Please try again.';
			}
		} finally {
			submitting = false;
		}
	}
</script>

<section id="contact">
	<h2>Connect With Us</h2>
	<div class="contact-container">
		{#if success}
			<div class="success-message" transition:slide>
				<h3>Thank You!</h3>
				<p>We have received your message and will be in touch soon.</p>
			</div>
		{:else}
			<form onsubmit={handleSubmit} class="contact-form">
				<p class="form-intro">
					Have questions, need prayer, or want to share your story? We'd love to hear from you.
				</p>
				<div class="form-group">
					<label for="name">Name</label>
					<input type="text" id="name" bind:value={name} required placeholder="Your Name" />
				</div>
				<div class="form-group">
					<label for="email">Email</label>
					<input type="email" id="email" bind:value={email} required placeholder="your.email@example.com" />
				</div>
				<div class="form-group">
					<label for="message">Message (Optional)</label>
					<textarea id="message" bind:value={message} rows="5" placeholder="Your message here..."></textarea>
				</div>

				{#if error}
					<p class="error-message" transition:slide>{error}</p>
				{/if}

				<button type="submit" disabled={submitting}>
					{submitting ? 'Submitting...' : 'Send Message'}
				</button>
			</form>
		{/if}
	</div>
</section>

<style>
	.contact-container {
		max-width: 45rem;
		margin: 0 auto;
		background-color: var(--color-bg-offset);
		padding: 2.5rem;
		border-radius: var(--border-radius);
		border: 1px solid var(--color-border);
	}

	h2 {
		text-align: center;
	}

	.form-intro {
		text-align: center;
		margin-top: -1rem;
		margin-bottom: 2rem;
		font-size: 1.1rem;
	}

	.contact-form {
		display: grid;
		gap: 1.25rem;
	}
	.form-group {
		display: flex;
		flex-direction: column;
	}
	label {
		margin-bottom: 0.5rem;
		font-weight: 500;
		font-size: 0.9rem;
	}
	input,
	textarea {
		padding: 0.9rem;
		border: 1px solid var(--color-border);
		border-radius: 8px;
		font-size: 1rem;
		font-family: inherit;
		background-color: var(--color-bg);
		transition: border-color var(--transition-speed), box-shadow var(--transition-speed);
	}
	input:focus,
	textarea:focus {
		outline: none;
		border-color: var(--color-primary);
		box-shadow: 0 0 0 3px rgba(26, 115, 232, 0.2);
	}

	.error-message {
		color: var(--color-accent);
		background-color: rgba(217, 48, 37, 0.1);
		border: 1px solid rgba(217, 48, 37, 0.2);
		padding: 0.8rem 1rem;
		border-radius: 8px;
		margin: 0;
		text-align: center;
	}
	.success-message {
		text-align: center;
		padding: 2rem;
	}
	.success-message h3 {
		color: var(--color-primary);
		margin-top: 0;
		font-size: 1.75rem;
	}
</style>

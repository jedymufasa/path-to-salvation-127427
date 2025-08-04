<script lang="ts">
	import { submitContactRequest, type ContactRequest } from '$lib/api';

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
				error = 'An unknown error occurred.';
			}
		} finally {
			submitting = false;
		}
	}
</script>

<section id="contact">
	<h2>Have Questions or Made a Decision?</h2>
	{#if success}
		<p class="success-message">
			Thank you for reaching out! We have received your message and will be in touch soon.
		</p>
	{:else}
		<form onsubmit={handleSubmit} class="contact-form">
			<div class="form-group">
				<label for="name">Name</label>
				<input type="text" id="name" bind:value={name} required />
			</div>
			<div class="form-group">
				<label for="email">Email</label>
				<input type="email" id="email" bind:value={email} required />
			</div>
			<div class="form-group">
				<label for="message">Message (Optional)</label>
				<textarea id="message" bind:value={message} rows="5"></textarea>
			</div>

			{#if error}
				<p class="error-message">{error}</p>
			{/if}

			<button type="submit" disabled={submitting}>
				{submitting ? 'Submitting...' : 'Send Message'}
			</button>
		</form>
	{/if}
</section>

<style>
	.contact-form {
		display: grid;
		gap: 1.5rem;
		padding: 2rem;
		background-color: #ffffff;
		border-radius: var(--border-radius);
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
	}
	.form-group {
		display: flex;
		flex-direction: column;
	}
	label {
		margin-bottom: 0.5rem;
		font-weight: 600;
	}
	input,
	textarea {
		padding: 0.8rem;
		border: 1px solid var(--color-light-gray);
		border-radius: var(--border-radius);
		font-size: 1rem;
		font-family: inherit;
	}
	.error-message {
		color: var(--color-accent);
		margin: 0;
	}
	.success-message {
		color: var(--color-primary);
        font-weight: bold;
		text-align: center;
		padding: 2rem;
		background-color: #e6f9e6;
		border-radius: var(--border-radius);
	}
</style>

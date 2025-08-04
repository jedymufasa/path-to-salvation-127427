<script lang="ts">
	import '../app.css';

	let { children } = $props();

	function handleNavClick(event: MouseEvent) {
		const target = event.target as HTMLAnchorElement;
		const id = target.getAttribute('href')?.substring(1);
		if (id) {
			const element = document.getElementById(id);
			if (element) {
				event.preventDefault();
				element.scrollIntoView({ behavior: 'smooth' });
			}
		}
	}
</script>

<div class="app-container">
	<header>
		<nav>
			<a href="/" class="logo">Path to Salvation</a>
			<div class="nav-links" onclick={handleNavClick}>
				<a href="#tract">The Message</a>
				<a href="#salvation-steps">The Way</a>
				<a href="#contact">Connect</a>
			</div>
		</nav>
	</header>

	<main>
		{@render children()}
	</main>

	<footer>
		<p>&copy; {new Date().getFullYear()} Path to Salvation. A ministry dedicated to sharing the Gospel.</p>
	</footer>
</div>

<style>
	.app-container {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
		background-color: var(--color-bg);
	}

	header {
		background-color: rgba(255, 255, 255, 0.8);
		padding: 1rem 2rem;
		position: sticky;
		top: 0;
		z-index: 100;
		box-shadow: var(--shadow-sm);
		backdrop-filter: blur(10px);
		-webkit-backdrop-filter: blur(10px);
		border-bottom: 1px solid var(--color-border);
	}

	nav {
		display: flex;
		justify-content: space-between;
		align-items: center;
		max-width: var(--content-width);
		margin: 0 auto;
	}

	.logo {
		font-size: 1.3rem;
		font-weight: 700;
		color: var(--color-text);
		text-decoration: none;
	}

	.nav-links a {
		color: var(--color-text-secondary);
		text-decoration: none;
		margin-left: 2.5rem;
		font-weight: 500;
		transition: color var(--transition-speed) ease;
	}
	.nav-links a:hover {
		color: var(--color-primary);
		text-decoration: none;
	}

	main {
		flex: 1;
		width: 100%;
	}

	footer {
		background-color: var(--color-bg-offset);
		text-align: center;
		padding: 2.5rem 1rem;
		margin-top: 4rem;
		color: var(--color-text-secondary);
		border-top: 1px solid var(--color-border);
	}
	footer p {
		margin: 0;
		font-size: 0.9rem;
	}

	@media (max-width: 768px) {
		.logo {
			font-size: 1.2rem;
		}
		.nav-links a {
			margin-left: 1.5rem;
		}
	}
</style>

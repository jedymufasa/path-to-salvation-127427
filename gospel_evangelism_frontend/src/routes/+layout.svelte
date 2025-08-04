<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

<div class="app-container">
	<header>
		<nav>
			<a href="/" class="logo">Path to Salvation</a>
			<div class="nav-links">
				<a href="#tract">The Tract</a>
				<a href="#salvation-steps">The Way</a>
				<a href="#contact">Contact</a>
			</div>
		</nav>
	</header>

	<main>
		{@render children()}
	</main>

	<footer>
		<p>&copy; {new Date().getFullYear()} Path to Salvation. All Rights Reserved.</p>
        <p>A ministry dedicated to spreading the Gospel of Jesus Christ.</p>
	</footer>
</div>

<style>
	.app-container {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	header {
		background-color: var(--color-primary);
		color: white;
		padding: 1rem 2rem;
		box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        position: sticky;
        top: 0;
        z-index: 100;
	}
    
    nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        max-width: var(--content-width);
        margin: 0 auto;
    }

    .logo {
        font-size: 1.5rem;
        font-weight: bold;
        color: var(--color-secondary);
        text-decoration: none;
    }

    .nav-links a {
        color: white;
        text-decoration: none;
        margin-left: 2rem;
        font-weight: 500;
    }
    .nav-links a:hover {
        text-decoration: underline;
    }

	main {
		flex: 1;
	}

	footer {
		background-color: var(--color-light-gray);
		text-align: center;
		padding: 2rem 1rem;
		margin-top: 2rem;
		color: #666;
	}
    footer p {
        margin: 0.5rem 0;
    }
</style>

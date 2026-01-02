<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.png';
	import Navbar from '$lib/components/common/Navbar.svelte';
	import Footer from '$lib/components/common/Footer.svelte';
	import OrderBanner from '$lib/components/common/OrderBanner.svelte';

</script>

<svelte:head><link rel="icon" href={favicon} /><title>Evegurumis - Amigurumis</title></svelte:head>

<div
	class="flex flex-col min-h-screen transition-colors duration-300 ease-in-out
	bg-white
	dark:bg-dark-primary"
>
	<Navbar />
	<main class="grow">
		<slot />
	</main>
	<OrderBanner />
	<Footer />
</div>

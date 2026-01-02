<script lang="ts">
	import { onMount } from 'svelte';
	import { getAmigurumis } from '$lib/firebase/firestoreUtils';
	import CardAmigurumi from '$lib/components/common/CardAmigurumi.svelte';
	import Loader from '$lib/components/common/Loader.svelte';
	import type { AmigurumiType } from '$lib/types/types';
	let amigurumis: AmigurumiType[] = $state([]);
	let isLoading = $state(true);

	onMount(async () => {
		try {
			console.log('Amigurumis page mounted');
			amigurumis = (await getAmigurumis()) as AmigurumiType[];
			isLoading = false;
			console.log('Fetched amigurumis:', amigurumis);
		} catch (error) {
			console.error('Error fetching amigurumis:', error);
		} finally {
			isLoading = false;
		}
	});
</script>

<section
	class="fade-in mx-auto min-h-screen max-w-7xl bg-white pt-16 transition-colors duration-300 sm:py-16 lg:py-20 dark:bg-dark-secondary"
>
	<h1 class="py-8 text-center text-3xl text-gray-100">Todos los Amigurumis</h1>
	<div class="grid grid-cols-1 gap-6 px-6 sm:grid-cols-2 lg:grid-cols-4">
		{#if isLoading}
			<Loader />
		{:else}
			{#each amigurumis as amigurumi}
				<CardAmigurumi {amigurumi} />
			{/each}
		{/if}
	</div>
</section>

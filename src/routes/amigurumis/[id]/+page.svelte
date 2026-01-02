<script lang="ts">
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import { getAmigurumiById } from '$lib/firebase/firestoreUtils';
	import type { AmigurumiType } from '$lib/types/types';
	import { fade, scale } from 'svelte/transition';

	let amigurumi: AmigurumiType | null = null;
	let loading = true;
	let error = false;

	onMount(async () => {
		const id = $page.params.id as string;
		amigurumi = await getAmigurumiById(id);
		loading = false;

		if (!amigurumi) {
			error = true;
		}
	});
</script>

<div class="min-h-screen bg-white pt-14 transition-colors duration-300 dark:bg-dark-primary">
	{#if loading}
		<div class="flex h-screen items-center justify-center">
			<div
				class="border-color-secondary border-t-color-tertiary dark:border-color-dark-secondary dark:border-t-color-dark-tertiary h-16 w-16 animate-spin rounded-full border-4"
			></div>
		</div>
	{:else if error || !amigurumi}
		<div class="mx-auto max-w-4xl px-4 py-20 text-center">
			<h1 class="mb-4 text-4xl font-bold text-gray-900 dark:text-gray-100">
				Amigurumi no encontrado
			</h1>
			<a
				href="/amigurumis"
				class="inline-block rounded-lg bg-white px-6 py-3 font-semibold text-gray-900 shadow transition-all duration-300 hover:scale-105 dark:bg-neutral-950 dark:text-gray-100"
			>
				Volver al catálogo
			</a>
		</div>
	{:else}
		<div class="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8" transition:fade={{ duration: 300 }}>
			<!-- Breadcrumb -->
			<nav class="mb-8 flex items-center gap-2 text-sm text-gray-900 dark:text-gray-100">
				<a href="/" class="hover:text-color-secondary transition-colors">Inicio</a>
				<span>/</span>
				<a href="/amigurumis" class="hover:text-color-secondary transition-colors">Amigurumis</a>
				<span>/</span>
				<span class="font-semibold">{amigurumi.name}</span>
			</nav>

			<div class="grid gap-8 lg:grid-cols-2 lg:gap-12">
				<!-- Imagen -->
				<div class="flex items-center justify-center" transition:scale={{ duration: 300 }}>
					<div class="relative w-full max-w-md overflow-hidden rounded-2xl shadow-xl">
						<img
							src={amigurumi.photo_url}
							alt={amigurumi.name}
							class="h-auto w-full object-cover"
						/>
						<div
							class="absolute top-4 right-4 rounded-full bg-white px-4 py-2 font-semibold text-gray-900 shadow-lg dark:text-gray-900"
						>
							${amigurumi.price.toLocaleString('es-CO')}
						</div>
					</div>
				</div>

				<!-- Información -->
				<div class="flex flex-col justify-center ps-4" transition:scale={{ duration: 300 }}>
					<div class="mb-6">
						{#if amigurumi.imageLogo_url}
							<img
								src={amigurumi.imageLogo_url}
								alt={amigurumi.category}
								class="mb-4 h-12 w-auto object-contain opacity-80 dark:opacity-70"
							/>
						{/if}
					</div>

					<h1 class="mb-4 text-3xl font-bold text-gray-900 sm:text-5xl dark:text-gray-100">
						{amigurumi.name}
					</h1>

					<p class="mb-8 text-sm leading-relaxed text-gray-900 opacity-90 dark:text-gray-100">
						{amigurumi.description}
					</p>

					<div class="bg-color-main dark:bg-color-dark-secondary mb-8 rounded-lg">
						<p class="text-sm italic dark:text-gray-100">Categoria: {amigurumi.category}</p>
						<p class="text-color-tertiary text-sm font-semibold italic dark:text-gray-100">
							Hecho 100% a mano
						</p>
					</div>

					<!-- Botón Haz tu encargo -->
					<div class="flex flex-col gap-4 sm:flex-row">
						<a
							href="https://instagram.com/eve.gurumis1"
							target="_blank"
							rel="noopener noreferrer"
							class="inline-flex items-center justify-center gap-6 rounded-2xl bg-white px-8 py-4 text-sm font-bold text-gray-900 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl dark:bg-neutral-950 dark:text-gray-100"
						>
							<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
								<path
									d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.322a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z"
								/>
							</svg>
							Haz tu encargo en Instagram
						</a>
					</div>
				</div>
			</div>
		</div>
	{/if}
</div>

<style>
	:global(body) {
		overflow-x: hidden;
	}
</style>

<script>
	import CardAmigurumi from '$lib/components/common/CardAmigurumi.svelte';
	import { highlightedAmigurumis } from '$lib/utils/constants';
</script>

<!-- <Hero /> -->

<div
	class="relative mt-26 flex min-h-125 w-full items-center justify-center overflow-hidden rounded-3xl px-6 py-20 md:h-150 md:rounded-[40px] lg:h-175 xl:absolute xl:right-7 xl:left-7 xl:h-200 xl:w-[calc(100%-56px)] xl:rounded-[48px]"
>
	<div class="absolute inset-0 z-10 bg-linear-to-t from-black/70 via-black/40 to-black/10">
		<div
			class="no-repeat absolute inset-0 z-0 bg-[url('/heroMainPage.jpg')] bg-cover bg-center opacity-65 transition-transform duration-700"
		></div>
	</div>

	<div class="relative z-20 max-w-3xl text-center">
		<h2
			class="text-4xl font-bold tracking-tight text-main drop-shadow-md sm:text-6xl lg:text-8xl"
		>
			Bienvenido a <span class="text-amber-50 italic">Evegurumis</span>
		</h2>
		<p class="dark:text-cream/90 mt-6 text-lg font-medium text-main md:text-2xl">
			Amigurumis de cualquier personaje que imagines, hechos 100% a mano con amor y dedicación.
		</p>
	</div>
</div>

<div class="hidden xl:block xl:h-212.5"></div>

<section
	class="bg-white pt-8 transition-colors duration-300 sm:py-16 lg:py-20 dark:bg-dark-primary"
>
	<div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
		<div class="mb-12 text-center">
			<h2 class="mb-4 text-3xl text-gray-900 sm:text-4xl lg:text-5xl dark:text-white">
				<span class="text-base font-normal text-gray-400 dark:text-white italic"
					>Amigurumis hechos 100% a mano
				</span>
			</h2>
		</div>

		<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
			{#each highlightedAmigurumis as amigurumi}
				<CardAmigurumi {amigurumi} />
			{/each}
		</div>

		<div class="fade-in my-12 text-center">
			<a
				href="/amigurumis"
				class="inline-block transform rounded-lg px-8 py-4 font-semibold text-gray-900 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl bg-white dark:bg-neutral-950 dark:text-white"
			>
				Ver Catálogo Completo
			</a>
		</div>
	</div>
</section>

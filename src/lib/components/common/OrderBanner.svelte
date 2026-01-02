<script>
	import { scale } from 'svelte/transition';
</script>

<hr class="mx-auto w-72 bg-amber-100 opacity-20" />
<section class="px-4 transition-colors duration-300 sm:py-20 lg:py-24 dark:bg-dark-primary">
	<div class="mx-auto max-w-4xl">
		<div
			class="rounded-2xl bg-white/80 px-6 py-12 text-center backdrop-blur-sm sm:px-8 lg:px-12 dark:bg-black/40"
		>
			<h2 class="mb-3 text-3xl font-bold text-textMain sm:text-4xl dark:text-gray-100">
				¿Tienes un personaje en mente?
			</h2>
			<p class="mb-8 text-lg text-textMain opacity-90 dark:text-gray-100">
				¡Haz tu encargo personalizado! Contáctanos por Instagram para crear tu amigurumi único.
			</p>

			<a
				href="https://instagram.com/eve.gurumis1"
				target="_blank"
				rel="noopener noreferrer"
				class="text-grey-900 inline-flex transform items-center gap-3 rounded-full bg-linear-to-r px-8 py-4 font-semibold shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl dark:text-gray-100"
				transition:scale
			>
				<svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
					<path
						d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.322a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z"
					/>
				</svg>
				Haz tu encargo por Instagram
			</a>
		</div>
	</div>
</section>

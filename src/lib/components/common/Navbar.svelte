<script lang="ts">
	import { fade } from 'svelte/transition';

	let name = 'World';
	let visibleNavbarMenu = $state(false);
	let isDark = $state(false);

	$effect(() => {
		if (typeof window !== 'undefined') {
			isDark = document.documentElement.classList.contains('dark');
		}
	});

	function toggleMenu() {
		visibleNavbarMenu = !visibleNavbarMenu;
	}

	function toggleDarkMode() {
		isDark = !isDark;

		document.documentElement.classList.toggle('dark', isDark);
		localStorage.setItem('theme', isDark ? 'dark' : 'light');
	}
</script>

<nav
	class="fixed top-0 right-0 left-0 z-50 mx-auto flex h-20 items-center justify-between bg-main px-4 text-textMain shadow-md transition-colors duration-300 dark:bg-dark-primary dark:text-white"
>
	<div class="md:max-w-3xl lg:max-w-5xl xl:max-w-7xl justify-between mx-auto flex w-full items-center">
		<!-- Logo -->
		<a href="/" class="shrink-0 text-3xl">
			<img src="/straw_hat.png" class="h-12 w-12 object-contain" alt="Evegurumis" />
		</a>

		<!-- Desktop Menu -->
		<div class="hidden items-center gap-x-8 md:flex">
			<a
				href="/"
				class="hover:text-rose-medium font-medium text-textMain transition-colors duration-300 dark:text-white dark:hover:text-pink-400"
			>
				Inicio
			</a>
			<a
				href="/amigurumis"
				class="hover:text-rose-medium font-medium text-textMain transition-colors duration-300 dark:text-white dark:hover:text-pink-400"
			>
				Amigurumis
			</a>
			<a
				href="/about"
				class="hover:text-rose-medium font-medium text-textMain transition-colors duration-300 dark:text-white dark:hover:text-pink-400"
			>
				Acerca de
			</a>
		</div>

		<!-- Right Section: Dark Mode + Mobile Menu Button -->
		<div class="flex items-center gap-x-4">
			<!-- Dark Mode Toggle -->
			<button
				onclick={toggleDarkMode}
				aria-label="Cambiar tema"
				class="rounded-lg p-2 transition-colors duration-300 hover:bg-gray-300 dark:hover:bg-gray-800"
			>
				{#if isDark}
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="currentColor"
						class="h-6 w-6"
						viewBox="0 0 16 16"
					>
						<path
							d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278"
						/>
					</svg>
				{:else}
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="currentColor"
						class="h-6 w-6"
						viewBox="0 0 16 16"
					>
						<path
							d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6m0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2a.5.5 0 0 1 .5-.5zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"
						/>
					</svg>
				{/if}
			</button>

			<!-- Mobile Menu Button (only on mobile) -->
			<button
				class="rounded-lg p-2 transition-colors duration-300 hover:bg-gray-300 md:hidden dark:hover:bg-gray-800"
				aria-label="Menú"
				onclick={toggleMenu}
			>
				{#if visibleNavbarMenu}
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="currentColor"
						class="h-10 w-10"
						viewBox="0 0 16 16"
					>
						<path
							d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
						/>
					</svg>
				{:else}
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="currentColor"
						class="h-10 w-10"
						viewBox="0 0 16 16"
					>
						<path
							fill-rule="evenodd"
							d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
						/>
					</svg>
				{/if}
			</button>
		</div>

		<!-- Mobile Menu (only visible on mobile when toggled) -->
		{#if visibleNavbarMenu}
			<div
				transition:fade={{ duration: 200 }}
				class="bg-main absolute top-20 right-0 left-0 flex flex-col items-center space-y-4 border-b border-gray-300 py-6 md:hidden dark:border-gray-800 dark:bg-dark-primary"
			>
				<a
					href="/"
					class="hover:text-rose-medium font-medium text-textMain transition-colors duration-300 dark:text-gray-50 dark:hover:text-pink-400"
					onclick={toggleMenu}
				>
					Inicio
				</a>
				<a
					href="/amigurumis"
					class="hover:text-rose-medium font-medium text-textMain transition-colors duration-300 dark:text-gray-50 dark:hover:text-pink-400"
					onclick={toggleMenu}
				>
					Amigurumis
				</a>
				<a
					href="/about"
					class="hover:text-rose-medium font-medium text-textMain transition-colors duration-300 dark:text-white dark:hover:text-pink-400"
					onclick={toggleMenu}
				>
					Acerca de
				</a>
			</div>
		{/if}
	</div>
</nav>

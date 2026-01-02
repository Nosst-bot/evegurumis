<script lang="ts">
    import type { AmigurumiType } from '$lib/types/types';
	import { scale } from 'svelte/transition';

    export let amigurumi: AmigurumiType;
</script>

<a
	href="/amigurumis/{amigurumi.id}"
	transition:scale={{ duration: 300 }}
	class="fade-in group relative block transform overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl"
>
	<div class="relative h-80 overflow-hidden bg-gray-200 sm:h-72 lg:h-80 dark:bg-gray-700">
		<img
			src="{amigurumi.photo_url}"
			alt={amigurumi.name}
			class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
		/>
	</div>
	<div class="bg-white p-4 dark:bg-neutral-900">
		<h3 class="mb-2 text-lg font-semibold text-gray-900 dark:text-white">{amigurumi.name}</h3>
		<p class="mb-4 text-sm text-gray-600 dark:text-gray-400">
			{amigurumi.description}
		</p>
		<div class="flex items-center justify-between">
			<span class="font-bold text-rose-medium dark:text-gray-200">${amigurumi.price}</span>
			<img src={amigurumi.imageLogo_url} alt="" class="h-16 w-24 object-contain" />
		</div>
	</div>
</a>

<script lang="ts">
	import type { Picture } from '@sveltejs/enhanced-img';
	import { onMount } from 'svelte';
	import { IconChevronCompactRight, IconChevronCompactLeft } from '@tabler/icons-svelte-runes';

	type Props = {
		images: Picture[] | string[];
		label: string;
		autoplay?: boolean;
		interval?: number;
		removeDots?: boolean;
	};

	const { images, label, autoplay = false, interval = 4000, removeDots = false }: Props = $props();

	let current: number = $state(0);
	let timer: NodeJS.Timeout;

	const startTimer = () => {
		if (!autoplay) return;

		if (timer) clearInterval(timer);
		timer = setInterval(next, interval);
	};

	const next = () => {
		current = (current + 1) % images.length;
		startTimer();
	};

	const prev = () => {
		current = (current - 1 + images.length) % images.length;
		startTimer();
	};

	const goTo = (index: number) => {
		current = index;
		startTimer();
	};

	onMount(() => {
		startTimer();

		return () => {
			if (timer) clearInterval(timer);
		};
	});
</script>

<div
	class="relative mx-auto h-full w-full max-w-4xl overflow-hidden rounded-2xl shadow-xl"
	role="region"
	aria-label={label}
>
	<div
		class="flex transition-transform duration-500 ease-in-out"
		style="transform: translateX(-{current * 100}%);"
	>
		{#each images as image, index (image)}
			<div class="min-w-full">
				<enhanced:img
					src={image}
					alt="Slide del Carosello"
					class="h-96 w-full object-cover md:h-180"
					loading={index === 0 ? 'eager' : 'lazy'}
				/>
				<div aria-live="polite" class="sr-only">Immagine {current + 1} di {images.length}</div>
			</div>
		{/each}
	</div>

	<!-- Controls -->
	<button
		onclick={prev}
		class="absolute top-1/2 left-4 -translate-y-1/2 cursor-pointer rounded-full bg-white/70 p-2 text-gray-800 shadow hover:bg-white"
		aria-label="Immagine precedente"
	>
		<IconChevronCompactLeft class="h-6 w-6" />
	</button>

	<button
		onclick={next}
		class="absolute top-1/2 right-4 -translate-y-1/2 cursor-pointer rounded-full bg-white/70 p-2 text-gray-800 shadow hover:bg-white"
		aria-label="Immagine successiva"
	>
		<IconChevronCompactRight class="h-6 w-6" />
	</button>

	<!-- Dots -->
	{#if !removeDots}
		<div class="absolute bottom-4 left-1/2 flex -translate-x-1/2 space-x-2">
			{#each images as _, index (index)}
				<button
					onclick={() => goTo(index)}
					class={`h-3 w-3 rounded-full transition ${
						current === index ? 'scale-110 bg-white' : 'bg-white/50 hover:bg-white'
					}`}
					title="Vai all'immagine {index + 1}"
					aria-current={current === index}
				></button>
			{/each}
		</div>
	{/if}
</div>

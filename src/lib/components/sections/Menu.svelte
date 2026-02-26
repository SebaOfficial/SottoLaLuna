<script lang="ts">
	import type { Locale } from '$lib/i18n';
	import menu from '$lib/assets/menu.pdf?url';
	import Dish from './menu/Dish.svelte';

	const { locale }: { locale: Locale['menu'] } = $props();

	const images = Object.entries(
		import.meta.glob('/src/lib/assets/menu/*.{avif,gif,heif,jpeg,jpg,png,tiff,webp}', {
			eager: true,
			query: {
				enhanced: true,
			},
		}),
	).map(([_, module]) => (module as { default: string }).default);
</script>

<section class="bg-white py-32" id="menu">
	<div
		class="mx-auto mb-20 flex max-w-7xl flex-col justify-between gap-8 px-6 md:flex-row md:items-end"
	>
		<div class="max-w-2xl">
			<div class="mb-4 inline-flex items-center gap-3 text-primary">
				<span class="h-px w-8 bg-primary/50"></span>
				<span class="text-xs font-bold tracking-widest uppercase">{locale.subtitle}</span>
			</div>
			<h2 class="mb-6 font-serif text-5xl text-charcoal">{locale.title}</h2>
			<p class="text-lg text-charcoal/80">
				{locale.description}
			</p>
		</div>
		<a
			class="cursor-pointer rounded-lg border-2 border-primary px-10 py-4 font-bold text-primary transition-all duration-300 hover:bg-primary hover:text-white"
			href={menu}
		>
			{locale.button}
		</a>
	</div>

	<div class="mx-auto flex max-w-7xl flex-wrap justify-around gap-10 px-6">
		{#each locale.gallery as dish, index (dish.title)}
			<Dish {dish} image={images[index % images.length]} />
		{/each}
	</div>
</section>

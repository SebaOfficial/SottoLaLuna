<script lang="ts">
	import type { Locale } from '$lib/i18n';

	const { dish, image }: { dish: Locale['menu']['gallery'][number]; image: string } = $props();
</script>

<div class="group max-w-90">
	<div
		class="relative mb-8 aspect-4/5 overflow-hidden rounded-xl border border-stone-100 shadow-lg"
	>
		<!-- Image -->
		<enhanced:img
			alt={dish.imgAlt}
			class="relative z-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
			src={image}
		/>

		<!-- White overlay -->
		<div
			class="absolute inset-0 z-10 bg-black/40 transition duration-300 group-hover:bg-white/10"
		></div>

		<!-- Black gradient -->
		<div
			class="absolute inset-0 z-20 bg-linear-to-t from-black/80 via-transparent to-transparent opacity-60"
		></div>

		<div class="absolute right-8 bottom-8 left-8 z-30">
			<span
				class="mb-3 hidden bg-primary px-3 py-1 font-bold tracking-widest text-white uppercase md:inline-block md:text-[10px]"
			>
				{dish.flag}
			</span>

			<h3 class="mb-2 font-serif text-xl text-white md:text-3xl">
				{dish.title}
			</h3>

			<p class="text-[10px] text-white italic md:text-sm">
				{dish.ingredients}
			</p>
		</div>
	</div>

	<p class="text-[12px] leading-relaxed text-charcoal/90 md:text-sm">
		{dish.description}
	</p>
</div>

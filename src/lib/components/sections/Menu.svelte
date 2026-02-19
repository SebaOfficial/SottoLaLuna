<script lang="ts">
	import type { Locale } from '$lib/i18n';
	import menu from '$lib/assets/menu.pdf?url';

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
			<p class="text-lg text-charcoal/50">
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
	<div class="mx-auto grid max-w-7xl grid-cols-2 gap-10 px-6 md:grid-cols-4">
		{#each locale.gallery as dish, index}
			<div class="group">
				<div
					class="relative mb-8 aspect-4/5 overflow-hidden rounded-xl border border-stone-100 shadow-lg"
				>
					<enhanced:img
						alt={dish.imgAlt}
						class="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
						src={images[index]}
					/>
					<div
						class="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent opacity-60"
					></div>
					<div class="absolute right-8 bottom-8 left-8">
						<span
							class="mb-3 hidden bg-primary px-3 py-1 font-bold tracking-widest text-white uppercase md:inline-block md:text-[10px]"
						>
							{dish.flag}
						</span>
						<h3 class="mb-2 font-serif text-xl text-white md:text-3xl">{dish.title}</h3>
						<p class="text-[10px] text-white/80 italic md:text-sm">{dish.ingredients}</p>
					</div>
				</div>
				<p class="text-[12px] leading-relaxed text-charcoal/60 md:text-sm">
					{dish.description}
				</p>
			</div>
		{/each}
	</div>
</section>

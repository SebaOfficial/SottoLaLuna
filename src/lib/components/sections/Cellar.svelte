<script lang="ts">
	import type { Locale } from '$lib/i18n';
	import Carousel from '$lib/components/Carousel.svelte';

	const { locale }: { locale: Locale['cellar'] } = $props();

	const images = Object.entries(
		import.meta.glob('/src/lib/assets/cellar/*.{avif,gif,heif,jpeg,jpg,png,tiff,webp}', {
			eager: true,
			query: {
				enhanced: true,
			},
		}),
	).map(([_, module]) => (module as { default: string }).default);
</script>

<section class="relative overflow-hidden bg-stone-50 py-32" id="cantina">
	<div class="mx-auto grid max-w-7xl gap-20 px-6 md:grid-cols-2">
		<div class="space-y-8">
			<div class="inline-flex items-center gap-3 text-primary">
				<span class="h-px w-8 bg-primary/50"></span>
				<span class="text-xs font-bold tracking-widest uppercase">
					{locale.subtitle}
				</span>
			</div>

			<h2 class="font-serif text-5xl leading-tight text-charcoal md:text-6xl">
				{locale.title}
			</h2>

			<p class="text-lg leading-relaxed text-charcoal/70">
				{locale.description}
			</p>
		</div>

		<div>
			<Carousel {images} autoplay={true} label="Galleria della Cantina" />
		</div>
	</div>
</section>

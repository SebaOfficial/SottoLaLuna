<script lang="ts">
	import config from '$lib/config';
	import type { Locale } from '$lib/i18n';
	import { IconArrowNarrowRight, IconClock, IconMapPin } from '@tabler/icons-svelte-runes';
	import GoogleMap from '../GoogleMap.svelte';

	const { locale }: { locale: Locale['whereWeAre'] } = $props();
</script>

<section class="border-t border-stone-100 bg-white py-32" id="dovesiamo">
	<div class="mx-auto max-w-7xl px-6">
		<div class="grid items-center gap-16 md:grid-cols-2">
			<div class="space-y-8">
				<div class="inline-flex items-center gap-3 text-primary">
					<span class="h-1 w-8 bg-primary/50"></span>
					<span class="text-xs font-bold tracking-widest uppercase">{locale.subtitle}</span>
				</div>
				<h2 class="font-serif text-5xl text-charcoal">{locale.title}</h2>
				<div class="space-y-6 text-charcoal/80">
					<div class="flex items-start gap-4">
						<IconMapPin class="mt-1 text-primary" />
						<div>
							<p class="mb-1 font-bold text-charcoal">{locale.address}</p>
							<p>{config.map.address}</p>
						</div>
					</div>
					<div class="flex items-start gap-4">
						<IconClock class="mt-1 text-primary" />
						<div>
							<p class="mb-1 font-bold text-charcoal">{locale.openHours}</p>
							<p>Lun - Sab: {config.openingHours.open} - {config.openingHours.close}</p>
							<p>Dom: Chiuso</p>

							<p class="mt-3 text-sm text-charcoal/70">{locale.takeaway}</p>
						</div>
					</div>
					<div class="pt-4">
						<a
							href={config.deliveroo.url}
							target="_blank"
							rel="noopener noreferrer"
							class="inline-flex items-center gap-2 font-bold text-primary transition-all hover:gap-4"
						>
							{locale.deliveroo}
							<IconArrowNarrowRight />
						</a>
					</div>
				</div>
				<a
					class="flex cursor-pointer items-center gap-2 font-bold text-primary transition-all hover:gap-4"
					href={config.map.directions}
					target="_blank"
					rel="noopener noreferrer"
				>
					{locale.directions}
					<IconArrowNarrowRight />
				</a>
			</div>
			<div
				class="group relative h-112 overflow-hidden rounded-2xl border border-stone-100 shadow-xl"
			>
				<GoogleMap mapUrl={config.map.src} width={600} height={450} />
			</div>
		</div>
	</div>
</section>

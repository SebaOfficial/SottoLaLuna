<script lang="ts">
	import config from '$lib/config';
	import type { Locale } from '$lib/i18n';
	import {
		IconBrandFacebook,
		IconBrandInstagram,
		IconToolsKitchen2,
	} from '@tabler/icons-svelte-runes';
	import { scrollTo } from 'svelte-scrolling';

	const { locale }: { locale: Locale['footer'] } = $props();
</script>

<footer class="bg-primary pt-24 pb-12 text-white">
	<div class="mx-auto mb-20 grid max-w-7xl grid-cols-1 gap-16 px-6 md:grid-cols-4">
		<div class="col-span-1 md:col-span-1">
			<div class="mb-8 flex items-center gap-2">
				<IconToolsKitchen2 class="text-3xl text-white" />
				<h3 class="notranslate font-serif text-xl font-bold tracking-widest text-white uppercase">
					{locale.name}
				</h3>
			</div>
			<p class="mb-8 text-sm leading-relaxed text-white/90">
				{locale.description}
			</p>
			<div class="flex gap-4">
				<a
					class="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 text-white transition-all hover:bg-white hover:text-primary"
					href={config.socials.instagram}
					target="_blank"
					rel="noopener noreferrer"
					aria-label="Instagram"
				>
					<IconBrandInstagram size={26} />
					<span class="sr-only">(si apre in una nuova scheda)</span>
				</a>
				<a
					class="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 text-white transition-all hover:bg-white hover:text-primary"
					href={config.socials.facebook}
					target="_blank"
					rel="noopener noreferrer"
					aria-label="Facebook"
				>
					<IconBrandFacebook size={26} />
					<span class="sr-only">(si apre in una nuova scheda)</span>
				</a>
			</div>
		</div>
		<div>
			<h4 class="mb-8 text-sm font-bold tracking-widest text-white uppercase">
				{locale.navigation.title}
			</h4>
			<ul class="space-y-4 text-sm text-white/90">
				<li>
					<a
						class="transition-colors hover:text-stone-200 focus-visible:ring-offset-primary"
						href="#hero"
						use:scrollTo={'hero'}
					>
						{locale.navigation.backToTop}
					</a>
				</li>
				<li>
					<a
						class="transition-colors hover:text-stone-200 focus-visible:ring-offset-primary"
						href="#about"
						use:scrollTo={'about'}
					>
						{locale.navigation.about}
					</a>
				</li>
				<li>
					<a
						class="transition-colors hover:text-stone-200 focus-visible:ring-offset-primary"
						href="#menu"
						use:scrollTo={'menu'}
					>
						{locale.navigation.menu}
					</a>
				</li>
				<li>
					<a
						class="transition-colors hover:text-stone-200 focus-visible:ring-offset-primary"
						href="#cantina"
						use:scrollTo={'cantina'}
					>
						{locale.navigation.cellar}
					</a>
				</li>
				<li>
					<a
						class="transition-colors hover:text-stone-200 focus-visible:ring-offset-primary"
						href="#prenota"
						use:scrollTo={'prenota'}
					>
						{locale.navigation.book}
					</a>
				</li>
				<li>
					<a
						class="transition-colors hover:text-stone-200 focus-visible:ring-offset-primary"
						href="#dovesiamo"
						use:scrollTo={'dovesiamo'}
					>
						{locale.navigation.whereWeAre}
					</a>
				</li>
			</ul>
		</div>
		<div>
			<h4 class="mb-8 text-sm font-bold tracking-widest text-white uppercase">
				{locale.openingHours.title}
			</h4>
			<ul class="space-y-4 text-sm text-white/90">
				<li class="flex justify-between border-b border-white/10 pb-2">
					<span>Lun - Sab</span>
					<span class="text-white">{config.openingHours.open} - {config.openingHours.close}</span>
				</li>
				<li class="flex justify-between pb-2">
					<span>Dom</span> <span class="text-white">Chiuso</span>
				</li>
			</ul>
		</div>
	</div>
	<div
		class="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 border-t border-white/10 px-6 pt-12 text-[10px] tracking-[0.2em] text-white/80 uppercase md:flex-row"
	>
		<!-- eslint-disable-next-line svelte/no-at-html-tags -->
		<p>{locale.copyright} {@html locale.attribution}</p>
		<div class="flex gap-12">
			<span>Torino</span>
			<span>P.iva {config.vatNumber}</span>
		</div>
	</div>
</footer>

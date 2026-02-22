<script lang="ts">
	import { resolve } from '$app/paths';
	import type { Locale } from '$lib/i18n';
	import GoogleTranslate from './GoogleTranslate.svelte';
	import IconToolsKitchen2 from '@tabler/icons-svelte-runes/icons/tools-kitchen-2';
	import { scrollTo } from 'svelte-scrolling';

	const { locale }: { locale: Locale['header'] } = $props();
</script>

<header
	class="fixed top-0 right-0 left-0 z-50 border-b border-primary/10 bg-white shadow-sm backdrop-blur-md"
>
	<div class="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
		<div class="flex items-center gap-2">
			<div class="">
				<IconToolsKitchen2 class="text-3xl text-primary" />
			</div>
			<a
				class="text-l notranslate cursor-pointer text-center font-serif font-bold tracking-widest text-charcoal uppercase md:text-xl"
				href={resolve('/')}
			>
				{locale.name}
			</a>
		</div>
		<nav class="hidden items-center gap-10 md:flex">
			<a
				class="text-sm font-medium text-charcoal/80 transition-colors duration-300 hover:text-primary"
				use:scrollTo={'about'}
				href="#about"
			>
				{locale.about}
			</a>
			<a
				class="text-sm font-medium text-charcoal/80 transition-colors duration-300 hover:text-primary"
				use:scrollTo={'menu'}
				href="#menu"
			>
				{locale.menu}
			</a>
			<a
				class="text-sm font-medium text-charcoal/80 transition-colors duration-300 hover:text-primary"
				use:scrollTo={'cantina'}
				href="#cantina"
			>
				{locale.cellar}
			</a>
			<a
				class="text-sm font-medium text-charcoal/80 transition-colors duration-300 hover:text-primary"
				use:scrollTo={'dovesiamo'}
				href="#dovesiamo"
			>
				{locale.whereWeAre}
			</a>
		</nav>
		<div class="flex items-center gap-6">
			<GoogleTranslate />
			<a
				class="hidden rounded-lg bg-primary px-6 py-2.5 text-sm font-bold text-white shadow-md transition-all hover:bg-primary-dark focus-visible:ring-4 focus-visible:ring-primary/60 focus-visible:ring-offset-2 md:block"
				use:scrollTo={'prenota'}
				href="#prenota"
			>
				{locale.book}
			</a>
		</div>
	</div>
</header>

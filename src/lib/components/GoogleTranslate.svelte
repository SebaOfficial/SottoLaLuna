<script lang="ts">
	import { onMount } from 'svelte';
	import IconLanguage from '@tabler/icons-svelte-runes/icons/language';

	onMount(() => {
		window.googleTranslateElementInit = () => {
			new window.google.translate.TranslateElement(
				{
					pageLanguage: 'it',
					autoDisplay: false,
				},
				'google_translate_element',
			);
		};

		const script = document.createElement('script');
		script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
		script.async = true;
		document.body.appendChild(script);
	});

	function setLanguage(lang: string) {
		const select = document.querySelector('.goog-te-combo') as HTMLSelectElement;

		if (!select) return;

		select.value = lang;
		select.dispatchEvent(new Event('change'));
	}
</script>

<svelte:head>
	<link rel="preconnect" href="https://translate.google.com" crossorigin="anonymous" />
	<link rel="preconnect" href="https://translate-pa.googleapis.com" crossorigin="anonymous" />
</svelte:head>

<div id="google_translate_element" style="display: none;"></div>

<button
	class="group flex cursor-pointer items-center gap-2 rounded-full border border-stone-200 px-3 py-1.5 text-charcoal/80 transition-colors duration-300 hover:border-primary/30 hover:text-primary"
	on:click={() => setLanguage(navigator.language.split('-')[0])}
>
	<IconLanguage size="25" />
	<span class="text-[11px] font-bold tracking-wider uppercase"> Translate </span>
</button>

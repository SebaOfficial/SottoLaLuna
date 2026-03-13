<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.png';
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';

	let { children, data } = $props();

	const locale = $derived(data.locale);
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div id="app">
	<Header locale={locale.header} />

	<main>
		{@render children()}
	</main>

	<Footer locale={locale.footer} />
</div>

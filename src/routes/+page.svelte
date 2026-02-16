<script>
	import About from '$lib/components/sections/About.svelte';
	import Cellar from '$lib/components/sections/Cellar.svelte';
	import Hero from '$lib/components/sections/Hero.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
	import Menu from '$lib/components/sections/Menu.svelte';
	import BookTable from '$lib/components/sections/BookTable.svelte';
	import WhereWeAre from '$lib/components/sections/WhereWeAre.svelte';

	const { data } = $props();
	const locale = $derived(data.locale);
</script>

<div id="app">
	<Header locale={locale.header} />

	<main>
		<Hero locale={locale.hero} />

		<About locale={locale.about} />

		<Menu locale={locale.menu} />

		<Cellar locale={locale.cellar} />

		<BookTable locale={locale.bookTable} />

		<WhereWeAre locale={locale.whereWeAre} />
	</main>

	<Footer locale={locale.footer} />
</div>

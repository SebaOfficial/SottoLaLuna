<script>
	import config from '$lib/config';
	import About from '$lib/components/sections/About.svelte';
	import Cellar from '$lib/components/sections/Cellar.svelte';
	import Hero from '$lib/components/sections/Hero.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
	import Menu from '$lib/components/sections/Menu.svelte';
	import BookTable from '$lib/components/sections/BookTable.svelte';
	import WhereWeAre from '$lib/components/sections/WhereWeAre.svelte';
	import SEO from 'svelte-seo';
	import menu from '$lib/assets/menu.pdf?url';
	import ogImage from '$lib/assets/og-image.jpg?url';

	const { data } = $props();
	const locale = $derived(data.locale);
</script>

<SEO
	title={locale.seo.title}
	description={locale.seo.description}
	canonical={config.baseUrl}
	themeColor="#b91c1c"
	openGraph={{
		type: 'restaurant.restaurant',
		title: locale.seo.title,
		description: locale.seo.description,
		url: config.baseUrl,
		images: [{ url: `${config.baseUrl}${ogImage}` }],
		site_name: 'Sotto La Luna',
		locale: 'it_IT',
	}}
	twitter={{
		card: 'summary_large_image',
		title: locale.seo.title,
		description: locale.seo.description,
		image: `${config.baseUrl}${ogImage}`,
	}}
	jsonLd={{
		'@context': 'https://schema.org',
		'@type': 'Restaurant',
		image: `${config.baseUrl}${ogImage}`,
		name: locale.seo.title,
		description: locale.seo.description,
		url: config.baseUrl,
		telephone: config.phoneNumbers.restaurant,
		servesCuisine: 'Italian',
		menu,
		priceRange: '$$',
		address: {
			'@type': 'PostalAddress',
			streetAddress: config.map.shortAddress,
			addressLocality: 'Turin',
			addressRegion: 'Piedmont',
			postalCode: '10136',
			addressCountry: 'Italy',
		},
		geo: {
			'@type': 'GeoCoordinates',
			latitude: config.map.coordinates.lat,
			longitude: config.map.coordinates.lng,
		},
		openingHoursSpecification: [
			{
				'@type': 'OpeningHoursSpecification',
				dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
				opens: config.openingHours.open,
				closes: config.openingHours.close,
			},
		],
		sameAs: [config.socials.facebook, config.socials.instagram],
		email: locale.bookTable.email,
	}}
/>

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

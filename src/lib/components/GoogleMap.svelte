<script lang="ts">
	const { mapUrl, width, height }: { mapUrl: string; width: number; height: number } = $props();
</script>

<svelte:head>
	<link rel="preconnect" href="https://www.google.com" crossorigin="anonymous" />
</svelte:head>

<iframe
	src={mapUrl}
	title="Dove Trovarci"
	{width}
	{height}
	style="border:0;"
	allowfullscreen={false}
	loading="lazy"
	referrerpolicy="no-referrer-when-downgrade"
	aria-label="Mappa Google della posizione del ristorante"
></iframe>

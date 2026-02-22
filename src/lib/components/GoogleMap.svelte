<script lang="ts">
	const { mapUrl, width, height }: { mapUrl: string; width: number; height: number } = $props();
</script>

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

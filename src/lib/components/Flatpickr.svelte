<script lang="ts">
	import { onMount } from 'svelte';
	import flatpickr from 'flatpickr';
	import 'flatpickr/dist/flatpickr.css';
	import config from '$lib/config';

	let { datetime = $bindable() }: { datetime: string } = $props();

	let picker: HTMLInputElement;

	onMount(() => {
		flatpickr(picker, {
			enableTime: true,
			dateFormat: 'Y-m-d H:i',
			minDate: 'today',
			time_24hr: true,

			// Disable Sundays
			enable: [(date) => date.getDay() !== 0],

			minTime: config.openingHours.open,
			maxTime: config.openingHours.close,

			onChange: (_, dateStr) => {
				datetime = dateStr;
			},
		});
	});
</script>

<label for="reservation-date" class="sr-only"> Data e ora </label>
<input
	bind:this={picker}
	class="w-full rounded-xl border border-stone-200 bg-stone-50 py-4 pr-4 pl-12 text-charcoal transition-all outline-none placeholder:text-stone-400 focus:border-primary"
	type="text"
	id="reservation-date"
	placeholder="Seleziona data e ora"
	required
	readonly
/>

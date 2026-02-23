<script lang="ts">
	import type { Locale } from '$lib/i18n';
	import {
		IconBook,
		IconUsers,
		IconCalendarTime,
		IconPhoneCall,
		IconMail,
	} from '@tabler/icons-svelte-runes';
	import Flatpickr from '$lib/components/Flatpickr.svelte';

	const { locale }: { locale: Locale['bookTable'] } = $props();

	const form = $state({
		datetime: '',
		guests: 2,
	});

	const formatDate = (dateString: string) => {
		const date = new Date(dateString);
		const formatter = new Intl.DateTimeFormat('it-IT', {
			weekday: 'long',
			day: 'numeric',
			month: 'long',
			year: 'numeric',
		});
		return formatter.format(date);
	};

	const onsubmit = (e: Event) => {
		e.preventDefault();
		const url = new URL(`https://wa.me/${locale.phoneNumbers.reservations.replaceAll(' ', '')}`);
		const [date, time] = form.datetime.split(' ');
		url.searchParams.set(
			'text',
			locale.messageTemplate
				.replace('{guests}', form.guests.toString())
				.replace('{date}', formatDate(date))
				.replace('{time}', time),
		);
		window.location.href = url.href;
	};
</script>

<section class="relative overflow-hidden py-32" id="prenota">
	<div class="relative z-10 mx-auto max-w-5xl px-6">
		<div class="rounded-3xl border border-primary/10 bg-white p-10 text-center shadow-2xl md:p-20">
			<div class="flex items-center justify-center">
				<IconBook class="mb-6 text-primary" size={36} />
			</div>
			<h2 class="mb-8 font-serif text-5xl text-charcoal">{locale.title}</h2>
			<p class="mx-auto mb-12 max-w-xl text-lg text-charcoal/90">
				{locale.description}
			</p>
			<form class="mx-auto mb-10 grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-3" {onsubmit}>
				<div class="group relative">
					<IconCalendarTime class="absolute top-1/2 left-4 -translate-y-1/2 text-lg text-primary" />
					<Flatpickr bind:datetime={form.datetime} />
				</div>
				<div class="group relative">
					<IconUsers class="absolute top-1/2 left-4 -translate-y-1/2 text-lg text-primary" />
					<input
						type="number"
						min="1"
						max="20"
						bind:value={form.guests}
						class="w-full appearance-none rounded-xl border border-stone-200 bg-stone-50 py-4 pr-4 pl-12 text-charcoal transition-all outline-none focus:border-primary"
						placeholder="Numero di persone"
						required
					/>
				</div>
				<button
					class="cursor-pointer rounded-xl bg-primary py-4 text-sm font-bold tracking-widest text-white uppercase shadow-lg shadow-primary/20 transition-all hover:bg-primary-dark"
					type="submit"
				>
					{locale.button}
				</button>
			</form>
			<div
				class="flex flex-col items-center justify-center gap-6 text-sm text-charcoal/80 md:flex-row"
			>
				<div class="flex items-center gap-2">
					<IconPhoneCall class="text-primary" size={20} />
					<a
						class="text-charcoal/90"
						href="tel:{locale.phoneNumbers.reservations.replaceAll(' ', '')}"
						>{locale.phoneNumbers.restaurant}</a
					>
				</div>
				<span class="hidden md:block">|</span>
				<div class="flex items-center gap-2">
					<IconMail class="text-primary" size={20} />
					<a class="text-charcoal/90" href="mailto:{locale.email}">{locale.email}</a>
				</div>
			</div>
		</div>
	</div>
</section>

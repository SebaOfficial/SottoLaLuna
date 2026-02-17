<script lang="ts">
	import type { Locale } from '$lib/i18n';
	import About from '$lib/assets/about.jpg?enhanced';
	import IconTicket from '@tabler/icons-svelte-runes/icons/ticket';

	const { locale }: { locale: Locale['about'] } = $props();
</script>

<section class="gingham-pattern relative overflow-hidden py-32" id="about">
	<div class="mx-auto grid max-w-7xl items-center gap-20 px-6 md:grid-cols-2">
		<div class="group relative">
			<div
				class="absolute -inset-4 rounded-xl border border-primary/10 bg-white/50 transition-colors duration-700 group-hover:border-primary/30"
			></div>
			<enhanced:img
				alt={locale.img.alt}
				class="relative z-10 h-150 w-full rounded-lg object-cover shadow-2xl"
				src={About}
			/>
			<div
				class="red-border absolute -right-6 -bottom-6 z-20 hidden rounded-lg bg-white p-8 shadow-xl lg:block"
			>
				<div class="mb-2 flex items-center gap-4">
					<IconTicket class="text-primary" size={24} />
					<span class="font-bold text-charcoal italic">{locale.img.card.title}</span>
				</div>
				<p class="text-sm text-charcoal/60 italic">{locale.img.card.description}</p>
			</div>
		</div>
		<div class="space-y-8">
			<div class="inline-flex items-center gap-3 text-primary">
				<span class="h-px w-8 bg-primary/50"></span>
				<span class="text-xs font-bold tracking-widest uppercase">{locale.subtitle}</span>
			</div>
			<h2 class="font-serif text-5xl leading-tight text-charcoal md:text-6xl">{locale.title}</h2>
			{#each locale.description as description}
				<p class="text-lg leading-relaxed text-charcoal/70">
					{description}
				</p>
			{/each}

			<div class="grid grid-cols-2 gap-8 pt-4">
				{#each locale.details as detail}
					<div>
						<h4 class="mb-2 font-serif text-2xl text-primary">{detail.title}</h4>
						<p class="text-sm leading-relaxed text-charcoal/50">
							{detail.description}
						</p>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>

<style>
	.gingham-pattern {
		background-color: #ffffff;
		background-image:
			linear-gradient(90deg, rgba(209, 31, 42, 0.05) 50%, transparent 50%),
			linear-gradient(rgba(209, 31, 42, 0.05) 50%, transparent 50%);
		background-size: 40px 40px;
	}
</style>

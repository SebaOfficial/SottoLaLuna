import { z } from 'zod';
import toml from 'toml';
import fs from 'fs';
import path from 'path';

const LocaleSchema = z.object({
	header: z.object({
		name: z.string(),
		about: z.string(),
		cellar: z.string(),
		menu: z.string(),
		whereWeAre: z.string(),
		book: z.string(),
		translate: z.string(),
	}),
	footer: z.object({
		name: z.string(),
		description: z.string(),
		copyright: z.string(),
		attribution: z.string().nonempty(),
		navigation: z.object({
			title: z.string(),
			backToTop: z.string(),
			about: z.string(),
			menu: z.string(),
			cellar: z.string(),
			book: z.string(),
			whereWeAre: z.string(),
		}),
		openingHours: z.object({
			title: z.string(),
		}),
		location: z.object({
			title: z.string(),
		}),
	}),
	hero: z.object({
		title: z.string(),
		subtitle: z.string(),
		description: z.string(),
		buttons: z.object({
			menu: z.string(),
			book: z.string(),
		}),
		img: z.object({
			alt: z.string(),
		}),
	}),
	about: z.object({
		title: z.string(),
		subtitle: z.string(),
		description: z.array(z.string()),
		details: z.array(
			z.object({
				title: z.string(),
				description: z.string(),
			}),
		),
		img: z.object({
			alt: z.string(),
			card: z.object({
				title: z.string(),
				description: z.array(z.string()),
			}),
		}),
	}),
	menu: z.object({
		title: z.string(),
		subtitle: z.string(),
		description: z.string(),
		button: z.string(),
		gallery: z.array(
			z.object({
				title: z.string(),
				description: z.string(),
				ingredients: z.string(),
				flag: z.string(),
				imgAlt: z.string(),
			}),
		),
	}),
	cellar: z.object({
		title: z.string(),
		subtitle: z.string(),
		description: z.string(),
	}),
	bookTable: z.object({
		title: z.string(),
		description: z.string(),
		messageTemplate: z.string(),
		email: z.email(),
		button: z.string(),
	}),
	whereWeAre: z.object({
		title: z.string(),
		subtitle: z.string(),
		address: z.string(),
		openHours: z.string(),
		takeaway: z.string(),
		deliveroo: z.string(),
		directions: z.string(),
	}),
	seo: z.object({
		title: z.string(),
		description: z.string(),
	}),
});

const translations = fs
	.readdirSync('./src/lib/i18n')
	.filter((file) => file.endsWith('.toml'))
	.map((file) => {
		const fullPath = path.join('./src/lib/i18n', file);
		const content = fs.readFileSync(fullPath, 'utf-8');
		const lang = file.replace('.toml', '');
		return {
			lang,
			file,
			data: LocaleSchema.parse(toml.parse(content)),
		};
	});

export const languages = translations.map(({ lang }) => lang);

export const locales = translations.reduce(
	(acc, { lang, data }) => {
		acc[lang] = data;
		return acc;
	},
	{} as Record<string, z.infer<typeof LocaleSchema>>,
);

export type Locale = z.infer<typeof LocaleSchema>;
export type Language = (typeof languages)[number];

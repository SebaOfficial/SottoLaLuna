import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-static';
import rehypeClasses from 'rehype-add-classes';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: { adapter: adapter() },
	preprocess: [
		mdsvex({
			rehypePlugins: [
				[
					rehypeClasses,
					{
						h1: 'text-4xl font-bold  mt-8 mb-4',
						h2: 'text-3xl font-semibold text-gray-800 mt-6 mb-3',
						h3: 'text-2xl font-semibold text-gray-700 mt-5 mb-2',
						p: 'text-base text-gray-600 leading-7 mb-4',
						ul: 'list-disc list-inside space-y-2 mb-4',
						ol: 'list-decimal list-inside space-y-2 mb-4',
						strong: 'font-bold text-gray-800',
						em: 'italic text-gray-700',
						a: 'text-blue-600 hover:text-blue-800 underline',
					},
				],
			],
		}),
	],
	extensions: ['.svelte', '.svx'],
};

export default config;

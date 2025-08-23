// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
	adapter: cloudflare({
		platformProxy: {
			enabled: true,
		},
	}),
	integrations: [
		starlight({
			title: 'RbLighting Docs',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Getting Started', slug: 'guides/getting-started' },
					],
				},
				{
					label: 'Documentation',
					autogenerate: { directory: 'docs' },
				},
			],
		}),
	],
});

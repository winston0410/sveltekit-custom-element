import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	compilerOptions: {
		customElement: true
	},
	preprocess: preprocess(),

	kit: {
		adapter: adapter()
	}
};

export default config;

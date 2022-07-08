import preprocess from 'svelte-preprocess';
import adapter from 'svelte-adapter-deno-deploy';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [
		preprocess({
			postcss: true
		})
	],
	kit: {
		adapter: adapter()
	}
};

export default config;

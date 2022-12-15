import adapter from '@sveltejs/adapter-auto'
import preprocess from 'svelte-preprocess'
import path from 'path'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		alias: {
			'@c': path.resolve('./src/components')
		}
	},
	preprocess: [
		preprocess({
			postcss: true
		})
	]
}

export default config

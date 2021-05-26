const sveltePreprocess = require('svelte-preprocess')

module.exports = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: sveltePreprocess({
    defaults: {
      script: 'typescript',
      style: 'scss'
    },
    scss: {
      prependData: `@import 'src/App.scss';`
    }})
}

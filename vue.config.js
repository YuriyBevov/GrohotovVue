// vue.config.js

/**
 * @type {import('@vue/cli-service').ProjectOptions}
 */

module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
      ? '/GrohotovVue/dist/'
      : '/',
    pages: {
        index: {
            entry: 'src/main.js',
            template: 'public/index.html'
        },
        
        cart: {
            entry: 'src/main.js',
            template: 'public/index.html'
        }
    }
}

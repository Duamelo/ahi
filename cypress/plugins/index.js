/* eslint-disable no-undef */

const path = require('path')
const { startDevServer } = require('@cypress/vite-dev-server')

// eslint-disable-next-line no-unused-vars
module.exports = (on, config) => {
  on('dev-server:start', (options) => {
    return startDevServer({
      options,
      viteConfig: {
        configFile: path.resolve(__dirname, '..', '..', 'vite.config.js'),
      },
    })
  })
}
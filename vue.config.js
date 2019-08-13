const path = require('path')

function resolve(dir) {
    return path.join(__dirname, dir)
}

module.exports = {
    publicPath: './',
    outputDir: 'dist',
    assetsDir: '',
    devServer: {
        port: 8989,
        open: true,
    },
    configureWebpack: {
        name: 'vue-template',
        resolve: {
            alias: {
                '@': resolve('src'),
                '@style': resolve('src/assets/style')
            }
        }
    },
    css: {
        loaderOptions: {
            sass: {
                data: `@import "@style/index.scss";`
            }
        }
    }
}

export default {
    mode: 'spa',
    head: {
        title: process.env.npm_package_name || '',
        meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
        ],
        link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },

    loading: { color: '#fff' },

    css: [
    ],

    plugins: [
        { src: '~/plugins/bootstrap.js' },
        { src: '~/plugins/axios.js' },
    ],

    modules: [
        'bootstrap-vue/nuxt',
        '@nuxtjs/axios'
    ],
    axios: {
    },
    env: {
        baseUrl: process.env.BASE_URL || 'localhost:3000/api/v1'
    },
    router: {
        middleware: 'route'
    },
    build: {

        extend (config, ctx) {
        }
    }
}

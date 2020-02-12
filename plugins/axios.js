import VueAxios from 'vue-axios'
import Vue from 'vue'
export default function ({ $axios, redirect, store }) {
    Vue.use(VueAxios, $axios)
    $axios.setBaseURL(process.env.baseUrl)
    $axios.onRequest(config => {
        config.headers['Access-Control-Allow-Origin'] = "*";
        console.log('Making request to ' + config.url)
    })
    $axios.onError(error => {
        const code = parseInt(error.response && error.response.status)
    })
}

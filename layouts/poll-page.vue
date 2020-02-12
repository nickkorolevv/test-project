<template lang="pug">
.container.mt-4
    .row
        .col-2
            sidebar(:items="sidebarItems")
        .col-10
            base-header
            respondents-tabs
            nuxt
    .row
        .col-12
            base-footer
</template>
<script>
import BaseHeader from '../components/layout/header.vue'
import BaseFooter from '../components/layout/footer.vue'
import Sidebar from '../components/layout/sidebar.vue'
import RespondentsTabs from '../components/respondents/tabs.vue'
export default {
    components: {
        BaseFooter,
        BaseHeader,
        Sidebar,
        RespondentsTabs
    },
    data() {
        return {
            sidebarItems: [
                { id: 1, icon: 'document-richtext', link: '/poll', title: 'Опросы' },
                { id: 2, icon: 'person', link: '/users', title: 'Пользователи' },
                { id: 3, icon: 'flag', link: '/black-list', title: 'Черные списки' },
                { id: 4, icon: 'phone', link: '/call', title: 'Кол центр' }
            ]
        }
    }
}
</script>
<style>

</style>

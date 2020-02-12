<template lang="pug">
div
    b-tabs
        b-tab(
            v-for="tab in tabs" 
            :key="tab.link" 
            :active="currentTab == tab.link" 
            :title="tab.title" 
            @click="redirectTo(tab.link)"
        )
</template>

<script>
export default {
    data() {
        return {
            tabs: [
                { id: 0, title: 'Параметры', active: false, link: 'params' },
                { id: 1, title: 'Вопросы', active: false , link: 'questions'},
                { id: 2, title: 'Логика', active: false, link: 'logics' },
                { id: 3, title: 'Условия', active: false , link: 'conditions'},
                { id: 4, title: 'Респонденты', active: false, link: 'respondents'},
            ],
            currentTab: this.$route.path.replace('/poll/', '')
        }
    },

    methods: {
        redirectTo(link) {
            this.$router.push(link)
            this.currentTab = link
        },

    },
    mounted() {
        this.$root.$on('setDefaultTab', () => {
            this.currentTab = 'params'
        })
    }

}
</script>
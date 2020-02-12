<template lang="pug">
.sidebar
    .sidebar-item.d-flex.align-items-center.flex-column(
        v-for="item in items" 
        @click="redirectTo(item.link)"
        :class="[ new RegExp(item.link).test(currentPage) ? 'active' : '']"
    )
        b-icon.h1(:icon="item.icon" style="height: 50px;")
        span {{ item.title }}
</template>

<script>
import BaseHeader from './header.vue'

export default {
    name: 'Sidebar',
    components: {
        BaseHeader,
    },
    props: {
        items: Array,
    },
    data() {
        return {
            currentPage: this.$route.path
        }
    },
    methods: {
        redirectTo(link) {
            this.currentPage = link
            this.$router.push(link)
            this.$root.$emit('setDefaultTab')
        }
    },
    mounted() {
        console.log(new RegExp(this.currentPage).test('/poll/params'))
    }
}
</script>

<style lang="scss" scoped>
.sidebar {
    &-item {
        cursor: pointer;
        &:hover {
            background: #d9eff3
        }
        &:active {
            background: #dbf5fd;
        }
    }
}
.active {
    background: #d9eff3
}
</style>
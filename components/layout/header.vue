<template lang="pug">
.header
    .search-field.d-flex.align-items-center.justify-content-between
        .d-flex(style="width: 60%")
            b-input.d-flex.flex-grow-1(v-model="search" placeholder="Поиск по системе" type="text")
            b-button.header-btn
                b-icon(icon="search")
        .d-flex.align-items-baseline
            b-icon.h2.user-icon(icon="person")
</template>

<script>
export default {
    name: 'BaseHeader',
    data() {
        return {
            search: null,
            items: [
                {
                    text: 'Admin',
                    href: '#'
                },
                {
                    text: 'Manage',
                    href: '#'
                },
                {
                    text: 'Library',
                    active: true
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.header {
    margin-bottom: 20px;
}
.user-icon {
    width: 50px;
    cursor: pointer;
}
ol /deep/ .breadcrumb {
    background-color: transparent;
}
</style>
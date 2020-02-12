<template lang="pug">
div
    .d-flex.align-items-center.mt-2(v-for="status in statuses")
        .mr-5(style="white-space: nowrap") {{ status.title }} {{ status.id }}
        b-form-select.select-input(v-model="status.status" :options="options" @input="onChange")
    b-btn.mt-2(@click="addStatus") Добавить Статус
</template>

<script>
export default {
    data() {
        return {
            statuses: [
                { id: 1, status: null, title: 'Статус' }
            ],
            options: [
                { value: 0, text: 'Активна' },
                { value: 1, text: 'Не активна' },
            ]
        }
    },
    methods: {
        addStatus() {
            this.statuses.push({
                id: this.statuses.length + 1,
                status: null,
                title: 'Статус'
            })
        },
        onChange(data) {
            this.$emit('change', this.statuses)
        }
    }
}
</script>

<style lang="scss" scoped>
.select-input {
    width: 200px;
}
</style>
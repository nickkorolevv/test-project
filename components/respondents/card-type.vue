<template lang="pug">
div
    .d-flex.align-items-center.mt-2(v-for="i in types")
        .mr-5(style="white-space: nowrap") {{ i.title }} {{ i.id }}
        b-form-select.select-input(v-model="i.type" :options="options" @input="onChange")
    b-btn.mt-2(@click="addType") Добавить Тип
</template>

<script>
export default {
    data() {
        return {
            types: [
                { id: 1, type: null, title: 'Тип' }
            ],
            options: [
                { value: 0, text: 'Gold' },
                { value: 1, text: 'Silver' },
                { value: 2, text: 'Bronze' },
            ]
        }
    },
    methods: {
        addType() {
            this.types.push({
                id: this.types.length + 1,
                type: null,
                title: 'Тип'
            })
        },
        onChange(data) {
            this.$emit('change', this.types)
        }
    }
}
</script>

<style lang="scss" scoped>
.select-input {
    width: 200px;
}
</style>
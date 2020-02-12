<template lang="pug">
.range
    .inputs.mt-2
        .d-flex.align-items-center.mt-2(v-for="range in ranges")
            label {{ range.title }} {{ range.id }}
            b-input.range-input.mx-3(v-model="range.from" placeholder="From" @change="onChange")
            b-input.range-input(v-model="range.to" placeholder="To" @change="onChange")
    b-btn.mt-2(@click="addRange") Добавить диапазон
</template>

<script>
export default {
    data() {
        return {
            ranges: [
                { id: 1, from: null, to: null, title: 'Диапазон' }
            ]
        }
    },
    methods: {
        addRange() {
            this.ranges.push({
                id: this.ranges.length + 1,
                from: null,
                to: null,
                title: 'Диапазон'
            })
        },
        onChange(data) {
            this.$emit('change', this.ranges)
        }
    }
}
</script>

<style lang="scss" scoped>
.range-input {
    width: 50px;
}
</style>
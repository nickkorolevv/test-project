<template lang="pug">
.condition.d-flex.flex-column.p-3
    .d-flex.justify-content-between.align-items-center
        .mr-5(style="white-space: nowrap") {{ item.title }} {{ item.id}}
        b-form-select(v-model="selected" :options="options")
    component(:is="modifiers[selected]" @change="onChange") 
    .d-flex.justify-content-end.mt-2
        b-btn.delete-btn(@click="deleteCondition(item.id)" variant="danger") Удалить условие

</template>

<script>
import Range from './age-range'
import Type from './card-type'
import Status from './card-status'
export default {
    components: {
        Range,
        Type,
        Status
    },
    props: {
        item: {
            type: Object,
            required: true
        },
        options: {
            type: Array, 
            required: true
        }
    },
    data() {
        return {
            selected: null,
            modifiers: {
                'AGE': 'range',
                'CARD_TYPE': 'type' ,
                'CARD_STATUS': 'status' ,
            }
        }
    },
    methods: {
        deleteCondition(id) {
            this.$store.commit('condition/removeCondition', id)
        },
        onChange(data) {
            this.$store.commit('condition/modify', { id: this.item.id, data })
        }
    }
}
</script>

<style lang="scss" scoped>
.condition {
    border: 1px solid #e6e6e6;
}
.delete-btn {
    width: 200px;
}
</style>
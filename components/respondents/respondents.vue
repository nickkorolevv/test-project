<template lang="pug">
div
    b-card
        h5 Добавить опрос
        transition-group(name="list" tag="div")
            div(v-for="i in conditions" :key="i.id")
                condition(:item="i" :options="suggests")
        .add-condition.d-flex.align-items-center.flex-column(@click="addCondition")
            b-icon.h1(icon="plus")
            span {{ addConditionTitle }}
            span.pb-2 {{ addConditionText }}
    .d-flex.justify-content-between.mt-3
        b-btn( ) протестировать опрос
        b-btn(@click="save" variant="success") Далее
</template>

<script>
import Condition from './condition.vue'
export default {
    components: {
        Condition
    },  
    data() {
        return {
            addConditionTitle: 'Нажмите, чтобы добавить новое условие выборки',
            addConditionText: 'все условия связываются между собой логическим И',
            suggests: [
                { value: 'AGE', text: 'Возраст респонедента' },
                { value: 'CARD_TYPE', text: 'Тип карты лояльности' },
                { value: 'CARD_STATUS', text: 'Статус карты лояльности' },
            ]
        }
    },
    computed: {
        conditions() {
            return this.$store.getters['condition/conditions']
        }
    },
    methods: {
        addCondition() {
            this.$store.commit('condition/addCondition', { title: 'Условие '})
        },
        save() {
            const payload = {
                ...this.$store.state.condition
            }
            this.$store.dispatch('condition/save', payload)
        }
    }
}
</script>

<style lang="scss" scoped>
.add-condition {
    border: 1px solid #70f5fa;
    cursor: pointer;
    height: 120px;
    &:hover {
        background: #c8f1f7;
    }
    &:active {
        background: #c0eff7;
    }
}
.list-item {
  display: inline-block;
  margin-right: 10px;
}
.list-enter-active, .list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to  {
  opacity: 0;
  transform: translateY(30px);
}
</style>
export default {
    addCondition(state, data) {
        state.conditions.push({
            id: state.conditions.length + 1,
            title: data.title
        })
    },
    removeCondition(state, id) {
        state.conditions.splice(state.conditions.findIndex(x => x.id == id), 1)
    },
    modify(state, payload) {
        const conditions = state.conditions
        conditions.forEach(x => {
            if (x.id == payload.id) {
                x.meta = payload.data
            }
        })
    }
}
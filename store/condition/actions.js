export default {
    async save({ commit }, data) {
        this.$axios.$post('/conditions', data)
    }
}
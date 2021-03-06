export default {
  install (Vue) {
    Vue.mixin({
      beforeRouteEnter (to, from, next) {
        next((vm) => {
          if (vm.$router) {
            vm.$router.referer = from
          }
        })
      },
      beforeRouteUpdate (to, from, next) {
        if (this.$router) {
          this.$router.referer = from
        }
        next()
      }
    })
  }
}

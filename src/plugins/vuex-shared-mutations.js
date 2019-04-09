import shareMutations from 'vuex-shared-mutations'

export default ({ store }) => {
  window.onNuxtReady(_nuxt => {
    shareMutations({
      predicate: ['setVersion']
    })(store)
  })
}

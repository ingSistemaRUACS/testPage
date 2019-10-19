export default function ({ store, redirect }) {
  if (store.getters.isAuthenticated && store.getters.isAdmin) {
    redirect('/account/myNews')
  } else if (store.getters.isAuthenticated) {
    redirect('/account')
  }
}

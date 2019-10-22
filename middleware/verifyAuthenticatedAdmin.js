export default function ({ store, redirect }) {
  if (!store.getters.isAuthenticated) {
    redirect('/login')
  } else if (store.getters.isAuthenticated && !store.getters.isAdmin) {
    redirect('/account')
  }
}

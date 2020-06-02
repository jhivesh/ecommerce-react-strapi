import Cookies from 'js-cookie'

// Defining an empty state
export const state = () => {}

// Create a mutation that set a user to your state and in a 'user' cookie
export const mutations = {
  setUser(state, user) {
    state.user = user
    Cookies.set('user', user)
  }
}
export function SET_PROMOTIONS (state, payload) {
  state.promotions = payload
}

export function SET_PRODUCTS (state, payload) {
  state.products = payload
}

export function SET_ERROR (state, payload) {
  state.error.status = payload.status
  state.error.message = payload.message
}

export function RESET_ERROR (state, payload) {
  state.error.status = 0
  state.error.message = ''
}
export function IS_FETCHING (state, payload) {
  state.isFetching = payload
}

const operators = {
  '<': (a, b) => { return a < b },
  '>': (a, b) => { return a > b }
}

export function SET_PROMOTIONS (state, payload) {
  state.promotions = payload
  state.filteredPromotions = payload
}

export function FILTER_PROMOTIONS (state, filter) {
  state.filteredPromotions = state.promotions
  if (filter.value) {
    state.filteredPromotions = state.promotions.filter(p => {
      return operators[filter.value.type](p[filter.value.field], filter.value.value)
    })
  }
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

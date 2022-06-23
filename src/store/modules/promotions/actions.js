import axios from 'axios'

export async function fetchPromotions ({ commit }) {
  try {
    commit('IS_FETCHING', true)
    commit('RESET_ERROR', true)
    const url = '/promotions'
    const { data } = await axios.get(url)
    commit('SET_PROMOTIONS', data)
  } catch (e) {
    commit('SET_ERROR', {
      message: 'Error al cargar las promociones',
      status: e.response.status
    })
  } finally {
    commit('IS_FETCHING', false)
  }
}

export async function fetchProducts ({ commit }) {
  try {
    commit('IS_FETCHING', true)
    commit('RESET_ERROR', true)
    const { data } = await axios.get('/products')
    commit('SET_PRODUCTS', data)
  } catch (e) {
    commit('SET_ERROR', {
      message: 'Error al cargar los productos',
      status: e.response.status
    })
  } finally {
    commit('IS_FETCHING', false)
  }
}

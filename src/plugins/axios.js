import { GATEWAY_BASE_URL } from '@/config'
import axios from 'axios'
export default {
  install: function () {
    axios.defaults.baseURL = GATEWAY_BASE_URL
  }
}

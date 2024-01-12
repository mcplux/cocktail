import api from '../lib/api'

export default {
  getCategories() {
    return api.get('/list.php?c=list')
  }
}

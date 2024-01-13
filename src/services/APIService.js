import api from '../lib/api'

export default {
  getCategories() {
    return api.get('/list.php?c=list')
  },
  searchRecipes({ category, name }) {
    return api.get(`/filter.php?c=${category}&i=${name}`)
  },
  searchRecipe(id) {
    return api.get(`/lookup.php?i=${id}`)
  },
}

import { reactive } from 'vue';


export const store = reactive({
  apiUrlBase: 'https://api.themoviedb.org/3/',
  apiParams: {
    api_key: '65754e4ced7fe4bf7abd766ddf5376b5',
    query: '',
    language:'it-IT'
  },
  
  search: 'search/',
  default: 'trending/all/week?',
  type: 'multi',
  movie:[], 
  tv: [],
})

// https://api.themoviedb.org/3/trending/all/{time_window}
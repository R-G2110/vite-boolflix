import { reactive } from 'vue';


export const store = reactive({
  apiUrlBase: 'https://api.themoviedb.org/3/trending/all/week?api_key=65754e4ced7fe4bf7abd766ddf5376b5',
  api_key: '65754e4ced7fe4bf7abd766ddf5376b5',
  mainList: [],
  list: [],
  movieList:[], 
  tvList: [],
  stringToSearch: '',
  isLoading: false
})

// https://api.themoviedb.org/3/trending/all/{time_window}
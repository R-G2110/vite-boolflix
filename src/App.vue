<script>

import axios from 'axios';
import { store } from './data/store';
import Header from './components/Header.vue';
import Main from './components/Main.vue';
import Footer from './components/Footer.vue';
import Card from './components/partials/Card.vue';

export default {
  name:'App',
  components: {
    Header,
    Main,
    Footer,
    Card
  },
  data() {
    return {
      store
    }
  },
  methods: {
    getApi() {
      axios.get('https://api.themoviedb.org/3/trending/all/week?api_key=65754e4ced7fe4bf7abd766ddf5376b5')
      .then(result => {
        store.mainList = result.data.results

        store.mainList.forEach( obj => {   
          if(obj.media_type ==='movie'){
            if(!store.movieList.includes(obj.id)){
              store.movieList.push(obj)
            }
          } else if(!store.tvList.includes(obj.id)){
            store.tvList.push(obj)
          }
        })
      })
      .catch(error => {
        store.mainList = []
      })
    }
  },
  computed: {
    
  },
  mounted() {
    this.getApi();

    console.log('store.mainList: '+ store.mainList.length)
    console.log('store.movieList: '+ store.movieList.length)
    console.log('store.tvList: '+ store.tvList.length)
  },
}
</script>

<template>
  <Header />
  <Main />
  <!-- <main>
		<div class="container">
			<h1>Film:</h1>
			<div class="card-movie-wrapper">
				<Card 
					v-for="movie in store.movieList"
					:key="movie.id"
					:image="`https://image.tmdb.org/t/p/w500${movie.poster_path}`"
				/>

	
			</div>
			<h1>Serie TV:</h1>
			<div class="card-tv-wrapper">
				<Card 
					
					v-for="series in store.tvList"
      		:key="series.id"
					:image="`https://image.tmdb.org/t/p/w500${series.poster_path}`"
				/>
			</div>
		</div>
	</main> -->
  <Footer />
 
</template>

<style lang="scss" >
@use './scss/main.scss';
h1 {
	padding: 10px;
}
.card-movie-wrapper,
.card-tv-wrapper {
	display: flex;
	flex-wrap: wrap;
}
</style>
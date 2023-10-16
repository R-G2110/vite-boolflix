<script>


import { store } from '../data/store';
import Card from './partials/Card.vue';
import axios from 'axios';

export default {
	name:'Main',
	components: {
		Card,
		data() {
			return {
				store,
				movieList: [],
			}
		},
	},
	methods: {
    getApi() {
      axios.get('https://api.themoviedb.org/3/trending/all/day?api_key=65754e4ced7fe4bf7abd766ddf5376b5')
      .then(result => {
        store.mainList = result.data.results

        store.mainList.forEach( obj => {   
          if(obj.media_type ==='movie'){
            this.movieList.push(obj)
          } else {
            store.tvList.push(obj)
          }
        })
      })
      .catch(error => {
        store.mainList = []
      })
    }
  },
	mounted() {
		this.getApi();
		console.log('store.mainList: '+ store.mainList.length)
    console.log('store.movieList: '+ this.movieList.length)
    console.log('store.tvList: '+ store.tvList)
	},
	
}
</script>

<template>
	<main>
		<div class="container">
			<h1>Film:</h1>
			<div class="card-movie-wrapper">
				<Card 
					v-for="(movie,index) in movieList"
					:key="index"
					:image="`https://image.tmdb.org/t/p/w500${movie.poster_path}`"
				/>

	
			</div>
			<h1>Serie TV:</h1>
			<div class="card-tv-wrapper">
				<Card 
					
					v-for="series in store.tvList"
      		:key="series.index"
					:image="`https://image.tmdb.org/t/p/w500${series.poster_path}`"
				/>
			</div>
		</div>
	</main>
	
</template>

<style lang="scss" scoped>
@use '../scss/main.scss';

h1 {
	padding: 10px;
}
.card-movie-wrapper,
.card-tv-wrapper {
	display: flex;
	flex-wrap: wrap;
}

</style>
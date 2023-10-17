<script>

import { store } from '../data/store';
import Card from './partials/Card.vue';

export default {
	name: 'Main',
	components: {
		Card
	},
	data() {
		return {
			store
		}
	},
}
</script>

<template>
	  <main>
		<div class="container">
			<h1>Film:</h1>
			<div class="card-movie-wrapper">
				<Card 
					v-for="movie in store.movieList"
					:key="movie.id"
					:image="`https://image.tmdb.org/t/p/w500${movie.poster_path}`"
					:title="movie.title"
					:origTitle="movie.original_title"
					:origLang="movie.original_language"
					:rating="movie.vote_average"
					:desc="movie.overview"
				/>
			</div>
		</div>
	</main>
</template>

<style lang="scss" scoped>
@use '../scss/main.scss'
</style>
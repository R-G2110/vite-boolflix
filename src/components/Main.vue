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
	props:{
		title: String,
		type: String
	},
}
</script>

<template>
	  <main>
		<div class="container">
			<h1>{{title}}</h1>
			<div class="card-movie-wrapper">
				<Card 
					v-for="show in store[type]"
					:key="show.id"
					:image="`https://image.tmdb.org/t/p/w500${show.poster_path}`"
					:title="show.title || show.name"
					:origTitle="show.original_title || show.original_title"
					:origLang="show.original_language"
					:rating="show.vote_average"
					:desc="show.overview"
				/>
			</div>
		</div>
	</main>
</template>

<style lang="scss" scoped>
@use '../scss/main.scss';
.container{
	margin-bottom: 100px;
}
</style>
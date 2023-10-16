<script>
import Card from './partials/Card.vue';
export default {
	name:'Main',
	components: {
		Card
	},
	methods: {
		getImagePath(img){
			return new URL(`${img}`,import.meta.url).href;
		}
	},
}
</script>

<template>
	<main>
		<div class="container">
			<h1>Film:</h1>
			<div class="card-movie-wrapper">
				<Card @searchIMG="getImagePath()" />
		
	
			</div>
			<h1>Serie TV:</h1>
			<div class="card-tv-wrapper">
				<Card />
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
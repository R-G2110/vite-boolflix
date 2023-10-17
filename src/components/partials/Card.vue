<script>
import { store } from '../../data/store';

export default {
	name: 'Card',
	data() {
		return {
			store
		}
	},
	props:{
    id: Number,
    title: String,
		origTitle: String,
		origLang: String,
		desc: String,
		rating: String,
    
    image: String,
	
  },
}
</script>

<template>
	<div class="card">
		<div class="card-image">
			<img :src="image" >
			<div class="overlay">
				<h2>{{ title }}</h2>
				<h5>{{ origTitle }}</h5>
				<p>{{ origLang }}</p>
				<p>Ratings: {{ rating }}</p>
				<p>{{ desc }}</p>

			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>

h5,
p {
	margin: 10px auto;
}

.card {
	
	width: calc(100% / 4);
	padding: 10px;
	cursor: pointer;
	.card-image {
		position: relative;
		&:hover .overlay{
			display: block;
			background-color: gray;
		}
	}
	.overlay {
		width: 100%;
		height: 100%;
		display: none;
		position: absolute;
		top: 0;
		left: 0;
		padding: 20px;
		
	}
}
</style>
<script>
import StarRating from 'vue-star-rating'

export default {
	name: 'Card',
	components: {
		StarRating
	},
	data() {
		return {
			flags: ['it','en','ko'],
		}
	},
	props:{
    item: Object
  },
	methods: {
		getImagePath(img){
			return new URL (`../../assets/img/${img}.png`, import.meta.url).href
		}
	},
}
</script>

<template>
	<div  class="card">
		<div class="card-image">
			<img v-if="item.poster_path" :src="`https://image.tmdb.org/t/p/w500${item.poster_path}`" :alt="item.title||item.name">
			<img v-else src="/img/no-image.jpg" :alt="item.title||item.name">
			
			<div class="overlay">
				<h2>{{ item.title||item.name }}</h2>
				<h5>{{ item.original_title }}</h5>
				<div v-if="flags.includes(item.original_language)" >
					<span>Lingua originale: </span>
					<img 
						class="flag"
						:src="getImagePath(item.original_language)" 
						:alt="item.original_language"
					>
				</div>
				<p v-else>Lingua originale: {{ item.original_language }}</p>
				<star-rating 
					glow="1"
					inactive-color="#7B7B7B"
          active-color="#ffd055"
      	  v-bind:star-size="21"
					:rating="(item.vote_average / 2)"
				></star-rating>
				<p>{{ item.overview }}</p>
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
		overflow: hidden;
		object-fit: cover;
		
		&:hover img {
			scale: 1.2;
			transition: all 3s;
		}
		
		&:hover .overlay {
			display: block;
			
		}
		
	}
	.overlay {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		display: none;
		background-color: rgba($color: #000000, $alpha: .6);
		padding: 20px;
		overflow: auto;
		div {
			margin-bottom: 10px;
			.flag {
				width: 21px;
				margin-left: 5px;
			}
		}
	}
}
</style>
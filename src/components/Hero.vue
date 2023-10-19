<script>


import StarRating from 'vue-star-rating'
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/css'
import 'swiper/css/effect-fade';
import { ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Navigation, Pagination, Thumbs, A11y, } from 'swiper/modules'
import { store } from '../data/store';

export default {
	data() {
		return {
			store,
			
		}
	},
  components: {
    Swiper,
    SwiperSlide,
		StarRating
  },
  setup() {
		const thumbsSwiper = ref(null);
      const setThumbsSwiper = (swiper) => {
        thumbsSwiper.value = swiper;
      };

    const onSwiper = (swiper) => {
      console.log(swiper);
    };

    const onSlideChange = () => {
      console.log('slide change');
    };
    return {
      onSwiper,
      onSlideChange,
			modules: [Autoplay, Navigation, Pagination, Thumbs, A11y],
    };
  },
	mounted() {
		console.log(store.movie)
	},
};
</script>

<template>
	<div class="container">
		<swiper
			:height="200"
			:auto-height="true"
			:autoplay="{
  		  delay: 3500,
  		  disableOnInteraction: false,
  	  }"
			:pagination="true"
			:cssMode="true"
  	  :navigation="true"
			:modules="modules" 
  	  :slides-per-view="1"
  	  :space-between="0"
  	  @swiper="onSwiper"
  	  @slideChange="onSlideChange"
  	>
  	  <swiper-slide 
				v-for="item in store.movie"
				:key="item.id"
			>
				<img :src="`https://image.tmdb.org/t/p/original${item.backdrop_path}`" :alt="item.title">	
				<div class="slide-info">
						<h1>{{ item.title || item.name}}</h1>
						<h3>{{ item.overview }}</h3>
						<h3>Ratings:</h3>
						<star-rating 
							glow="1"
							inactive-color="#fff"
  	      	  active-color="#ffd055"
  	    		  v-bind:star-size="21"
							:rating="(item.vote_average / 2)"
						></star-rating>
						<button>INIZIA A GUARDARE</button>
				</div>
				
			</swiper-slide>
		
  	</swiper>
		
	</div>
</template>

<style lang="scss" scoped>
h1,
h3 {
	margin: 10px 0;
}

.container {
	width: 100%;
	padding-top: 70px;
	margin-bottom: 550px;
	height: 700px;
	position: relative;
	color: white;

	.slide-info {
		padding: 150px 45px;
		z-index: 998;
		width: 650px;
		height: 100%;
		background-color: rgba($color: #000000, $alpha: .4);
		position: absolute;
		top: 0;
		button {
			margin: 30px auto;
			padding: 15px 50px;
			border-radius: 5px;
			border: none;
			color: white;
			font-weight: 700;
			background-color: #DB202C;
			cursor: pointer;
		}
	}
}

</style>
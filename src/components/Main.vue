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
	}
}	
</script>

<template>
	  <main>
		<div class="container-custom">
			<h1>{{ title }}</h1>
			<div class="card-movie-wrapper">
				<Card 
					v-for="item in store[type]"
					:key="item.id"
					:item="item"
				/>
			</div>
		</div>
	</main>
</template>

<style lang="scss" scoped>
@use '../scss/main.scss';
.container-custom {
	width: 90%;
	margin: 0 auto;
	margin-bottom: 100px;
	color: #C4C4C4;
}
</style>
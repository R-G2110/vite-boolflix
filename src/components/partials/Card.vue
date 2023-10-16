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
		
		
    
    image: String,
	
  },
}
</script>

<template>
	<div class="card">
		<div class="card-image">
			<img :src="image" >
		</div>
	</div>
</template>

<style lang="scss" scoped>

.card {
	width: calc(100% / 4);
	padding: 10px;
}
</style>
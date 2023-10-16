<script>
export default {
	name: 'Card',
	data() {
		return {
			
		}
	},
	props:{
    id: Number,
    name: String,
		frameType: String,
		race: String,
    desc: String,
    image: String,
		limitation:String
  },
}
</script>

<template>
	<div class="card">
		<div class="card-image">
			<img src="https://image.tmdb.org/t/p/w500/NNxYkU70HPurnNCSiCjYAmacwm.jpg" alt="">
		</div>
	</div>
</template>

<style lang="scss" scoped>

.card {
	width: calc(100% / 4);
	padding: 10px;
}
</style>
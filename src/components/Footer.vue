<script>
import Ratings from './partials/Ratings.vue';
export default {
	name:'Footer',
	components: {
		Ratings
	}
}
</script>

<template>
	<footer>
		<div class="container">
			<Ratings />
		</div>
	</footer>
</template>

<style lang="scss" scoped>
@use '../scss/main.scss';

footer {
	height: 80px;
	background-color: white;
	.container {
		text-align: center;
	}
}
</style>
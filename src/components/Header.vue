<script>

import { store } from '../data/store';

export default {
	name:'Header',
	data() {
		return {
			store
		}
	},
}
</script>

<template>
	<header>
		<div class="container-custom">
			<div class="logo">
				<img src="/img/logo-boolflix.png" alt="Logo">
			</div>
			<div class="query">
				
				<!-- Search Bar -->
				<div class="search-bar mb-3">
				  <input 
						@keyup.enter="$emit('startSearch')"
						v-model="store.apiParams.query"
						class="form-control form-control-lg" 
						type="text" 
						placeholder="Cerca" 
						aria-label=".form-control-lg example"
					>
				</div>
				<!-- /Search Bar -->

				<!-- Select -->
				<select 
					@change="$emit('startSearch')"  
					class="form-select" 
					aria-label="Default select example"
					v-model="store.type"
				>
				  <option selected value="multi">All</option>
				  <option value="movie">Film</option>
				  <option value="tv">TV Series</option>
				</select>
				<!-- /Select -->

			</div>
		</div>
	</header>
	
</template>

<style lang="scss" scoped>
@import '../../node_modules/bootstrap/scss/bootstrap.scss';
header{
	height: 80px;

	.container-custom {
		width: 95%;
		height: 100%;
		margin: 0 auto;
		display: flex;
		justify-content: space-between;
		align-items: center;
		.logo {
			width: 180px;
		}

		.query {
			padding-top: 20px;
			height: 100%;
			display: flex;
			align-content: center;
			.search-bar input{
				width: 200px;
				height: 30px;
				background-color: white;
			}
			select {
				background-color: white;
				height: 30px;
				margin-left: 10px;
			}
		}
	}
}

</style>
<script>
export default {
	name:'Header'
}
</script>

<template>
	<header>
		<div class="container">
			<div class="logo">
				<img src="/img/logo-boolflix.png" alt="Logo">
			</div>
			<div class="query">
				<!-- Search Bar -->
				<h1>search bar</h1>
				<!-- /Search Bar -->
				
				<!-- Select -->
				<h1>select</h1>
				<!-- /Select -->
			</div>
		</div>
	</header>
	
</template>

<style lang="scss" scoped>
header{
	height: 80px;

	.container {
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
			display: flex;
		}
	}
}

</style>
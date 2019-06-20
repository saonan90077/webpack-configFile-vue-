<style lang="scss">
	@import "./app.scss";
</style>

<template>
	<div id="u7power-mall">
		<Header />
		<Home />
	</div>
</template>

<script>
	import Header from "./components/header/header.vue";
	import Home from "./components/home/home.vue";
	export default {
		components: {
			Header,
			Home
		},
		data() {
			return {

			}
		}
	}
</script>
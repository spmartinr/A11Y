<template>
	<div class='container' role='contentinfo'>
		This is a test of allyfooter
	
		<modal></modal>
	</div>
</template>

<script>
	
	let modal = require('./modal.vue'); // identifies the component

	export default {
			
			props:[''], //accepts the specified prop from the parent view

			components:{modal}, // enables the component
			
			// data() { //should return something
			// 	return{

			// 	}
			// },
			
			// methods:{ //specifies functions being used in the component

			// }

	};
</script>
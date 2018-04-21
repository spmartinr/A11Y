<template>
	<div class='container' role='contentinfo'>
		This is a test of allyfooter
		<button @click='success1'>Test</button>
		<modal :success='addSuccess'></modal>
	</div>
</template>

<script>
	
	let modal = require('./modal.vue'); // identifies the component

	export default {
			
			props:[''], //accepts the specified prop from the parent view

			components:{modal}, // enables the component
			
			data() { //should return something
				return{
					addSuccess : ''
				}
			},
			
			methods:{ //specifies functions being used in the component
				success1(){
					this.addSuccess = 'btn-success';
				}
			}

	};
</script>
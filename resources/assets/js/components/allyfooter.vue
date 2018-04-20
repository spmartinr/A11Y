<template>
	<div class='container' role='contentinfo' id='app7'>
		This is a test of allyfooter
		<h5>This is a scripted vue {{ message }}</h5>
	</div>
</template>

<script>
	export default {
		var app7 = new Vue ({
			el: '#app7',
			data: {
				message: 'This explicit vue'
			}
		})
	};
</script>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="csrf-token" content="{{ csrf_token() }}">
	<title>A11Y </title>
	<link rel="stylesheet" href="{{ asset('css/app.css') }}">
</head>
<body>
	<div id="app">
		<allyheader></allyheader>
		<allyaccordion></allyaccordion>
		<allymodal></allymodal>
		<allyspinner></allyspinner>
		<allyfooter></allyfooter>
	</div>
	<script src="{{ asset('js/app.js') }}"></script>
</body>
</html>
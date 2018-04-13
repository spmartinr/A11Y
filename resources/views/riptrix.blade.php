<!DOCTYPE html>
<html lang='{{ app()->getLocale() }}'>
<head>
	<meta charset="UTF-8">
	<meta name="csrf-token" content="{{ csrf_token() }}">
	<title>A11Y </title>
	<link rel="stylesheet" href="{{ asset('css/app.css') }}">
</head>
<body>
	<div id="app" class='container'>
		<allyheader></allyheader>
			<router-view></router-view>
		<allyfooter></allyfooter>
	</div>
	<script src="{{ asset('js/app.js') }}"></script>
</body>
</html>
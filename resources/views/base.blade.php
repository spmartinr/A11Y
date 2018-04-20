<!DOCTYPE html>
<html lang='{{ app()->getLocale() }}'>
<head>
	<meta charset="UTF-8">
	<meta http-equiv='x-ua-compatible' content='ie=edge'>
	<meta name='viewport' content='width=device-width, initial-scale='1', shrink-to-fit='no'>
	<meta name="csrf-token" content="{{ csrf_token() }}">
	<!-- <meta http-equiv='Content-Security-Policy' content='default-src "self"'> -->
	<meta name='robots' content='index,follow'>
	<meta name='googlebot' content='index,follow'>
	<title>Laravel and Vue Test App</title>
	<link rel="stylesheet" href="{{ asset('css/app.css') }}">

</head>
<body>
	<div id="app" class='container-fluid'>
		<allyheader></allyheader>
		<main>
			<router-view></router-view>
		</main>
		<allyfooter></allyfooter>
	</div>
	<script src="{{ asset('js/app.js') }}"></script>
</body>
</html>
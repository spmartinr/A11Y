<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('riptrix');
});

Route::get('/{name}', function(){
	return redirect('/');
})->where('name','[A-Za-z]+');

/* This solves the redirect crash issue and redirects the user back to the base URL */
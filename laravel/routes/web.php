<?php


Route::get('/', function () {
    return view('welcome');
});

Route::get('/about.php', function () {
    return view('about');
});

Route::get('/work_1.php', function () {
    return view('work_1');
});

Route::get('/work_2.php', function () {
    return view('work_2');
});


Route::get('send','mailController@send');

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');


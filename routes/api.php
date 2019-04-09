<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->group(function () {
    
    // Routes USERS
    Route::get('/user','ApiAuthController@user')->name('app.user');
    Route::post('/logout', 'ApiAuthController@logout');
    Route::post('/refresh', 'ApiAuthController@refresh'); 
    
    //Routes EVENTS
    Route::post('/events/create', 'EventController@store')->name('events.store');
    Route::delete('/events/{event}', 'EventController@destroy')->name('events.destroy');
    Route::put('/events/{event}', 'EventController@update')->name('events.update');
    Route::put('/events/{event}/inscription', 'EventController@inscription')->name('events.inscription');
    Route::delete('/events/{event}/desinscription','EventController@desinscription')->name('events.desinscription');
});

// Routes USERS
Route::post('/register','Auth\RegisterController@register');
Route::post('/login','ApiAuthController@login')->name('events.login');

// Routes EVENTS
Route::get('/events', 'EventController@index')->name('events.index');
Route::get('/events/{event}', 'EventController@show')->name('events.show');
Route::get('/events/{offset}/{limit}', 'EventController@pastEvent')->name('events.pastevent');
Route::get('/events/search/{offset}/{limit}', 'EventController@search')->name('events.search');
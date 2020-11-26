<?php

use Illuminate\Support\Facades\Route;

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
    return view('welcome');
});

Route::get('/bookingcustomer', 'JoinTableController@joinBookingCustomer')->name('getalldata');
// Route::post('/bookingcustomerfilter', 'JoinTableController@joinBookingCustomer');
Route::resource('contact', 'ContactController');

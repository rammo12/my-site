<?php

use Illuminate\Support\Facades\Route;
// use App\Http\Controllers\TestController;
// use App\Http\Controllers\HomeController;
use App\Http\Controllers\CatController;

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

// Route::get('/', function () {
//     return view('welcome');
// }); 

// Route::get('/test', [TestController::class, 'testShow'] );

// Route::get('/index', [HomeController::class, 'homeShow'] );

Route::get('/add_cat_show', [CatController::class, 'show'] );
Route::post('/add_cat_insert', [CatController::class, 'add'] );
Route::get('/update_id/{id}', [CatController::class, 'showID'] );
Route::post('/update', [CatController::class, 'updateID'] );

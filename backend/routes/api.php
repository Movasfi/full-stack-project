<?php

use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

Route::middleware(['auth:sanctum', 'second'])->group(function () {

    // create a user
    Route::post('user', [UserController::class, 'store']);

    // get all users
    Route::get('user', [UserController::class, 'index']);

    // get user by id
    Route::get('user/{user}', [UserController::class, 'show']);

    // update user by id
    Route::put('user/{user}', [UserController::class, 'update']);

    // delete user by id
    Route::delete('user/{user}', [UserController::class, 'destroy']);

});

// signup
Route::post('signup', [UserController::class, 'signup']);

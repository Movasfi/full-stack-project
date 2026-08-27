<?php

use App\Http\Controllers\TasksController;
use App\Http\Controllers\UserController;
use App\Models\Tasks;
use App\Models\User;
use Illuminate\Support\Facades\Route;

// signup
Route::post('signup', [UserController::class, 'signup']);

Route::middleware(['auth:sanctum'])->group(function () {

    // create a user
    Route::post('user', [UserController::class, 'store'])->middleware('can:create,' . User::class);;

    // get all users
    Route::get('user', [UserController::class, 'index'])->middleware('can:viewAny,' . User::class);

    // get user by id
    Route::get('user/{user}', [UserController::class, 'show'])->middleware('can:view,user');

    Route::get('me', [UserController::class, 'show']);

    // update user by id
    Route::put('user/{user}', [UserController::class, 'update'])->middleware('can:update,user');

    // delete user by id
    Route::delete('user/{user}', [UserController::class, 'destroy'])->middleware('can:delete,user');

    Route::post('task', [TasksController::class, 'store'])->middleware('can:create,' . Tasks::class);
    Route::get('task', [TasksController::class, 'index'])->middleware('can:viewAny,' . Tasks::class);
    Route::get('task/{task}', [TasksController::class, 'show'])->middleware('can:view,task');
    Route::put('task/{task}', [TasksController::class, 'update'])->middleware('can:update,task');
    Route::delete('task/{task}', [TasksController::class, 'destroy'])->middleware('can:delete,task');

});

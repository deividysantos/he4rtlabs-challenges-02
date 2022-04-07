<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\FeatureController;
use App\Http\Controllers\Project\ProjectController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::middleware('auth:sanctum')->group(function (){
    Route::get('/user', function (Request $request) {
        return $request->user();
    });

});

Route::post('/users', [UserController::class, 'create'])
    ->name('user.create');

Route::post('/auth/login', [AuthController::class, 'login'])
    ->name('login');

Route::middleware('auth:sanctum')->group(function(){
    Route::post('logout', [AuthController::class, 'logout'])
        ->name('logout');

    Route::prefix('/user/projects')->group(function (){

        Route::get('/{id}', [ProjectController::class, 'getProject'])
            ->name('project.get');

        Route::get('/{id}/features', [ProjectController::class, 'projectWithFeatures'])
            ->name('project.features');

        Route::get('/', [ProjectController::class, 'all'])
            ->name('project.all');

        Route::post('/', [ProjectController::class, 'create'])
            ->name('project.create');

        Route::delete('/{id}', [ProjectController::class, 'delete'])
            ->name('project.delete');

        Route::put('/{id}', [ProjectController::class, 'edit'])
            ->name('project.edit');

        Route::post('/{id}/features', [FeatureController::class, 'create'])
            ->name('feature.create');

        Route::delete('/{id}/features/{id}', [FeatureController::class, 'delete'])
            ->name('feature.delete');
    });
});

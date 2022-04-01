<?php

namespace App\Http\Controllers;

use App\Http\Requests\UserCreateRequest;
use App\Models\User;
use Illuminate\Http\JsonResponse;

class UserController extends Controller
{
    public function create(UserCreateRequest $request): JsonResponse
    {
        $user = User::query()->create($request->validationData());

        $token = $user->createToken('user');

        return response()->json([
            'message' => 'user created successfully',
            'data' => [
                'name' => $user->name,
                'email' => $user->email
            ],
            'token' => $token
        ],  201);
    }
}

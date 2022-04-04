<?php

namespace App\Http\Controllers;

use App\Http\Requests\UserCreateRequest;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    public function create(UserCreateRequest $request): JsonResponse
    {
        $credentials = $request->validationData();

        $credentials['password'] = Hash::make($credentials['password']);

        $user = User::query()->create($credentials);

        return response()->json([
            'message' => 'user created successfully',
            'data' => [
                'name' => $user->name,
                'email' => $user->email
            ]
        ],  201);
    }
}

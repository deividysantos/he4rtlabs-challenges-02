<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginRequest;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function login(LoginRequest $request): JsonResponse
    {
        if( !Auth::attempt($request->only(['email', 'password'])))
            return response()->json([
                'message' => 'wrong credentials'
            ], 400);

        return response()->json([
            'message' => 'user logged successfully',
            'token' => Auth::user()->createToken('user')->plainTextToken
        ]);
    }

    public function logout(): JsonResponse
    {
        Auth::user()->tokens()->delete();

        return response()->json([], 204);
    }
}

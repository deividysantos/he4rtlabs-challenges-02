<?php

namespace App\Http\Controllers;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function login(Request $request): JsonResponse
    {
        $credentials = $request->validate([
            'email' => ['required', 'email', 'string', 'max:255',],
            'password' => ['required', 'string', 'min:8', 'max:255']
        ]);

        if( !Auth::attempt($credentials))
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

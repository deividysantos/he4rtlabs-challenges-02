<?php

namespace App\Http\Controllers;

use App\Models\Feature;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class FeatureController extends Controller
{
    public function create(Request $request): JsonResponse
    {
        $request->validate([
            'name' => ['required', 'string', 'max:55'],
            'devHours' => ['required', 'numeric'],
            'testHours' => ['required', 'numeric'],
        ]);

        Feature::query()->create([
            'name' => $request['name'],
            'devHours' => $request['devHours'],
            'testHours' => $request['testHours'],
            'user_id' => Auth::id()
        ]);

        return response()->json([
            'message' => 'Feature created successfully!'
        ], 201);
    }

    public function delete(int $featureId)
    {
        $feature = Feature::query()->find($featureId);

        $this->authorize('belong to', $feature->project);

        $feature->delete();
    }
}

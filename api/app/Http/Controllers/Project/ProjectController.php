<?php

namespace App\Http\Controllers\Project;

use App\Http\Controllers\Controller;
use App\Models\Project;
use App\Repositories\ProjectRepository;
use App\Http\Requests\Project\ProjectCreateRequest;
use Illuminate\Http\JsonResponse;

class ProjectController extends Controller
{
    public function __construct(
        private ProjectRepository $repository
    ) {}

    public function project(int $id): JsonResponse
    {
        return response()->json($this->repository->project($id));
    }

    public function all(): JsonResponse
    {
        return response()->json($this->repository->getAll());
    }

    public function create(ProjectCreateRequest $request)
    {
        $this->repository->create( $request->validated() );
    }
}



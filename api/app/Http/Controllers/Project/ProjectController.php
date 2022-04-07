<?php

namespace App\Http\Controllers\Project;

use App\Http\Controllers\Controller;
use App\Repositories\ProjectRepository;
use App\Http\Requests\Project\ProjectCreateRequest;
use Illuminate\Http\JsonResponse;

class ProjectController extends Controller
{
    public function __construct(
        private ProjectRepository $repository
    ) {}

    public function getProject(int $id): JsonResponse
    {
        return response()->json($this->repository->getById($id));
    }

    public function projectWithFeatures(int $id): JsonResponse
    {
        return response()->json($this->repository->getByIdWithFeatures($id));
    }

    public function all(): JsonResponse
    {
        return response()->json($this->repository->getAll());
    }

    public function create(ProjectCreateRequest $request)
    {
        $this->repository->create( $request->validated() );
    }

    public function delete(int $id)
    {
        $project = $this->repository->getById($id);

        $this->authorize('belongTo', $project);

        $project->delete();
    }

    public function edit(int $id, ProjectCreateRequest $request)
    {
        $project = $this->repository->getById($id);

        $this->authorize('belongTo', $project);

        $project->name = $request['name'];
        $project->client = $request['client'];
        $project->price = $request['price'];

        $project->save();

        return response('', 200);
    }
}



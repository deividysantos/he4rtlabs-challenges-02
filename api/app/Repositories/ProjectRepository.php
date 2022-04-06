<?php

namespace App\Repositories;

use App\Models\Project;
use Illuminate\Support\Facades\Auth;

class ProjectRepository
{
    public function __construct(
      private Project $project
    ) {}

    public function project(int $id)
    {
        return $this->project->with('features')->find($id);
    }

    public function getAll()
{
    return $this->project->where('user_id', Auth::id())->get();
}

    public function create(array $payload)
    {
        Auth::user()->projects()->create($payload);
        //Todo: send mail to user about project created
    }
}

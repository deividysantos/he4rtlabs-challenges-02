<?php

namespace App\Policies;

use App\Models\Project;
use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;
use Illuminate\Auth\Access\Response;

class ProjectPolicy
{
    use HandlesAuthorization;

    public function delete(User $user, Project $project)
    {
        return $user->id == $project->user_id
            ? Response::allow()
            : Response::deny('This project dont belong to you!');
    }
}

<?php

namespace Tests\Feature\app\Http\Controllers;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class UserControllerTest extends TestCase
{
    use RefreshDatabase;

    public function test_should_be_able_register_a_user()
    {
        $response = $this->withHeaders(['Accept' => 'application/json'])
            ->post(Route('user.create'), [
                'name' => 'test',
                'email' => 'test@example.com',
                'password' => 'password'
            ]);

        $response->assertStatus(201);
        $response->assertJsonStructure([
            'message',
            'data' => [
                'name',
                'email',
            ],
            'token',
        ]);
    }

    public function test_data_should_be_required()
    {
        $response = $this->withHeaders(['Accept' => 'application/json'])
            ->post(Route('user.create'), []);

        $response->assertStatus(422);
    }

    public function test_email_should_be_valid_email()
    {
        $user = [
            'name' => 'test',
            'email' => 'test.email',
            'password' => 'password'
        ];

        $response = $this->withHeaders(['Accept' => 'application/json'])
            ->post(Route('user.create'), $user);

        $response->assertStatus(422);
    }

}

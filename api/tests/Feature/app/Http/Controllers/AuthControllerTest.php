<?php

namespace Tests\Feature;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class AuthControllerTest extends TestCase
{
    use RefreshDatabase;

    public function test_should_be_able_make_login()
    {
        $user = User::factory()->create();

        $response = $this->withHeaders(['Accept' => 'application/json'])
            ->post(Route('login'), [
               'email' => $user->email,
               'password' => 'password'
            ]);

        $response->assertStatus(200);
        $response->assertJsonStructure([
            'message',
            'token'
        ]);
    }

    public function test_should_not_able_make_login_without_data()
    {
        $response = $this->withHeaders(['Accept' => 'application/json'])
            ->post(Route('login'), []);

        $response->assertStatus(422);
    }

    public function test_should_not_able_make_login_without_wrong_data()
    {
        $user = User::factory()->create();

        $response = $this->withHeaders(['Accept' => 'application/json'])
            ->post(Route('login'), [
                'email' => $user->email,
                'password' => 'wrong_password'
            ]);

        $response->assertStatus(400);
        $response->assertExactJson([
           'message' => 'wrong credentials'
        ]);
    }

    public function test_should_be_able_make_logout()
    {
        $user = User::factory()->create();

        $response = $this->withHeaders(['Accept' => 'application/json'])
            ->post(Route('login'), [
                'email' => $user->email,
                'password' => 'password'
            ]);

        $response = $this->withHeaders(['Accept' => 'application/json', ''])
            ->withToken($response['token'])
            ->post(Route('logout'));

        $response->assertStatus(204);
    }

    public function test_should_not_be_able_make_logout_without_login()
    {
        $response = $this->withHeaders(['Accept' => 'application/json', ''])
            ->post(Route('logout'));

        $response->assertStatus(401);
    }
}

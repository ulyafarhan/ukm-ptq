<?php

namespace Tests\Feature;

// use Illuminate\Foundation\Testing\RefreshDatabase; // Baris ini mungkin sudah ada
use Illuminate\Foundation\Testing\RefreshDatabase; // Tambahkan ini jika belum ada
use Tests\TestCase;

class ExampleTest extends TestCase
{
    use RefreshDatabase; // Tambahkan baris ini

    /**
     * A basic test example.
     */
    public function test_the_application_returns_a_successful_response(): void
    {
        $response = $this->get('/');

        $response->assertStatus(200);
    }
}
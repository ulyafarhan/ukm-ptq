<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use App\Models\User;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::updateOrCreate(
            ['email' => 'admin@farhan.com'], 
            [
                'name' => 'Admin Farhan',
                'password' => Hash::make('12345678'),
            ]
        );
    }

    
}

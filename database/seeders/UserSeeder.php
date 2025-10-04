<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    public function run(): void
    {
        // 1. Super Admin Utama
        User::create([
            'name' => 'Admin PTQ',
            'email' => 'admin@ptq.com',
            'password' => Hash::make('password'),
        ]);

        // 2. Ketua Umum
        User::create([
            'name' => 'Muhammad Zulfan',
            'email' => 'ketua@ptq.com',
            'password' => Hash::make('password'),
        ]);

        // 3. Sekretaris Umum
        User::create([
            'name' => 'Aisyah Humaira',
            'email' => 'sekretaris@ptq.com',
            'password' => Hash::make('password'),
        ]);

        // 4. Bendahara Umum
        User::create([
            'name' => 'Fatimah Az-Zahra',
            'email' => 'bendahara@ptq.com',
            'password' => Hash::make('password'),
        ]);

        // 5. Anggota biasa (minimal 10)
        User::factory(15)->create();
    }
}
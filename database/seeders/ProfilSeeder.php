<?php

namespace Database\Seeders;

use App\Models\Profil;
use App\Models\User;
use Illuminate\Database\Seeder;

class ProfilSeeder extends Seeder
{
    public function run(): void
    {
        $users = User::all();

        foreach ($users as $user) {
            // Perbaikan Final: Menggunakan kolom yang benar-benar ada di tabel Anda
            Profil::create([
                'user_id' => $user->id,
                'nim' => '2001' . fake()->unique()->numerify('#####'),
                'angkatan' => fake()->randomElement(['2022', '2023', '2024', '2025']),
                'jabatan' => fake()->randomElement(['Anggota Aktif', 'Staff Departemen', 'Koordinator Divisi', null]),
                'nomor_telepon' => fake()->phoneNumber(),
                'alamat' => fake()->address(),
            ]);
        }
    }
}
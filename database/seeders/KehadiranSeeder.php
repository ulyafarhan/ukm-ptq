<?php

namespace Database\Seeders;

use App\Models\Agenda;
use App\Models\Kehadiran;
use App\Models\User;
use Illuminate\Database\Seeder;

class KehadiranSeeder extends Seeder
{
    public function run(): void
    {
        $agendas = Agenda::where('waktu_mulai', '<', now())->get(); // Hanya untuk agenda lampau
        $users = User::all();

        foreach ($agendas as $agenda) {
            // Ambil 10-15 anggota secara acak untuk hadir
            $peserta = $users->random(rand(10, 15));
            foreach ($peserta as $user) {
                Kehadiran::create([
                    'agenda_id' => $agenda->id,
                    'user_id' => $user->id,
                    'status' => fake()->randomElement(['Hadir', 'Izin']),
                ]);
            }
        }
    }
}
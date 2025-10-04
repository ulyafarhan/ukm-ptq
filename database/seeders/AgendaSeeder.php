<?php

namespace Database\Seeders;

use App\Models\Agenda;
use Illuminate\Database\Seeder;

class AgendaSeeder extends Seeder
{
    public function run(): void
    {
        // 5 Agenda Akan Datang
        for ($i = 0; $i < 5; $i++) {
            $tanggal = now()->addDays(rand(5, 60));
            Agenda::create([
                'nama_kegiatan' => fake()->sentence(4),
                'deskripsi' => fake()->paragraph(3),
                'lokasi' => fake()->randomElement(['Aula Cut Meutia', 'Gedung Rektorat', 'Mushalla Al-Ilm', 'Ruang Rapat A', 'Online via Zoom']),
                'waktu_mulai' => $tanggal,
                'waktu_selesai' => $tanggal->copy()->addHours(rand(1, 3)),
            ]);
        }

        // 10 Agenda Lampau (Arsip)
        for ($i = 0; $i < 10; $i++) {
            $tanggal = now()->subDays(rand(5, 365));
            Agenda::create([
                'nama_kegiatan' => fake()->sentence(4),
                'deskripsi' => fake()->paragraph(3),
                'lokasi' => fake()->randomElement(['Aula Cut Meutia', 'Gedung Rektorat', 'Mushalla Al-Ilm', 'Ruang Rapat A', 'Online via Zoom']),
                'waktu_mulai' => $tanggal,
                'waktu_selesai' => $tanggal->copy()->addHours(rand(1, 3)),
            ]);
        }
    }
}
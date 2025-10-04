<?php

namespace Database\Seeders;

use App\Models\Agenda;
use Illuminate\Database\Seeder;

class AgendaSeeder extends Seeder
{
    public function run(): void
    {
        // Perbaikan: Gunakan 'waktu_mulai' dan 'waktu_selesai'
        Agenda::create([
            'nama_kegiatan' => 'Rapat Akbar Persiapan Pelantikan',
            'deskripsi' => 'Rapat koordinasi final untuk seluruh panitia dan pengurus.',
            'lokasi' => 'Aula Gedung A, Kampus Utama',
            'waktu_mulai' => now()->addDays(7),
            'waktu_selesai' => now()->addDays(7)->addHours(2),
        ]);

        Agenda::create([
            'nama_kegiatan' => 'Kajian Rutin Pekanan: Tafsir Ayat Pilihan',
            'deskripsi' => 'Kajian mingguan untuk memperdalam pemahaman Al-Qur\'an.',
            'lokasi' => 'Mushalla Al-Ilm',
            'waktu_mulai' => now()->addDays(10),
            'waktu_selesai' => now()->addDays(10)->addHours(1),
        ]);
    }
}
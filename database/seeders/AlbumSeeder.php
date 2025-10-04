<?php

namespace Database\Seeders;

use App\Models\Album;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class AlbumSeeder extends Seeder
{
    public function run(): void
    {
        $albums = [
            'Musabaqah Tahunan UKM PTQ 2025',
            'Pelantikan Pengurus Baru Periode 2025-2026',
            'Kajian Akbar & Buka Puasa Bersama',
            'Kegiatan Bakti Sosial di Panti Asuhan',
            'Studi Banding ke UKM Qur\'ani Universitas Tetangga',
            'Momen Kebersamaan Rapat Kerja',
            'Lomba MTQ Tingkat Nasional di Jakarta',
            'Syiar Ramadhan di Kampus',
            'Dokumentasi Latihan Rutin Tilawah',
            'Wisuda Anggota & Pengurus UKM PTQ',
        ];

        foreach ($albums as $judul) {
            // Perbaikan: Menggunakan 'judul' sesuai dengan file migrasi
            Album::create([
                'judul' => $judul,
                'slug' => Str::slug($judul),
                'deskripsi' => 'Dokumentasi lengkap ' . strtolower($judul) . '.',
            ]);
        }
    }
}
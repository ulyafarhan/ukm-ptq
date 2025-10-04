<?php

namespace Database\Seeders;

use App\Models\Departemen;
use App\Models\Periode;
use Illuminate\Database\Seeder;

class PeriodeSeeder extends Seeder
{
    public function run(): void
    {
        // Periode Aktif
        $periodeAktif = Periode::create([
            'nama' => '2025-2026 "Generasi Qur\'ani Inovatif"',
            'tanggal_mulai' => '2025-01-01',
            'tanggal_selesai' => '2026-12-31',
            'is_active' => true,
        ]);

        $departemens = [
            ['nama' => 'Pengembangan Tilawah', 'deskripsi' => 'Fokus pada seni melantunkan Al-Qur\'an.'],
            ['nama' => 'Tahfidz Al-Qur\'an', 'deskripsi' => 'Membina para penghafal Al-Qur\'an.'],
            ['nama' => 'Syiar dan Dakwah', 'deskripsi' => 'Mengelola kegiatan dakwah dan kajian keislaman.'],
            ['nama' => 'Media dan Informasi', 'deskripsi' => 'Publikasi dan dokumentasi seluruh kegiatan UKM.'],
            ['nama' => 'Kaderisasi', 'deskripsi' => 'Pembinaan dan pengembangan potensi anggota.'],
            ['nama' => 'Dana dan Usaha', 'deskripsi' => 'Mengelola unit usaha dan keuangan mandiri UKM.'],
            ['nama' => 'Hubungan Masyarakat', 'deskripsi' => 'Menjalin relasi dengan pihak eksternal.'],
        ];

        foreach ($departemens as $dept) {
            Departemen::create([
                'periode_id' => $periodeAktif->id,
                'nama' => $dept['nama'],
                'deskripsi' => $dept['deskripsi'],
            ]);
        }

        // Periode Tidak Aktif (Arsip)
        $periodeLama = Periode::create([
            'nama' => '2024-2025 "Harmoni Generasi Emas"',
            'tanggal_mulai' => '2024-01-01',
            'tanggal_selesai' => '2024-12-31',
            'is_active' => false,
        ]);
        
        // Departemen untuk periode lama (opsional)
        Departemen::create([
            'periode_id' => $periodeLama->id,
            'nama' => 'Pengembangan Organisasi',
            'deskripsi' => 'Departemen lama yang sudah dilebur.',
        ]);
    }
}
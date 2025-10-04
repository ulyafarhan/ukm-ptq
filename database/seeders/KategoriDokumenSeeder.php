<?php

namespace Database\Seeders;

use App\Models\KategoriDokumen;
use Illuminate\Database\Seeder;

class KategoriDokumenSeeder extends Seeder
{
    public function run(): void
    {
        KategoriDokumen::create(['nama' => 'Surat Masuk']);
        KategoriDokumen::create(['nama' => 'Surat Keluar']);
        KategoriDokumen::create(['nama' => 'Proposal Kegiatan']);
        KategoriDokumen::create(['nama' => 'Laporan Pertanggungjawaban (LPJ)']);
        KategoriDokumen::create(['nama' => 'Arsip Penting Lainnya']);
    }
}
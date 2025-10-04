<?php

namespace Database\Seeders;

use App\Models\KategoriArtikel;
use Illuminate\Database\Seeder;

class KategoriArtikelSeeder extends Seeder
{
    public function run(): void
    {
        KategoriArtikel::create(['nama' => 'Berita Utama']);
        KategoriArtikel::create(['nama' => 'Prestasi & Apresiasi']);
        KategoriArtikel::create(['nama' => 'Kajian Ilmiah']);
        KategoriArtikel::create(['nama' => 'Opini & Esai Anggota']);
        KategoriArtikel::create(['nama' => 'Dokumentasi Kegiatan']);
        KategoriArtikel::create(['nama' => 'Informasi Lomba']);
    }
}
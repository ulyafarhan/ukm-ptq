<?php

namespace Database\Seeders;

use App\Models\KategoriArtikel;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class KategoriArtikelSeeder extends Seeder
{
    public function run(): void
    {
        KategoriArtikel::create(['nama' => 'Berita UKM']);
        KategoriArtikel::create(['nama' => 'Prestasi']);
        KategoriArtikel::create(['nama' => 'Kajian Ilmiah']);
    }
}
<?php

namespace Database\Seeders;

use App\Models\Artikel;
use App\Models\KategoriArtikel;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class ArtikelSeeder extends Seeder
{
    public function run(): void
    {
        $users = User::all();
        $kategoris = KategoriArtikel::all();

        for ($i = 0; $i < 15; $i++) {
            $judul = fake()->unique()->sentence(rand(5, 10));
            Artikel::create([
                'kategori_artikel_id' => $kategoris->random()->id,
                'user_id' => $users->random()->id,
                'judul' => $judul,
                'slug' => Str::slug($judul),
                'isi' => fake()->paragraphs(rand(10, 20), true),
                'created_at' => fake()->dateTimeBetween('-1 year', 'now'),
            ]);
        }
    }
}
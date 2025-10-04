<?php

namespace Database\Seeders;

use App\Models\Dokumen;
use App\Models\KategoriDokumen;
use App\Models\User;
use Illuminate\Database\Seeder;

class DokumenSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $users = User::all();
        $kategoris = KategoriDokumen::all();
        
        for ($i = 0; $i < 12; $i++) {
            Dokumen::create([
                'kategori_dokumen_id' => $kategoris->random()->id,
                'user_id' => $users->random()->id,
                'judul' => 'Dokumen Penting ' . fake()->words(3, true),
                'nomor_dokumen' => 'DOC-' . fake()->unique()->numerify('####-#####'),
                'deskripsi' => fake()->sentence(),
                'tanggal_dokumen' => fake()->dateTimeBetween('-2 years', 'now'),
            ]);
        }
    }
}
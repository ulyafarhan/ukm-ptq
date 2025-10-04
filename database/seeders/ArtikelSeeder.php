<?php

namespace Database\Seeders;

use App\Models\Artikel;
use App\Models\KategoriArtikel;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class ArtikelSeeder extends Seeder
{
    public function run(): void
    {
        $user = User::first();
        $kategori = KategoriArtikel::first();
        $judul = 'UKM PTQ UNIMAL Sukses Gelar Acara Tahunan Musabaqah';

        Artikel::create([
            'kategori_artikel_id' => $kategori->id,
            'user_id' => $user->id,
            'judul' => $judul,
            'slug' => Str::slug($judul),
            'isi' => 'Acara musabaqah tahunan yang diselenggarakan oleh UKM PTQ Universitas Malikussaleh berlangsung dengan meriah dan sukses. Dihadiri oleh ratusan peserta dari berbagai fakultas, acara ini menjadi ajang untuk mengasah bakat dan mempererat tali silaturahmi antar mahasiswa dalam semangat Qur\'ani.',
        ]);

        Artikel::create([
            'kategori_artikel_id' => KategoriArtikel::skip(1)->first()->id,
            'user_id' => $user->id,
            'judul' => 'Mahasiswa Binaan UKM PTQ Raih Juara 1 MTQ Tingkat Nasional',
            'slug' => Str::slug('Mahasiswa Binaan UKM PTQ Raih Juara 1 MTQ Tingkat Nasional'),
            'isi' => 'Sebuah kebanggaan bagi Universitas Malikussaleh, salah satu mahasiswa binaan UKM PTQ berhasil meraih predikat juara pertama dalam ajang Musabaqah Tilawatil Quran (MTQ) tingkat nasional yang diselenggarakan di Jakarta. Prestasi ini membuktikan kualitas pembinaan yang ada di UKM PTQ.',
        ]);
    }
}
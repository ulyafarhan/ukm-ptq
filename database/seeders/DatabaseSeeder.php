<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        // 1. Core & Struktur Utama
        $this->call(UserSeeder::class);
        $this->call(ProfilSeeder::class);
        $this->call(PeriodeSeeder::class);
        // $this->call(PengurusSeeder::class); // Aktifkan jika model Pengurus sudah dibuat

        // 2. Konten & Kegiatan
        $this->call(KategoriArtikelSeeder::class);
        $this->call(ArtikelSeeder::class);
        $this->call(AgendaSeeder::class);
        $this->call(KehadiranSeeder::class);
        $this->call(AlbumSeeder::class);
        
        // 3. Keuangan & Toko
        $this->call(KasSeeder::class);
        $this->call(KategoriTransaksiSeeder::class);
        $this->call(TransaksiSeeder::class);
        $this->call(ProdukSeeder::class);
        $this->call(PesananSeeder::class);

        // 4. Manajemen Dokumen
        $this->call(KategoriDokumenSeeder::class);
        $this->call(DokumenSeeder::class);
    }
}
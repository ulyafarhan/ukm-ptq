<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        // Panggil seeder yang sudah ada (User dan Peran)
        $this->call(UserSeeder::class);
        $this->call(PeranDanHakAksesSeeder::class);

        // Panggil seeder baru
        $this->call([
            KasSeeder::class,
            KategoriTransaksiSeeder::class,
            TransaksiSeeder::class,
            ProdukSeeder::class,
            PesananSeeder::class,
        ]);
    }
}
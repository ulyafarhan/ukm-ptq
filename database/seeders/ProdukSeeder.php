<?php

namespace Database\Seeders;

use App\Models\Produk;
use Illuminate\Database\Seeder;

class ProdukSeeder extends Seeder
{
    public function run(): void
    {
        Produk::create([
            'nama' => 'Baju PDH UKM PTQ',
            'deskripsi' => 'Baju Pakaian Dinas Harian resmi UKM PTQ UNIMAL.',
            'harga' => 125000,
            'stok' => 50,
            'varian' => json_encode(['Ukuran' => 'S, M, L, XL', 'Lengan' => 'Panjang, Pendek']),
        ]);

        Produk::create([
            'nama' => 'Gantungan Kunci Logo PTQ',
            'deskripsi' => 'Gantungan kunci akrilik dengan logo UKM PTQ.',
            'harga' => 15000,
            'stok' => 100,
            'varian' => null,
        ]);
    }
}
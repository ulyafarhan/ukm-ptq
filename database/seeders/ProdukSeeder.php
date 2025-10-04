<?php

namespace Database\Seeders;

use App\Models\Produk;
use Illuminate\Database\Seeder;

class ProdukSeeder extends Seeder
{
    public function run(): void
    {
        $products = [
            ['nama' => 'Baju PDH UKM PTQ Exclusive', 'harga' => 135000, 'stok' => 50],
            ['nama' => 'Gantungan Kunci Akrilik Logo PTQ', 'harga' => 15000, 'stok' => 200],
            ['nama' => 'Tote Bag "Generasi Qur\'ani"', 'harga' => 45000, 'stok' => 75],
            ['nama' => 'Buku Muroja\'ah Saku', 'harga' => 25000, 'stok' => 150],
            ['nama' => 'Stiker Set Dakwah (Isi 10)', 'harga' => 10000, 'stok' => 300],
            ['nama' => 'Pin Kaligrafi Emas', 'harga' => 20000, 'stok' => 100],
            ['nama' => 'Jilbab Syar\'i Logo PTQ (Wanita)', 'harga' => 85000, 'stok' => 40],
            ['nama' => 'Peci Rajut (Pria)', 'harga' => 30000, 'stok' => 60],
            ['nama' => 'Al-Qur\'an Hafalan A5', 'harga' => 95000, 'stok' => 25],
            ['nama' => 'Botol Minum Tumbler UKM PTQ', 'harga' => 55000, 'stok' => 50],
        ];

        foreach ($products as $p) {
            Produk::create([
                'nama' => $p['nama'],
                'deskripsi' => fake()->paragraph(2),
                'harga' => $p['harga'],
                'stok' => $p['stok'],
            ]);
        }
    }
}
<?php

namespace Database\Seeders;

use App\Models\DetailPesanan;
use App\Models\Pesanan;
use App\Models\Produk;
use App\Models\User;
use Illuminate\Database\Seeder;

class PesananSeeder extends Seeder
{
    public function run(): void
    {
        $users = User::all();
        $produks = Produk::all();

        for ($i = 0; $i < 10; $i++) {
            $totalHarga = 0;
            $items = [];
            
            // Setiap pesanan berisi 1-3 produk berbeda
            $produkPesanan = $produks->random(rand(1, 3));

            foreach ($produkPesanan as $produk) {
                $jumlah = rand(1, 2);
                $subtotal = $produk->harga * $jumlah;
                $totalHarga += $subtotal;
                $items[] = [
                    'produk_id' => $produk->id,
                    'jumlah' => $jumlah,
                    'harga_satuan' => $produk->harga,
                ];
            }

            $pesanan = Pesanan::create([
                'pengguna_id' => $users->random()->id,
                'total_harga' => $totalHarga,
                'status' => fake()->randomElement(['Selesai', 'Menunggu Pembayaran', 'Diproses']),
                'created_at' => fake()->dateTimeBetween('-6 months', 'now'),
            ]);

            foreach ($items as $item) {
                DetailPesanan::create(array_merge($item, ['pesanan_id' => $pesanan->id]));
            }
        }
    }
}
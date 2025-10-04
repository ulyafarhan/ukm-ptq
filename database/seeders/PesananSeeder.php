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
        $pengguna = User::first();
        $baju = Produk::where('nama', 'Baju PDH UKM PTQ')->first();
        $ganci = Produk::where('nama', 'Gantungan Kunci Logo PTQ')->first();

        $pesanan = Pesanan::create([
            'pengguna_id' => $pengguna->id,
            'total_harga' => ($baju->harga * 1) + ($ganci->harga * 2),
            'status' => 'Selesai',
        ]);

        DetailPesanan::create([
            'pesanan_id' => $pesanan->id,
            'produk_id' => $baju->id,
            'jumlah' => 1,
            'harga_satuan' => $baju->harga,
        ]);

        DetailPesanan::create([
            'pesanan_id' => $pesanan->id,
            'produk_id' => $ganci->id,
            'jumlah' => 2,
            'harga_satuan' => $ganci->harga,
        ]);
    }
}
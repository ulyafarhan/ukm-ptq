<?php

namespace Database\Seeders;

use App\Models\KategoriTransaksi;
use Illuminate\Database\Seeder;

class KategoriTransaksiSeeder extends Seeder
{
    public function run(): void
    {
        // Pemasukan
        KategoriTransaksi::create(['nama' => 'Sumbangan Donatur', 'jenis' => 'Pemasukan']);
        KategoriTransaksi::create(['nama' => 'Penjualan Produk', 'jenis' => 'Pemasukan']);
        KategoriTransaksi::create(['nama' => 'Iuran Anggota', 'jenis' => 'Pemasukan']);
        KategoriTransaksi::create(['nama' => 'Dana Kegiatan', 'jenis' => 'Pemasukan']);

        // Pengeluaran
        KategoriTransaksi::create(['nama' => 'Biaya ATK', 'jenis' => 'Pengeluaran']);
        KategoriTransaksi::create(['nama' => 'Biaya Konsumsi Rapat', 'jenis' => 'Pengeluaran']);
        KategoriTransaksi::create(['nama' => 'Biaya Transportasi', 'jenis' => 'Pengeluaran']);
        KategoriTransaksi::create(['nama' => 'Pembelian Aset', 'jenis' => 'Pengeluaran']);
        KategoriTransaksi::create(['nama' => 'Modal Usaha', 'jenis' => 'Pengeluaran']);
    }
}
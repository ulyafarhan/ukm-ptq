<?php

namespace Database\Seeders;

use App\Models\KategoriTransaksi;
use Illuminate\Database\Seeder;

class KategoriTransaksiSeeder extends Seeder
{
    public function run(): void
    {
        KategoriTransaksi::insert([
            ['nama' => 'Sumbangan Donatur', 'jenis' => 'Pemasukan'],
            ['nama' => 'Penjualan Produk Store', 'jenis' => 'Pemasukan'],
            ['nama' => 'Iuran Anggota Bulanan', 'jenis' => 'Pemasukan'],
            ['nama' => 'Dana Hibah Universitas', 'jenis' => 'Pemasukan'],
            ['nama' => 'Hasil Usaha Lainnya', 'jenis' => 'Pemasukan'],
            ['nama' => 'Biaya ATK Sekretariat', 'jenis' => 'Pengeluaran'],
            ['nama' => 'Biaya Konsumsi Rapat', 'jenis' => 'Pengeluaran'],
            ['nama' => 'Biaya Transportasi & Akomodasi', 'jenis' => 'Pengeluaran'],
            ['nama' => 'Pembelian Aset & Inventaris', 'jenis' => 'Pengeluaran'],
            ['nama' => 'Biaya Penyelenggaraan Acara', 'jenis' => 'Pengeluaran'],
            ['nama' => 'Modal Usaha PTQ Store', 'jenis' => 'Pengeluaran'],
        ]);
    }
}
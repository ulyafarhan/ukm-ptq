<?php

namespace Database\Seeders;

use App\Models\Kas;
use App\Models\KategoriTransaksi;
use App\Models\Transaksi;
use App\Models\User;
use Illuminate\Database\Seeder;

class TransaksiSeeder extends Seeder
{
    public function run(): void
    {
        $penanggungJawab = User::first();
        $kasUtama = Kas::where('nama', 'Kas Utama UKM')->first();
        
        $pemasukan = KategoriTransaksi::where('jenis', 'Pemasukan')->get();
        $pengeluaran = KategoriTransaksi::where('jenis', 'Pengeluaran')->get();

        Transaksi::create([
            'kas_id' => $kasUtama->id,
            'kategori_transaksi_id' => $pemasukan->random()->id,
            'penanggung_jawab_id' => $penanggungJawab->id,
            'keterangan' => 'Donasi awal dari pembina UKM',
            'tipe' => 'Pemasukan',
            'jumlah' => 2000000,
            'tanggal' => now()->subDays(10),
        ]);

        Transaksi::create([
            'kas_id' => $kasUtama->id,
            'kategori_transaksi_id' => $pengeluaran->random()->id,
            'penanggung_jawab_id' => $penanggungJawab->id,
            'keterangan' => 'Pembelian printer untuk sekretariat',
            'tipe' => 'Pengeluaran',
            'jumlah' => 1500000,
            'tanggal' => now()->subDays(5),
        ]);
    }
}
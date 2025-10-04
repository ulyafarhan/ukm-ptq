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
        $users = User::all();
        $kas = Kas::all();
        $kategoriPemasukan = KategoriTransaksi::where('jenis', 'Pemasukan')->get();
        $kategoriPengeluaran = KategoriTransaksi::where('jenis', 'Pengeluaran')->get();

        // Buat 15 Transaksi
        for ($i = 0; $i < 15; $i++) {
            $isPemasukan = rand(0, 1);
            Transaksi::create([
                'kas_id' => $kas->random()->id,
                'kategori_transaksi_id' => $isPemasukan ? $kategoriPemasukan->random()->id : $kategoriPengeluaran->random()->id,
                'penanggung_jawab_id' => $users->random()->id,
                'keterangan' => fake()->sentence(),
                'tipe' => $isPemasukan ? 'Pemasukan' : 'Pengeluaran',
                'jumlah' => rand(50, 500) * 1000,
                'tanggal' => fake()->dateTimeBetween('-1 year', 'now'),
            ]);
        }
    }
}
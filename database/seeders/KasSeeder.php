<?php

namespace Database\Seeders;

use App\Models\Kas;
use Illuminate\Database\Seeder;

class KasSeeder extends Seeder
{
    public function run(): void
    {
        Kas::create([
            'nama' => 'Kas Utama UKM',
            'deskripsi' => 'Kas utama untuk seluruh operasional UKM PTQ.',
            'saldo_awal' => 5000000,
        ]);

        Kas::create([
            'nama' => 'Kas PTQ Store',
            'deskripsi' => 'Kas khusus untuk pemasukan dan pengeluaran dari unit usaha PTQ Store.',
            'saldo_awal' => 1500000,
        ]);
    }
}
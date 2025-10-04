<?php

namespace Database\Seeders;

use App\Models\Kas;
use Illuminate\Database\Seeder;

class KasSeeder extends Seeder
{
    public function run(): void
    {
        Kas::create(['nama' => 'Kas Utama UKM', 'saldo_awal' => 5000000]);
        Kas::create(['nama' => 'Kas PTQ Store', 'saldo_awal' => 1500000]);
        Kas::create(['nama' => 'Kas Kegiatan Ramadhan', 'saldo_awal' => 0]);
        Kas::create(['nama' => 'Kas Dana Abadi', 'saldo_awal' => 10000000]);
    }
}
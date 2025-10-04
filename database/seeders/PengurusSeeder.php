<?php

namespace Database\Seeders;

use App\Models\Departemen;
use App\Models\Pengurus;
use App\Models\User;
use Illuminate\Database\Seeder;

class PengurusSeeder extends Seeder
{
    /**
     * NOTE: Pastikan Anda telah membuat Model dan Migrasi untuk 'Pengurus' terlebih dahulu.
     * Model Pengurus setidaknya memiliki: user_id, departemen_id, jabatan.
     */
    public function run(): void
    {
        $departemens = Departemen::whereHas('periode', fn($q) => $q->where('is_active', true))->get();
        $users = User::where('id', '>', 4)->get(); // Ambil anggota biasa

        $ketua = User::where('email', 'ketua@ptq.com')->first();
        $sekretaris = User::where('email', 'sekretaris@ptq.com')->first();
        $bendahara = User::where('email', 'bendahara@ptq.com')->first();

        // Badan Pengurus Harian (BPH)
        Pengurus::create(['user_id' => $ketua->id, 'jabatan' => 'Ketua Umum']);
        Pengurus::create(['user_id' => $sekretaris->id, 'jabatan' => 'Sekretaris Umum']);
        Pengurus::create(['user_id' => $bendahara->id, 'jabatan' => 'Bendahara Umum']);

        foreach ($departemens as $dept) {
            // Kepala Departemen
            $userKepala = $users->pop();
            Pengurus::create([
                'user_id' => $userKepala->id,
                'departemen_id' => $dept->id,
                'jabatan' => 'Kepala Departemen',
            ]);

            // Staff Departemen (1 atau 2 orang)
            for ($i = 0; $i < rand(1, 2); $i++) {
                $userStaff = $users->pop();
                if ($userStaff) {
                    Pengurus::create([
                        'user_id' => $userStaff->id,
                        'departemen_id' => $dept->id,
                        'jabatan' => 'Staff Ahli',
                    ]);
                }
            }
        }
    }
}
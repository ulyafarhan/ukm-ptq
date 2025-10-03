<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;
use Illuminate\Support\Facades\Gate;

class PeranDanHakAksesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Hapus cache peran dan hak akses
        app()[\Spatie\Permission\PermissionRegistrar::class]->forgetCachedPermissions();

        // Buat peran Super Admin
        $superAdmin = Role::create(['name' => 'Super Admin']);

        // Berikan semua hak akses kepada Super Admin melalui Gate
        // Gate ini akan secara otomatis memberikan akses ke semua hal
        // tanpa perlu mendefinisikan setiap hak akses secara eksplisit.
        /* Gate::before(function ($user, $ability) {
            return $user->hasRole('Super Admin') ? true : null;
        });*/

        // Buat peran lain
        Role::create(['name' => 'Pengurus']);
        Role::create(['name' => 'Anggota']);
    }
}
<?php

namespace App\Filament\Pages;

use Filament\Pages\Dashboard as BaseDashboard;

class Dashboard extends BaseDashboard
{
    // Perbaikan: Tetap definisikan Navigation Label
    protected static ?string $navigationLabel = 'Dashboard';
    
    // Properti ini tetap kosong untuk menyembunyikan judul di dalam halaman
    protected static ?string $title = ''; 
}
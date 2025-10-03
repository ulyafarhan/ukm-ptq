<?php

namespace App\Filament\Widgets;

use App\Models\Transaksi;
use Filament\Widgets\StatsOverviewWidget as BaseWidget;
use Filament\Widgets\StatsOverviewWidget\Stat;

class KasWidget extends BaseWidget
{
    protected function getStats(): array
    {
        $pemasukan = Transaksi::where('jenis', 'pemasukan')->sum('jumlah');
        $pengeluaran = Transaksi::where('jenis', 'pengeluaran')->sum('jumlah');
        $saldo = $pemasukan - $pengeluaran;

        return [
            Stat::make('Total Pemasukan', 'Rp ' . number_format($pemasukan, 0, ',', '.'))
                ->description('Semua dana yang masuk')
                ->color('success'),
            Stat::make('Total Pengeluaran', 'Rp ' . number_format($pengeluaran, 0, ',', '.'))
                ->description('Semua dana yang keluar')
                ->color('danger'),
            Stat::make('Saldo Akhir', 'Rp ' . number_format($saldo, 0, ',', '.'))
                ->description('Sisa saldo kas saat ini')
                ->color('info'),
        ];
    }
}
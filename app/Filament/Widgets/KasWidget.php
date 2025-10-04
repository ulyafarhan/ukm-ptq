<?php

namespace App\Filament\Widgets;

use App\Models\Transaksi;
use Filament\Widgets\StatsOverviewWidget as BaseWidget;
use Filament\Widgets\StatsOverviewWidget\Stat;

class KasWidget extends BaseWidget
{
    protected function getStats(): array
    {
        // Perbaikan: Menggunakan kolom 'tipe' bukan 'jenis'
        $totalPemasukan = Transaksi::where('tipe', 'Pemasukan')->sum('jumlah');
        $totalPengeluaran = Transaksi::where('tipe', 'Pengeluaran')->sum('jumlah');
        $saldoAkhir = $totalPemasukan - $totalPengeluaran;

        return [
            Stat::make('Total Pemasukan', 'Rp ' . number_format($totalPemasukan, 0, ',', '.'))
                ->description('Seluruh pemasukan tercatat')
                ->color('success'),
            Stat::make('Total Pengeluaran', 'Rp ' . number_format($totalPengeluaran, 0, ',', '.'))
                ->description('Seluruh pengeluaran tercatat')
                ->color('danger'),
            Stat::make('Saldo Akhir', 'Rp ' . number_format($saldoAkhir, 0, ',', '.'))
                ->description('Selisih pemasukan dan pengeluaran')
                ->color('info'),
        ];
    }
}
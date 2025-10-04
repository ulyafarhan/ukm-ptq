<?php

namespace App\Filament\Widgets;

use App\Models\Agenda;
use App\Models\Artikel;
use App\Models\Transaksi;
use App\Models\User;
use Filament\Widgets\StatsOverviewWidget as BaseWidget;
use Filament\Widgets\StatsOverviewWidget\Stat;

class StatsOverview extends BaseWidget
{
    protected static ?int $sort = 1; // Urutan widget

    protected function getStats(): array
    {
        $totalPemasukan = Transaksi::where('tipe', 'Pemasukan')->sum('jumlah');
        $totalPengeluaran = Transaksi::where('tipe', 'Pengeluaran')->sum('jumlah');

        return [
            Stat::make('Total Anggota', User::count())
                ->description('Seluruh anggota terdaftar')
                ->icon('heroicon-o-users')
                ->color('success'),
            Stat::make('Total Artikel', Artikel::count())
                ->description('Artikel yang telah dipublikasi')
                ->icon('heroicon-o-document-text')
                ->color('info'),
            Stat::make('Agenda Akan Datang', Agenda::where('waktu_mulai', '>=', now())->count())
                ->description('Kegiatan yang akan diselenggarakan')
                ->icon('heroicon-o-calendar-days')
                ->color('warning'),
            Stat::make('Saldo Akhir', 'Rp ' . number_format($totalPemasukan - $totalPengeluaran))
                ->description('Total pemasukan dikurangi pengeluaran')
                ->icon('heroicon-o-banknotes')
                ->color('primary'),
        ];
    }
}
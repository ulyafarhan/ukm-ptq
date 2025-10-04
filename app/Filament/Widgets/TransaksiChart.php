<?php

namespace App\Filament\Widgets;

use App\Models\Transaksi;
use Filament\Widgets\ChartWidget;
use Flowframe\Trend\Trend;
use Flowframe\Trend\TrendValue;

class TransaksiChart extends ChartWidget
{
    protected static ?string $heading = 'Grafik Keuangan Bulan Ini';
    protected static ?int $sort = 2;

    protected function getData(): array
    {
        // Perbaikan: Lakukan query 'where' sebelum memanggil Trend
        $pemasukanQuery = Transaksi::query()->where('tipe', 'Pemasukan');
        $pengeluaranQuery = Transaksi::query()->where('tipe', 'Pengeluaran');

        $dataPemasukan = Trend::query($pemasukanQuery)
            ->between(
                start: now()->startOfMonth(),
                end: now()->endOfMonth(),
            )
            ->perDay()
            ->sum('jumlah');
            
        $dataPengeluaran = Trend::query($pengeluaranQuery)
            ->between(
                start: now()->startOfMonth(),
                end: now()->endOfMonth(),
            )
            ->perDay()
            ->sum('jumlah');

        return [
            'datasets' => [
                [
                    'label' => 'Pemasukan',
                    'data' => $dataPemasukan->map(fn (TrendValue $value) => $value->aggregate),
                    'backgroundColor' => 'rgba(75, 192, 192, 0.2)',
                    'borderColor' => 'rgb(75, 192, 192)',
                    'tension' => 0.4,
                ],
                [
                    'label' => 'Pengeluaran',
                    'data' => $dataPengeluaran->map(fn (TrendValue $value) => $value->aggregate),
                    'backgroundColor' => 'rgba(255, 99, 132, 0.2)',
                    'borderColor' => 'rgb(255, 99, 132)',
                    'tension' => 0.4,
                ],
            ],
            'labels' => $dataPemasukan->map(fn (TrendValue $value) => $value->date),
        ];
    }

    protected function getType(): string
    {
        return 'line';
    }
}
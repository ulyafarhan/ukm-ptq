<?php

namespace App\Filament\Widgets;

use App\Models\Agenda;
use Filament\Tables;
use Filament\Tables\Table;
use Filament\Widgets\TableWidget as BaseWidget;

class AgendaTerdekatWidget extends BaseWidget
{
    protected static ?int $sort = 4;

    // Perbaikan: Ganti 'half' menjadi angka 1
    protected int | string | array $columnSpan = 1;

    public function table(Table $table): Table
    {
        return $table
            ->query(
                Agenda::query()
                    ->where('waktu_mulai', '>=', now())
                    ->orderBy('waktu_mulai', 'asc')
                    ->take(5)
            )
            ->columns([
                Tables\Columns\TextColumn::make('nama_kegiatan')
                    ->label('Nama Kegiatan'),
                Tables\Columns\TextColumn::make('waktu_mulai')
                    ->label('Waktu Pelaksanaan')
                    ->dateTime('d M Y, H:i'),
                Tables\Columns\TextColumn::make('lokasi'),
            ])
            ->paginated(false)
            ->heading('5 Agenda Terdekat');
    }
}
<?php

namespace App\Filament\Widgets;

use App\Models\User;
use Filament\Tables;
use Filament\Tables\Table;
use Filament\Widgets\TableWidget as BaseWidget;

class AnggotaBaruWidget extends BaseWidget
{
    protected static ?int $sort = 3;

    // Perbaikan: Ganti 'half' menjadi angka 1 untuk menempati 1 kolom dari 2
    protected int | string | array $columnSpan = 1;

    public function table(Table $table): Table
    {
        return $table
            ->query(
                User::query()->latest()->take(5)
            )
            ->columns([
                Tables\Columns\TextColumn::make('name')
                    ->label('Nama'),
                Tables\Columns\TextColumn::make('email')
                    ->label('Email'),
                Tables\Columns\TextColumn::make('created_at')
                    ->label('Tanggal Bergabung')
                    ->since(),
            ])
            ->paginated(false)
            ->heading('5 Anggota Terbaru');
    }
}
<?php

namespace App\Filament\Resources;

use App\Filament\Resources\KategoriTransaksiResource\Pages;
use App\Models\KategoriTransaksi;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;

class KategoriTransaksiResource extends Resource
{
    protected static ?string $model = KategoriTransaksi::class;

    protected static ?string $navigationIcon = 'heroicon-o-tag';

    protected static ?string $navigationGroup = 'Keuangan';

    protected static ?string $label = 'Kategori Transaksi';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\TextInput::make('nama')
                    ->required()
                    ->maxLength(255),
                Forms\Components\Select::make('jenis')
                    ->required()
                    ->options([
                        'Pemasukan' => 'Pemasukan',
                        'Pengeluaran' => 'Pengeluaran',
                    ]),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('nama')
                    ->searchable(),
                Tables\Columns\TextColumn::make('jenis')
                    ->badge()
                    ->color(fn (string $state): string => match ($state) {
                        'Pemasukan' => 'success',
                        'Pengeluaran' => 'danger',
                    })
                    ->searchable(),
            ])
            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }
    
    public static function getRelations(): array
    {
        return [
            //
        ];
    }
    
    public static function getPages(): array
    {
        return [
            'index' => Pages\ListKategoriTransaksis::route('/'),
            'create' => Pages\CreateKategoriTransaksi::route('/create'),
            'edit' => Pages\EditKategoriTransaksi::route('/{record}/edit'),
        ];
    }    
}
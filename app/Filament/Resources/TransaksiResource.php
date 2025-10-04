<?php

namespace App\Filament\Resources;

use App\Filament\Resources\TransaksiResource\Pages;
use App\Models\Transaksi;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;

class TransaksiResource extends Resource
{
    protected static ?string $model = Transaksi::class;

    protected static ?string $navigationIcon = 'heroicon-o-arrows-right-left';

    protected static ?string $navigationGroup = 'Keuangan';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\Select::make('kas_id')
                    ->relationship('kas', 'nama')
                    ->required(),
                Forms\Components\Select::make('kategori_transaksi_id')
                    ->relationship('kategori', 'nama')
                    ->required(),
                Forms\Components\Select::make('penanggung_jawab_id')
                    ->relationship('penanggungJawab', 'name')
                    ->required(),
                Forms\Components\Textarea::make('keterangan')
                    ->required()
                    ->maxLength(65535)
                    ->columnSpanFull(),
                Forms\Components\Select::make('tipe')
                    ->required()
                    ->options([
                        'Pemasukan' => 'Pemasukan',
                        'Pengeluaran' => 'Pengeluaran',
                    ]),
                Forms\Components\TextInput::make('jumlah')
                    ->required()
                    ->numeric()
                    ->prefix('Rp'),
                Forms\Components\DateTimePicker::make('tanggal')
                    ->required(),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('kas.nama')
                    ->sortable(),
                Tables\Columns\TextColumn::make('kategori.nama')
                    ->sortable(),
                Tables\Columns\TextColumn::make('tipe')
                    ->badge()
                    ->color(fn (string $state): string => match ($state) {
                        'Pemasukan' => 'success',
                        'Pengeluaran' => 'danger',
                    })
                    ->searchable(),
                Tables\Columns\TextColumn::make('jumlah')
                    ->money('IDR')
                    ->sortable(),
                Tables\Columns\TextColumn::make('tanggal')
                    ->dateTime()
                    ->sortable(),
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
            'index' => Pages\ListTransaksis::route('/'),
            'create' => Pages\CreateTransaksi::route('/create'),
            'edit' => Pages\EditTransaksi::route('/{record}/edit'),
        ];
    }    
}
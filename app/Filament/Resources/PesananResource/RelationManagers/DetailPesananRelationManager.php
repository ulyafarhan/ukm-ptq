<?php

namespace App\Filament\Resources\PesananResource\RelationManagers;

use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\RelationManagers\RelationManager;
use Filament\Tables;
use Filament\Tables\Table;

class DetailPesananRelationManager extends RelationManager
{
    protected static string $relationship = 'detailPesanan';

    public function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\Select::make('produk_id')
                    ->relationship('produk', 'nama')
                    ->required(),
                Forms\Components\TextInput::make('jumlah')
                    ->required()
                    ->numeric(),
                Forms\Components\TextInput::make('harga_satuan')
                    ->required()
                    ->numeric()
                    ->prefix('Rp'),
            ]);
    }

    public function table(Table $table): Table
    {
        return $table
            ->recordTitleAttribute('produk.nama')
            ->columns([
                Tables\Columns\TextColumn::make('produk.nama'),
                Tables\Columns\TextColumn::make('jumlah'),
                Tables\Columns\TextColumn::make('harga_satuan')->money('IDR'),
            ])
            ->filters([
                //
            ])
            ->headerActions([
                Tables\Actions\CreateAction::make(),
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
                Tables\Actions\DeleteAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }
}
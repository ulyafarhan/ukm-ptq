<?php

namespace App\Filament\Resources\PeriodeResource\RelationManagers;

use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\RelationManagers\RelationManager;
use Filament\Tables;
use Filament\Tables\Table;

class DepartemensRelationManager extends RelationManager
{
    protected static string $relationship = 'departemens';

    public function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\TextInput::make('nama')
                    ->required()
                    ->maxLength(255),
                Forms\Components\RichEditor::make('deskripsi')
                    ->columnSpanFull(),
            ]);
    }

    public function table(Table $table): Table
    {
        return $table
            ->recordTitleAttribute('nama')
            ->columns([
                Tables\Columns\TextColumn::make('nama'),
            ])
            ->headerActions([
                Tables\Actions\CreateAction::make(),
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
                Tables\Actions\DeleteAction::make(),
                // Aksi untuk menunjuk pengurus
                Tables\Actions\Action::make('kelolaPengurus')
                    ->label('Kelola Pengurus')
                    ->icon('heroicon-o-users')
                    ->form([
                        Forms\Components\Repeater::make('pengurus')
                            ->relationship() // Biarkan Filament cerdas menebak relasi
                            ->schema([
                                Forms\Components\Select::make('user_id')
                                    ->relationship('user', 'name')
                                    ->label('Anggota')
                                    ->searchable()
                                    ->required()
                                    ->distinct() // Mencegah memilih anggota yang sama dua kali
                                    ->disableOptionsWhenSelectedInSiblingRepeaterItems(), // Nonaktifkan pilihan jika sudah dipilih
                                Forms\Components\TextInput::make('jabatan')
                                    ->required(),
                            ])
                            ->columns(2)
                            ->addActionLabel('Tambah Pengurus'),
                    ])
                    // Menggunakan closure standar untuk kompatibilitas maksimum
                    ->action(function () {
                        // Aksi ini hanya untuk memunculkan modal/form.
                        // Penyimpanan data ditangani oleh 'relationship()' pada Repeater.
                    }),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }
}
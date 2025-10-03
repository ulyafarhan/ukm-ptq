<?php

namespace App\Filament\Resources;

use App\Filament\Resources\KategoriDokumenResource\Pages;
use App\Models\KategoriDokumen;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;

class KategoriDokumenResource extends Resource
{
    protected static ?string $model = KategoriDokumen::class;
    protected static ?string $navigationIcon = 'heroicon-o-folder-open';
    protected static ?string $navigationLabel = 'Kategori Dokumen';
    protected static ?string $modelLabel = 'Kategori Dokumen';
    protected static ?string $pluralModelLabel = 'Kategori Dokumen';
    protected static ?string $navigationGroup = 'Arsip Digital';
    protected static ?int $navigationSort = 2; // Urutan di sidebar

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\TextInput::make('nama')->required()->maxLength(255),
                Forms\Components\Textarea::make('deskripsi')->columnSpanFull(),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('nama')->searchable(),
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
            ]);
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListKategoriDokumens::route('/'),
            'create' => Pages\CreateKategoriDokumen::route('/create'),
            'edit' => Pages\EditKategoriDokumen::route('/{record}/edit'),
        ];
    }
}
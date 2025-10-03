<?php

namespace App\Filament\Resources;

use App\Filament\Resources\DokumenResource\Pages;
use App\Models\Dokumen;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Filament\Forms\Components\SpatieMediaLibraryFileUpload;

class DokumenResource extends Resource
{
    protected static ?string $model = Dokumen::class;
    protected static ?string $navigationIcon = 'heroicon-o-document-duplicate';
    protected static ?string $navigationLabel = 'Arsip Dokumen';
    protected static ?string $modelLabel = 'Dokumen';
    protected static ?string $pluralModelLabel = 'Dokumen';
    protected static ?string $navigationGroup = 'Arsip Digital';
    protected static ?int $navigationSort = 1; // Urutan di sidebar

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\Select::make('kategori_dokumen_id')
                    ->relationship('kategori', 'nama')
                    ->required()
                    ->label('Kategori'),
                Forms\Components\TextInput::make('judul')
                    ->required()
                    ->maxLength(255),
                Forms\Components\TextInput::make('nomor_dokumen')
                    ->label('Nomor Dokumen (jika ada)')
                    ->maxLength(255)
                    ->unique(Dokumen::class, 'nomor_dokumen', ignoreRecord: true),
                Forms\Components\DatePicker::make('tanggal_dokumen')
                    ->required(),
                Forms\Components\RichEditor::make('deskripsi')
                    ->columnSpanFull(),
                SpatieMediaLibraryFileUpload::make('lampiran')
                    ->collection('dokumens')
                    ->label('File Dokumen')
                    ->required()
                    ->columnSpanFull()
                    // Menambahkan validasi agar hanya file umum yang bisa diupload
                    ->acceptedFileTypes(['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'image/jpeg', 'image/png']),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('judul')->searchable(),
                Tables\Columns\TextColumn::make('kategori.nama'),
                Tables\Columns\TextColumn::make('nomor_dokumen')->searchable(),
                Tables\Columns\TextColumn::make('tanggal_dokumen')->date('d F Y')->sortable(),
            ])
            ->defaultSort('tanggal_dokumen', 'desc')
            ->actions([
                Tables\Actions\EditAction::make(),
                Tables\Actions\DeleteAction::make(),
            ]);
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListDokumens::route('/'),
            'create' => Pages\CreateDokumen::route('/create'),
            'edit' => Pages\EditDokumen::route('/{record}/edit'),
        ];
    }
}
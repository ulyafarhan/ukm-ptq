<?php

namespace App\Filament\Resources;

use App\Filament\Resources\ArtikelResource\Pages;
use App\Models\Artikel;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Support\Str;
use Filament\Forms\Components\SpatieMediaLibraryFileUpload;


class ArtikelResource extends Resource
{
    protected static ?string $model = Artikel::class;

    protected static ?string $navigationIcon = 'heroicon-o-document-text';

    protected static ?string $navigationLabel = 'Artikel';

    protected static ?string $modelLabel = 'Artikel';

    protected static ?string $pluralModelLabel = 'Artikel';

    protected static ?string $navigationGroup = 'Manajemen Konten';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\Wizard::make([
                    Forms\Components\Wizard\Step::make('Detail Artikel')
                        ->schema([
                            Forms\Components\Select::make('kategori_id')
                                ->relationship('kategori', 'nama')
                                ->required()
                                ->label('Kategori'),
                            Forms\Components\TextInput::make('judul')
                                ->required()
                                ->maxLength(255)
                                ->live(onBlur: true)
                                ->afterStateUpdated(fn (Forms\Set $set, ?string $state) => $set('slug', Str::slug($state))),
                            Forms\Components\TextInput::make('slug')
                                ->required()
                                ->maxLength(255)
                                ->unique(Artikel::class, 'slug', ignoreRecord: true)
                                ->readOnly(),
                            Forms\Components\RichEditor::make('isi')
                                ->required()
                                ->columnSpanFull(),
                        ])->columns(2),
                    Forms\Components\Wizard\Step::make('Media & Status')
                        ->schema([
                            SpatieMediaLibraryFileUpload::make('thumbnail')
                                ->collection('artikels')
                                ->label('Gambar Mini (Thumbnail)')
                                ->required(),
                            Forms\Components\Select::make('status')
                                ->options([
                                    'draf' => 'Draf',
                                    'terbit' => 'Terbit',
                                ])
                                ->required()
                                ->default('draf'),
                            Forms\Components\DateTimePicker::make('tanggal_terbit')
                                ->label('Jadwalkan Tanggal Terbit'),
                        ]),
                ])->columnSpanFull(),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('judul')
                    ->searchable()
                    ->limit(40),
                Tables\Columns\TextColumn::make('penulis.name')
                    ->label('Penulis')
                    ->sortable(),
                Tables\Columns\TextColumn::make('kategori.nama')
                    ->sortable(),
                Tables\Columns\TextColumn::make('status')
                    ->badge()
                    ->color(fn (string $state): string => match ($state) {
                        'draf' => 'gray',
                        'terbit' => 'success',
                    }),
                Tables\Columns\TextColumn::make('tanggal_terbit')
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
            'index' => Pages\ListArtikels::route('/'),
            'create' => Pages\CreateArtikel::route('/create'),
            'edit' => Pages\EditArtikel::route('/{record}/edit'),
        ];
    }
}
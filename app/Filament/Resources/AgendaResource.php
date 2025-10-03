<?php

namespace App\Filament\Resources;

use App\Filament\Resources\AgendaResource\Pages;
use App\Filament\Resources\AgendaResource\RelationManagers\KehadiransRelationManager;
// Model 'Agenda' sudah secara otomatis dikenali oleh Resource, jadi tidak perlu di-import lagi.
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Support\Str;

class AgendaResource extends Resource
{
    protected static ?string $model = \App\Models\Agenda::class; // Menggunakan FQCN untuk menghindari ambiguitas
    protected static ?string $navigationIcon = 'heroicon-o-calendar-days';
    protected static ?string $navigationLabel = 'Agenda Kegiatan';
    protected static ?string $modelLabel = 'Agenda';
    protected static ?string $pluralModelLabel = 'Agenda';
    protected static ?string $navigationGroup = 'Manajemen Organisasi';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\TextInput::make('nama_kegiatan')
                    ->label('Nama Kegiatan')
                    ->required()
                    ->live(onBlur: true)
                    ->afterStateUpdated(fn (Forms\Set $set, ?string $state) => $set('slug', Str::slug($state))),
                Forms\Components\TextInput::make('slug')->required()->unique(\App\Models\Agenda::class, 'slug', ignoreRecord: true),
                Forms\Components\RichEditor::make('deskripsi')->columnSpanFull(),
                Forms\Components\TextInput::make('lokasi')->required(),
                Forms\Components\DateTimePicker::make('waktu_mulai')->required(),
                Forms\Components\DateTimePicker::make('waktu_selesai'),
                Forms\Components\Select::make('status')
                    ->options([
                        'akan_datang' => 'Akan Datang',
                        'berlangsung' => 'Berlangsung',
                        'selesai' => 'Selesai',
                        'batal' => 'Batal',
                    ])->required()->default('akan_datang'),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('nama_kegiatan')->searchable(),
                Tables\Columns\TextColumn::make('lokasi'),
                Tables\Columns\TextColumn::make('waktu_mulai')->dateTime()->sortable(),
                Tables\Columns\TextColumn::make('status')->badge()->color(fn (string $state): string => match ($state) {
                    'akan_datang' => 'warning',
                    'berlangsung' => 'success',
                    'selesai' => 'gray',
                    'batal' => 'danger',
                }),
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
            ]);
    }

    public static function getRelations(): array
    {
        return [
            KehadiransRelationManager::class,
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListAgendas::route('/'),
            'create' => Pages\CreateAgenda::route('/create'),
            'edit' => Pages\EditAgenda::route('/{record}/edit'),
        ];
    }
}
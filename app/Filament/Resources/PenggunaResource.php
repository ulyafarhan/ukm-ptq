<?php

namespace App\Filament\Resources;

use App\Filament\Resources\PenggunaResource\Pages;
use App\Models\User as Pengguna;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Support\Facades\Hash;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\Section; 

class PenggunaResource extends Resource
{
    protected static ?string $model = Pengguna::class;
    protected static ?string $navigationIcon = 'heroicon-o-users';
    protected static ?string $navigationLabel = 'Manajemen Pengguna';
    protected static ?string $modelLabel = 'Pengguna';
    protected static ?string $pluralModelLabel = 'Pengguna';
    protected static ?string $navigationGroup = 'Pengaturan Akses';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Section::make('Data Akun')
                    ->description('Informasi untuk login dan akses sistem.')
                    ->schema([
                        Forms\Components\TextInput::make('name')
                            ->label('Nama Panggilan (Username)')
                            ->required()
                            ->maxLength(255),
                        Forms\Components\TextInput::make('email')
                            ->label('Alamat Email')
                            ->email()
                            ->required()
                            ->maxLength(255)
                            ->unique(ignoreRecord: true),
                        Forms\Components\TextInput::make('password')
                            ->label('Kata Sandi')
                            ->password()
                            ->dehydrateStateUsing(fn (string $state): string => Hash::make($state))
                            ->dehydrated(fn (?string $state): bool => filled($state))
                            ->required(fn (string $operation): bool => $operation === 'create')
                            ->maxLength(255),
                        Select::make('roles')
                            ->label('Peran')
                            ->multiple()
                            ->relationship('roles', 'name')
                            ->preload(),
                    ])->columns(2),

                Section::make('Detail Profil Anggota')
                    ->description('Informasi detail keanggotaan.')
                    ->relationship('profil') 
                    ->schema([
                        Forms\Components\TextInput::make('nim')
                            ->label('NIM (Nomor Induk Mahasiswa)'),
                        Forms\Components\TextInput::make('angkatan')
                            ->label('Angkatan'),
                        Forms\Components\TextInput::make('jabatan')
                            ->label('Jabatan'),
                        Forms\Components\TextInput::make('nomor_telepon')
                            ->label('Nomor Telepon/WA'),
                        Forms\Components\Textarea::make('alamat')
                            ->label('Alamat')
                            ->columnSpanFull(),
                    ])->columns(2),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('name')
                    ->label('Username')
                    ->searchable(),
                Tables\Columns\TextColumn::make('profil.nim')
                    ->label('NIM')
                    ->searchable(),
                Tables\Columns\TextColumn::make('email')
                    ->label('Alamat Email')
                    ->searchable(),
                Tables\Columns\TextColumn::make('created_at')
                    ->label('Dibuat pada')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
                Tables\Actions\DeleteAction::make(),
            ]);
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListPenggunas::route('/'),
            'create' => Pages\CreatePengguna::route('/create'),
            'edit' => Pages\EditPengguna::route('/{record}/edit'),
        ];
    }
}
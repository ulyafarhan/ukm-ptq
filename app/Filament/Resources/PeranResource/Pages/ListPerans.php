<?php

namespace App\Filament\Resources\PeranResource\Pages;

use App\Filament\Resources\PeranResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;

class ListPerans extends ListRecords
{
    protected static string $resource = PeranResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}

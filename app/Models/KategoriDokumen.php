<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class KategoriDokumen extends Model
{
    use HasFactory;
    protected $guarded = ['id'];

    public function dokumens(): HasMany
    {
        return $this->hasMany(Dokumen::class);
    }
}
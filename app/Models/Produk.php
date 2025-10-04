<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Produk extends Model
{
    use HasFactory;

    protected $fillable = [
        'nama',
        'deskripsi',
        'harga',
        'stok',
        'varian',
    ];

    protected $casts = [
        'varian' => 'array',
    ];

    public function detailPesanan(): HasMany
    {
        return $this->hasMany(DetailPesanan::class);
    }
}
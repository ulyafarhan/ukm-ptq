<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Kas extends Model
{
    use HasFactory;

    protected $table = 'kas';

    protected $fillable = [
        'nama',
        'deskripsi',
        'saldo_awal',
    ];

    public function transaksi(): HasMany
    {
        return $this->hasMany(Transaksi::class);
    }
}
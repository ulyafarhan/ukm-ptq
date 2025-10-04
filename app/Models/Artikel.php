<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Artikel extends Model
{
    use HasFactory;

    protected $fillable = [
        'kategori_artikel_id', // pastikan sesuai dengan kolom di tabel
        'user_id',
        'judul',
        'slug',
        'isi',
    ];

    /**
     * Relasi ke kategori artikel
     */
    public function kategoriArtikel(): BelongsTo
    {
        return $this->belongsTo(KategoriArtikel::class, 'kategori_artikel_id');
    }

    /**
     * Relasi ke user (penulis artikel)
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}

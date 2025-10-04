<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Transaksi extends Model
{
    use HasFactory;

    protected $fillable = [
        'kas_id',
        'kategori_transaksi_id',
        'penanggung_jawab_id',
        'keterangan',
        'tipe',
        'jumlah',
        'tanggal',
    ];

    protected $casts = [
        'tanggal' => 'datetime',
    ];

    public function kas(): BelongsTo
    {
        return $this->belongsTo(Kas::class);
    }

    public function kategori(): BelongsTo
    {
        return $this->belongsTo(KategoriTransaksi::class, 'kategori_transaksi_id');
    }

    public function penanggungJawab(): BelongsTo
    {
        return $this->belongsTo(User::class, 'penanggung_jawab_id');
    }
}
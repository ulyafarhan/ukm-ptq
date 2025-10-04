<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Profil extends Model
{
    use HasFactory;

    // Perbaikan: Mencocokkan dengan kolom di file migrasi
    protected $fillable = [
        'user_id',
        'nim',
        'angkatan',
        'jabatan',
        'nomor_telepon',
        'alamat',
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
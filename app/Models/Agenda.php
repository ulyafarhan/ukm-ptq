<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Support\Str; // Tambahkan ini

class Agenda extends Model
{
    use HasFactory;

    protected $fillable = [
        'nama_kegiatan',
        'slug', // Tambahkan slug ke fillable
        'deskripsi',
        'lokasi',
        'waktu_mulai',
        'waktu_selesai',
    ];

    protected $casts = [
        'waktu_mulai' => 'datetime',
        'waktu_selesai' => 'datetime',
    ];

    // Kode ini akan berjalan otomatis setiap kali data baru dibuat
    protected static function boot()
    {
        parent::boot();

        static::creating(function ($agenda) {
            $agenda->slug = Str::slug($agenda->nama_kegiatan);
        });
    }

    public function kehadirans(): HasMany
    {
        return $this->hasMany(Kehadiran::class);
    }
}
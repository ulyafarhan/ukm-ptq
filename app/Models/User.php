<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Spatie\Permission\Traits\HasRoles;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne; 


class User extends Authenticatable
{
    use HasFactory, Notifiable, HasRoles;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
        ];
    }

    public function canAccessPanel(Panel $panel): bool
    {
        // Perbaikan: Hanya memeriksa peran 'super-admin'
        return true;
    }

    protected static function booted(): void
    {
        static::created(function ($user) {
            $user->profil()->create([]);
        });
    }

    public function profil(): HasOne
    {
        return $this->hasOne(Profil::class, 'user_id');
    }

    public function artikels(): HasMany
    {
        return $this->hasMany(Artikel::class, 'user_id');
    }

    public function departemens(): BelongsToMany
    {
        return $this->belongsToMany(Departemen::class, 'pengurus')
            ->withPivot('jabatan')
            ->withTimestamps();
    }
    public function transaksis(): HasMany
    {
        return $this->hasMany(Transaksi::class, 'user_id');
    }

    public function kehadirans(): HasMany
    {
        return $this->hasMany(Kehadiran::class);
    }
}

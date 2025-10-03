<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Departemen extends Model
{
    use HasFactory;
    protected $guarded = ['id'];

    public function periode(): BelongsTo
    {
        return $this->belongsTo(Periode::class);
    }

    public function pengurus(): BelongsToMany
    {
        return $this->belongsToMany(User::class, 'pengurus')
            ->withPivot('jabatan')
            ->withTimestamps();
    }
}
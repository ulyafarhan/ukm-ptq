<?php

namespace App\Http\Controllers\Publik;

use App\Http\Controllers\Controller;
use App\Models\Album;
use Inertia\Inertia;

class GaleriController extends Controller
{
    public function index()
    {
        return Inertia::render('Publik/Galeri/Indeks', [
            'albums' => Album::latest()->paginate(12),
        ]);
    }

    /**
     * TAMBAHKAN METODE BARU INI
     * Menampilkan halaman detail untuk satu album.
     */
    public function show(Album $album)
    {
        // Di masa depan, Anda bisa memuat relasi gambar di sini.
        // Contoh: $album->load('media'); 

        return Inertia::render('Publik/Galeri/Tampil', [
            'album' => $album,
        ]);
    }
}
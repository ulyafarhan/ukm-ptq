<?php

namespace App\Http\Controllers\Publik;

use App\Http\Controllers\Controller;
use App\Models\Artikel;
use App\Models\KategoriArtikel;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ArtikelController extends Controller
{
    public function index(Request $request)
    {
        // Query dasar untuk artikel, langsung memuat relasi agar efisien
        $query = Artikel::with(['kategoriArtikel', 'user'])->latest();

        // Logika untuk filter berdasarkan slug kategori
        if ($request->has('kategori')) {
            $query->whereHas('kategoriArtikel', function ($q) use ($request) {
                $q->where('slug', $request->kategori);
            });
        }
        
        return Inertia::render('Publik/Artikel/Index', [
            'artikels' => $query->paginate(9)->withQueryString(),
            'kategoris' => KategoriArtikel::all(),
            'filterAktif' => $request->kategori ?? 'semua',
        ]);
    }

    public function show(Artikel $artikel)
    {
        // Memuat relasi untuk ditampilkan di halaman detail
        $artikel->load(['kategoriArtikel', 'user']);

        return Inertia::render('Publik/Artikel/Show', [
            'artikel' => $artikel,
        ]);
    }
}
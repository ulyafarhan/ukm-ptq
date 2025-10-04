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
        $query = Artikel::with(['kategoriArtikel', 'user'])->latest();

        if ($request->has('kategori')) {
            $query->whereHas('kategoriArtikel', function ($q) use ($request) {
                $q->where('slug', $request->kategori);
            });
        }
        
        // Perbaikan: Hapus awalan 'Publik/'
        return Inertia::render('Artikel/Indeks', [
            'artikels' => $query->paginate(9)->withQueryString(),
            'kategoris' => KategoriArtikel::all(),
            'filterAktif' => $request->kategori ?? 'semua',
        ]);
    }

    public function show(Artikel $artikel)
    {
        $artikel->load(['kategoriArtikel', 'user']);

        // Perbaikan: Hapus awalan 'Publik/'
        return Inertia::render('Artikel/Tampil', [
            'artikel' => $artikel,
        ]);
    }
}
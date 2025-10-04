<?php

namespace App\Http\Controllers\Publik;

use App\Http\Controllers\Controller;
use App\Models\Agenda;
use App\Models\Artikel;
use Inertia\Inertia;

class BerandaController extends Controller
{
    public function index()
    {
        $artikels = Artikel::with('user', 'kategoriArtikel')->latest()->take(3)->get();

        $agendas = Agenda::where('waktu_mulai', '>=', now())
                         ->orderBy('waktu_mulai', 'asc')
                         ->take(3)
                         ->get();

        return Inertia::render('Publik/Beranda', [
            'artikels' => $artikels,
            'agendas' => $agendas,
        ]);
    }
}
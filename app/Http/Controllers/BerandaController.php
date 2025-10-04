<?php

namespace App\Http\Controllers;

use App\Models\Agenda;
use App\Models\Artikel;
use Inertia\Inertia;

class BerandaController extends Controller
{
    public function index()
    {
        $artikels = Artikel::latest()->take(3)->get();
        
        // Perbaikan: Query ke kolom 'waktu_mulai'
        $agendas = Agenda::where('waktu_mulai', '>=', now())
                         ->orderBy('waktu_mulai', 'asc')
                         ->take(3)
                         ->get();

        return Inertia::render('Welcome', [
            'artikels' => $artikels,
            'agendas' => $agendas,
        ]);
    }
}
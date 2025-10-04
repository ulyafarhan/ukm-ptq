<?php

namespace App\Http\Controllers\Publik;

use App\Http\Controllers\Controller;
use App\Models\Periode;
use Inertia\Inertia;

class TentangKamiController extends Controller
{
    public function index()
    {
        $periodeAktif = Periode::where('is_active', true)->with('departemens')->first();

        return Inertia::render('Publik/TentangKami', [
            'periodeAktif' => $periodeAktif,
        ]);
    }
}
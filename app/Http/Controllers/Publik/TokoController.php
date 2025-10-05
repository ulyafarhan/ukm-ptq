<?php

namespace App\Http\Controllers\Publik;

use App\Http\Controllers\Controller;
use App\Models\Produk;
use Inertia\Inertia;

class TokoController extends Controller
{
    public function index()
    {
        return Inertia::render('Publik/Toko/Indeks', [
            'produks' => Produk::latest()->get(),
        ]);
    }
}
<?php

use App\Http\Controllers\BerandaController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\Publik\ArtikelController; 
use Illuminate\Foundation\Application;
use App\Http\Controllers\Publik\AgendaController; 
use App\Http\Controllers\Publik\TentangKamiController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Rute Halaman Publik
Route::get('/', [BerandaController::class, 'index'])->name('beranda');
Route::get('/tentang-kami', [TentangKamiController::class, 'index'])->name('tentang-kami'); 
Route::get('/agenda', [AgendaController::class, 'index'])->name('agenda.index'); 
Route::get('/artikel', [ArtikelController::class, 'index'])->name('artikel.index');
Route::get('/artikel/{artikel:slug}', [ArtikelController::class, 'show'])->name('artikel.show');


// Rute-rute baru untuk Artikel
Route::get('/artikel', [ArtikelController::class, 'index'])->name('artikel.index');
Route::get('/artikel/{artikel:slug}', [ArtikelController::class, 'show'])->name('artikel.show');


// Rute untuk Area Anggota (setelah login)
Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\Publik\AgendaController;
use App\Http\Controllers\Publik\ArtikelController;
use App\Http\Controllers\Publik\BerandaController;
use App\Http\Controllers\Publik\TentangKamiController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Rute Publik
|--------------------------------------------------------------------------
*/
Route::get('/', [BerandaController::class, 'index'])->name('beranda');
Route::get('/tentang-kami', [TentangKamiController::class, 'index'])->name('tentang-kami');
Route::get('/jurnal', [ArtikelController::class, 'index'])->name('artikel.index');
Route::get('/jurnal/{artikel:slug}', [ArtikelController::class, 'show'])->name('artikel.show');
Route::get('/agenda', [AgendaController::class, 'index'])->name('agenda.index');


/*
|--------------------------------------------------------------------------
| Rute Area Anggota (Memerlukan Login)
|--------------------------------------------------------------------------
*/
Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
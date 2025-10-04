<?php

namespace App\Http\Controllers\Publik;

use App\Http\Controllers\Controller;
use App\Models\Agenda;
use Inertia\Inertia;

class AgendaController extends Controller
{
    public function index()
    {
        $agendaAkanDatang = Agenda::where('waktu_mulai', '>=', now())
                                 ->orderBy('waktu_mulai', 'asc')
                                 ->get();
                                 
        $arsipAgenda = Agenda::where('waktu_mulai', '<', now())
                               ->orderBy('waktu_mulai', 'desc')
                               ->paginate(5);

        return Inertia::render('Publik/Agenda/Indeks', [
            'agendaAkanDatang' => $agendaAkanDatang,
            'arsipAgenda' => $arsipAgenda,
        ]);
    }
}
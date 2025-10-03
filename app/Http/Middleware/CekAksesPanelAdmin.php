<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class CekAksesPanelAdmin
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        $user = $request->user();

        if ($user && !$user->hasAnyRole(['Super Admin', 'Pengurus'])) {
            abort(403, 'Anda tidak memiliki hak akses untuk masuk ke halaman ini.');
        }

        return $next($request);
    }
}
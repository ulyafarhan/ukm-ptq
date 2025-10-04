<?php

namespace App\Providers\Filament;

use App\Filament\Widgets\KasWidget;
use Filament\Http\Middleware\Authenticate;
use Filament\Http\Middleware\DisableBladeIconComponents;
use Filament\Http\Middleware\DispatchServingFilamentEvent;
use Filament\Pages;
use Filament\Panel;
use Filament\PanelProvider;
use Filament\Support\Colors\Color;
use Illuminate\Cookie\Middleware\AddQueuedCookiesToResponse;
use Illuminate\Cookie\Middleware\EncryptCookies;
use Illuminate\Foundation\Http\Middleware\VerifyCsrfToken;
use Illuminate\Routing\Middleware\SubstituteBindings;
use Illuminate\Session\Middleware\AuthenticateSession;
use Illuminate\Session\Middleware\StartSession;
use Illuminate\View\Middleware\ShareErrorsFromSession;
use App\Filament\Pages\Dashboard;
use App\Filament\Widgets\AgendaTerdekatWidget;
use App\Filament\Widgets\AnggotaBaruWidget;
use App\Filament\Widgets\StatsOverview;
use App\Filament\Widgets\TransaksiChart;

class AdminPanelProvider extends PanelProvider
{
public function panel(Panel $panel): Panel
    {
        return $panel
            ->default()
            ->id('admin')
            ->path('admin')
            ->login()
            ->colors([
                'primary' => Color::Amber,
            ])
            ->discoverResources(in: app_path('Filament/Resources'), for: 'App\\Filament\\Resources')
            ->discoverPages(in: app_path('Filament/Pages'), for: 'App\\Filament\\Pages')
            ->pages([
                // Ganti Pages\Dashboard::class menjadi Dashboard::class kustom kita
                Dashboard::class,
            ])
            ->discoverWidgets(in: app_path('Filament/Widgets'), for: 'App\\Filament\\Widgets')
            ->widgets([
                // Daftarkan semua widget baru di sini
                StatsOverview::class,
                TransaksiChart::class,
                AnggotaBaruWidget::class,
                AgendaTerdekatWidget::class,
            ])
            ->middleware([
                EncryptCookies::class,
                AddQueuedCookiesToResponse::class,
                StartSession::class,
                AuthenticateSession::class,
                ShareErrorsFromSession::class,
                VerifyCsrfToken::class,
                SubstituteBindings::class,
                DisableBladeIconComponents::class,
                DispatchServingFilamentEvent::class,
                // App\Http\Middleware\CekAksesPanelAdmin::class, // Pastikan baris ini dihapus atau dikomentari
            ])
            ->authMiddleware([
                Authenticate::class,
            ]);
    }
}
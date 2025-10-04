<?php

namespace Tests\Feature\Filament;

use App\Filament\Resources\ProdukResource;
use App\Filament\Resources\ProdukResource\Pages\CreateProduk;
use App\Filament\Resources\ProdukResource\Pages\EditProduk;
use App\Models\Produk;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Livewire\Livewire;
use Spatie\Permission\Models\Role;
use Tests\TestCase;

class ProdukResourceTest extends TestCase
{
    use RefreshDatabase;

    protected function setUp(): void
    {
        parent::setUp();
        // Cukup buat user dan login, tidak perlu role
        $this->actingAs(User::factory()->create());
    }

    public function test_dapat_menampilkan_halaman_daftar_produk(): void
    {
        $this->get(ProdukResource::getUrl('index'))->assertSuccessful();
    }

    public function test_dapat_membuat_produk_baru(): void
    {
        $produkBaru = Produk::factory()->make();

        Livewire::test(CreateProduk::class)
            ->fillForm([
                'nama' => $produkBaru->nama,
                'deskripsi' => $produkBaru->deskripsi,
                'harga' => $produkBaru->harga,
                'stok' => $produkBaru->stok,
            ])
            ->call('create')
            ->assertHasNoFormErrors();

        $this->assertDatabaseHas('produks', [
            'nama' => $produkBaru->nama,
            'harga' => $produkBaru->harga,
            'stok' => $produkBaru->stok,
        ]);
    }

    public function test_dapat_mengedit_data_produk(): void
    {
        $produk = Produk::factory()->create();
        $namaProdukUpdate = 'Baju PDH Keren';
        $hargaProdukUpdate = 150000;

        Livewire::test(EditProduk::class, [
            'record' => $produk->getRouteKey(),
        ])
            ->fillForm([
                'nama' => $namaProdukUpdate,
                'harga' => $hargaProdukUpdate,
                'stok' => $produk->stok,
            ])
            ->call('save')
            ->assertHasNoFormErrors();
        
        $this->assertDatabaseHas('produks', [
            'id' => $produk->id,
            'nama' => $namaProdukUpdate,
            'harga' => $hargaProdukUpdate,
        ]);
    }

    public function test_dapat_menghapus_data_produk(): void
    {
        $produk = Produk::factory()->create();

        Livewire::test(EditProduk::class, [
            'record' => $produk->getRouteKey(),
        ])
            ->callAction('delete');

        $this->assertDatabaseMissing('produks', [
            'id' => $produk->id,
        ]);
    }
}
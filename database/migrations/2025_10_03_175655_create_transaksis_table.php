<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('transaksis', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained('users')->comment('Pengguna yang mencatat transaksi');
            $table->date('tanggal');
            $table->text('keterangan');
            $table->enum('jenis', ['pemasukan', 'pengeluaran']);
            $table->bigInteger('jumlah')->comment('Jumlah dalam satuan mata uang terkecil, misal: Rupiah');
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('transaksis');
    }
};
<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('dokumens', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained('users')->comment('Pengguna yang mengunggah');
            $table->foreignId('kategori_dokumen_id')->constrained('kategori_dokumens');
            $table->string('judul');
            $table->string('nomor_dokumen')->nullable()->unique();
            $table->text('deskripsi')->nullable();
            $table->date('tanggal_dokumen');
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('dokumens');
    }
};
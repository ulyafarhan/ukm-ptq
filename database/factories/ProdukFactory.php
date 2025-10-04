<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Produk>
 */
class ProdukFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    // database/factories/ProdukFactory.php
    public function definition(): array
    {
        return [
            'nama' => $this->faker->words(3, true),
            'deskripsi' => $this->faker->sentence,
            'harga' => $this->faker->numberBetween(10000, 200000),
            'stok' => $this->faker->numberBetween(10, 100),
        ];
    }
}

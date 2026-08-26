<?php
namespace Database\Seeders;

use App\Models\Tasks;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    use WithoutModelEvents;

    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        User::factory()->create([
            'name'     => 'Admin',
            'email'    => 'admin@example.com',
            'password' => 'password123',
            'role'     => 'admin',
        ]);
        User::factory()->create([
            'name'     => 'Worker',
            'email'    => 'worker@example.com',
            'password' => 'password123',
            'role'     => 'worker',
        ]);

        User::factory()->count(19)->create([
            'role' => 'worker',
        ]);

        Tasks::factory()->count(40)->create();
    }
}

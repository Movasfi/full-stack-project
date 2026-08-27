<?php
namespace Database\Factories;

use App\Models\Tasks;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<Tasks>
 */
class TasksFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'title'       => fake()->sentence(4),
            'description' => fake()->paragraph(),
            'priority'    => fake()->randomElement(['low', 'medium', 'high']),
            'status'      => fake()->randomElement(['pending', 'in_progress', 'completed']),
            'created_by'  => User::inRandomOrder()->first()->id,
            'assigned_to' => User::where('role', 'worker')->inRandomOrder()->first()->id,
        ];
    }
}

<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use HasFactory;
    protected $fillable = [
        "name",
        "email",
        "password",
        "role",
    ];

    protected $hidden = [
        'password',
    ];

    protected $casts = [
        'password' => 'hashed',
    ];
    public function assignedTasks()
    {
        return $this->hasMany(Tasks::class, 'assigned_to');
    }

    public function createdTasks()
    {
        return $this->hasMany(Tasks::class, 'created_by');
    }
}

<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Tasks extends Model
{
    use HasFactory;
    protected $fillable = [
        "title",
        "description",
        "priority",
        "status",
        "created_by",
        "assigned_to",
    ];

    public function admin()
    {
        return $this->belongsTo(User::class, 'created_by');
    }

    public function worker()
    {
        return $this->belongsTo(User::class, 'assigned_to');
    }
}

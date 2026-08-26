<?php
namespace App\Http\Requests;

use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;
use phpDocumentor\Reflection\Types\This;

class StoreTasksRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *///
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'title'       => 'required|string|max:255',
            'description' => 'required|string',
            'priority'    => 'sometimes|in:low,medium,high',
            'status'      => 'sometimes|in:pending,in_progress,completed',
            'assigned_to' => 'exists:users,id|required',
            'created_by'  => 'exists:users,id|required',
        ];
    }
}

<?php
namespace App\Http\Controllers;

use App\Http\Requests\StoreTasksRequest;
use App\Http\Requests\UpdateTasksRequest;
use App\Models\Tasks;
use function Pest\Laravel\get;

class TasksController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {

        $allTasks = Tasks::with(['admin:id,name', 'worker:id,name'])->get();
        return response()->json([
            "message" => "all tasks",
            "data"    => $allTasks,
        ], 200);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreTasksRequest $request)
    {
        $validatedData = $request->validated();
        $task          = Tasks::create($validatedData);

        return response()->json([
            'message' => 'task is created',
            'data'    => $task,
        ], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(Tasks $task)
    {

        response()->json([
            'message' => 'sepcified task',
            'data'    => $task,
        ], 200);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateTasksRequest $request, Tasks $task)
    {
        $validatedData = $request->validated();
        $task->update($validatedData);
        return response()->json([
            'message' => 'task is updated ',
        ], 200);

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Tasks $task)
    {

        $task->delete();
        return response()->json([
            'message' => 'task is deleted ',
        ], 200);
    }
}

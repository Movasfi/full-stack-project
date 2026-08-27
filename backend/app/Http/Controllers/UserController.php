<?php
namespace App\Http\Controllers;

use App\Http\Requests\StoreUserRequest;
use App\Http\Requests\UpdateUserRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Gate;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(User $user)
    {
        $users = $user->all();

        return response()->json([
            'message' => "all users",
            "users"   => $users,
        ], 200);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreUserRequest $request)
    {
        $validData = $request->validated();

        User::create($validData);
        return response()->json([
            'message' => 'account is created',
        ], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(User $user)
    {
        return response()->json([
            "message" => "userData is sent",
            "data"    => $user,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateUserRequest $request, User $user)
    {
        $userExisted = $request->validated();
        $user->update($userExisted);

        return response()->json([
            "message" => "user is updated with name $user->name",
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(User $user)
    {
        $user->delete();
        return response()->json([
            "message" => "user is deleted with name $user->name",
        ]);
    }

    public function login(Request $request)
    {
        $credentials = $request->validate([
            'email'    => ['email', 'required'],
            'password' => ['string', 'required', 'min:8'],
        ]);

        if (! Auth::attempt($credentials)) {
            return response()->json([
                'message' => 'Invalid credentials',
            ], 401);
        }
        $user = User::where('email', $credentials['email'])->first();
        $request->session()->regenerate();
        return response()->json([
            'message' => 'Login successful',
            "user"    => $user,
        ], 200);
    }

    public function signup(Request $request)
    {
        $data = $request->validate([
            "name"     => ['string', 'required'],
            "email"    => ['email', 'required', 'unique:users,email'],
            "password" => ['string', 'required', 'min:8'],
        ]);

        User::create($data);

        return response()->json([
            "message" => "account is created",
        ], 201);
    }

    public function logout(Request $request)
    {
        Auth::logout();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return response()->json([
            'message' => 'Logout successful',
        ]);
    }
}

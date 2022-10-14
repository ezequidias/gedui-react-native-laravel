<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Resources\UserResource;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use App\Models\User;
use App\Http\Requests\Api\ChangePasswordRequest;

class UserController extends Controller
{
    /**
     * Get the authenticated User
     *
     * @return [json] user object
     */
    public function index(Request $request)
    {
        return new UserResource(auth()->guard('api')->user());
    }

}

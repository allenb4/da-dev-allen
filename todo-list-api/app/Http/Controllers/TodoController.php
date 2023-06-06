<?php

namespace App\Http\Controllers;

use App\Models\Todo;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Response;


class TodoController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        try {
            $todo = Todo::get();

            return response()->json(['message' => 'Data Fetch Successfully', 'list' => $todo], 200);
        } catch (\Throwable $err) {
            return response()->json([
                'status' => 'failed',
                'message' => 'Failed to Fetch Data'
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }


    }
    /**
     * Show the form for creating a new resource.
     */
    public function store(Request $request)
    {
            $payload = $request->only('description', 'isDone');

        try {

            $validator = Validator::make($payload, [
                'description' => 'required',
                'isDone' => 'required'
            ]);

            if($validator->fails()){
                return response()->json([
                    'error' => true,
                    'message' => $validator->errors()
                ]);
            }

            Todo::create($payload);

            return response()->json(['message' => 'Data Saved Succesfully'], 201);

        } catch (\Throwable $err) {
            return response()->json([
                'status' => 'failed',
                'message' => 'Failed to create Data'
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }

    }

    public function update(Request $request)
    {
        try {
            $todo = Todo::where('id', $request['id'])->update(['isDone' => $request['isDone']]);
            return response()->json(['message' => 'Updated Successfully'], 201);
        } catch (\Throwable $err) {
            return response()->json([
                'status' => 'failed',
                'message' => 'Failed to update Data'
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
        
        

    }

    public function destroy(Request $request)
    {
        try {
            $todo = Todo::where('id', $request['id'])->delete();
            return response()->json(['message' => 'Deleted Successfully'], 201);
        } catch (\Throwable $err) {
            return response()->json([
                'status' => 'failed',
                'message' => 'Failed to update Data'
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }
}

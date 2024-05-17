<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Blog;
class BlogController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $blog = Blog::all();
        return $blog;
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
       $blog = Blog::create($request->post());
        return response()->json([
            'blog' => $blog
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Blog $blog)
    {
        //consutlar metho
        $blog->fill($request->post())->save(); 
        return  response()->json([
            'blog' =>$blog
        ]);
        
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy( Blog $blog)
    {
        //porque no el id???
        $blog->delete();
        return response()->json([
            'mensaje'=>"Blog Eliminado"
        ]);
    }
}

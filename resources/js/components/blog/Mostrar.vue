<template>
    <div class="row">
        <div class="col-12 mb-2">
            <RouterLink :to='{name:"crearBlog"}' class="btn btn-primary">Crear Post</RouterLink>
        </div>
        <div class="col-12">
            <table class="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Título</th>
                        <th>Contenido</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="blog in blogs" :key="blog.id">
                        <td>{{ blog.id }}</td>
                        <td>{{ blog.titulo }}</td>
                        <td>{{ blog.contenido }}</td>
                        <td>
                            <router-link :to='{name:"editarBlog", query:{id:blog.id}}' cla ss="btn btn-info"><i class="fas fa-edit"></i></router-link>
                            <a type="button" @click="borrarBlog(blog.id)" class="btn btn-danger"><i class="fas fa-trash"></i></a>
                        </td>

                    </tr>
                    
                </tbody>
            </table>
        </div>
    </div>
   
</template>
<script>
import axios from 'axios'

    export default{
        name:"blogs",
        data(){
            return{
                blogs:[]
            }
        },
        mounted(){
            this.mostrarBlogs()
        },
        methods:{
            async mostrarBlogs(){
                await axios.get('/api/blog')
                    .then(response=>{
                        this.blogs = response.data
                    })
                    .catch(error=>{
                        this.blogs =  []
                    })
            },
            borrarBlog(id){
                if(confirm("Esta Seguro Eliminar")){
                    axios.delete(`/api/blog/${id}`)
                    .then(response=>{
                        this.mostrarBlogs()
                    })
                    .catch(error=>{
                        console.log(error)
                    })
                }
            }
        }
    }
</script>
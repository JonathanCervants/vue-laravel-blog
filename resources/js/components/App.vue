<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
    <div>
        <h1>ssss</h1>
        <ul>
            <li> <a href="/">Home</a></li>
            <li> <a href="/contacto">Contacto</a></li>
          
            <RouterLink to="/mostrar">CXXontacto</RouterLink>
            <br>
            <RouterLink to="/contacto">Contacto</RouterLink>
            
        </ul>
        <RouterView>  </RouterView>
    </div>
</template>
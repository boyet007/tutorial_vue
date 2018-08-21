<template>
  <div>
    
<!-- <show-blogs></show-blogs>
<list-blogs></list-blogs> -->

<!-- kalau pakai route harus deklaariskan router view di app vue -->
  <app-header></app-header>
  <router-view></router-view>
  </div>
</template>

<script>

//pakai router hilangkan komponen aja

// import addBlog from './components/addBlog.vue';
// import showBlogs from './components/showBlogs.vue';
// import listBlogs from './components/listBlog.vue';

//pakai componen app-header
import header from './components/header.vue';

export default {
  components: {
    // 'add-blog': addBlog,
    // 'show-blogs': showBlogs,
    // 'list-blogs': listBlogs
    'app-header' :header
  }
}
</script>

<style>
 
</style>

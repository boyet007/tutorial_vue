<template>
  <div>
    <!-- <add-blog></add-blog> -->
    <show-blog></show-blog>
  </div>
</template>

<script>
import addBlog from './components/addBlog.vue';
import showBlog from './components/showBlog.vue';

export default {
  components: {
    'add-blog': addBlog,
    'show-blog' : showBlog
  }
}
</script>

<style>

</style>

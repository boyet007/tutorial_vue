<template>
  <div v-theme:column="'narrow'" id="show-blogs">
      <h1>List Blog Titles</h1>
      <input type="text" v-model="search" placeholder="search blogs" name="" id="">
      <div v-for="blog in filteredBlogs" class="single-blog">
          <h2 v-rainbow>{{ blog. title | to-uppercase }} |</h2>
          <article>{{ blog.body | snippet }}</article>
      </div>

  </div>
</template>

<script>

import searchMixin from '../mixins/searchMixin';
export default {
    data() {
        return {
            blogs: [],
            search: ''
        }
    },
    methods: {
        
    },

    //created di jalankan ketika komponen dibuat pertama kali.
    created() {
        this.$http.get('https://jsonplaceholder.typicode.com/posts').then(function(data) {
            this.blogs = data.body.slice(0, 10);
        });        
    },
    computed: {
        
    },
    //filter lokal saja
    filters: {
        'to-uppercase': function(value) {
            return value.toUpperCase();
        }
    },

    //local directives
    directives: {
        'rainbow': {
            bind(el, binding, vnode) {
                 el.style.color = "#" + Math.random().toString().slice(2,8);
            }
        }
    },
    mixins: [searchMixin]
}
</script>

<style>
    #show-blogs{
        max-width: 800px;
        margin: 0 auto;
    }

    #show-blogs input[type="text"]{
        width: 100%;
    }

    .single-blog{
        padding: 20px;
        margin: 20px 0;
        box-sizing: border-box;
        background: #eee;
    }
</style>

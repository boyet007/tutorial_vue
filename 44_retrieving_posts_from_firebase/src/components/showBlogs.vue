<template>
  <div v-theme:column="'narrow'" id="show-blogs">
      <h1>All Blog Articles</h1>
      <input type="text" name="" v-model="search" placeholder="search blogs" id="">
      <div v-for="blog in filteredBlogs" class="single-blog">
          <router-link v-bind:to="'/blog/' + blog.id"><h2>{{ blog. title | to-uppercase }}</h2></router-link>
          <article>{{ blog.content | snippet }}</article>
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
        this.$http.get('https://belajarvue-9c342.firebaseio.com/posts.json').then(function(data) {
            return data.json();
        }).then(function(data){
            // console.log(data);
            var blogsArray = [];
            for (let key in data) {
                // console.log(data[key]);
                data[key].id = key;
                blogsArray.push(data[key]);
            }
            //console.log(blogsArray);
            this.blogs = blogsArray;
        });        
    },
    computed: {
        
    },
    filters: {
        toUppercase(value) {
            return value.toUpperCase();
        }
    },
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

    .single-blog{
        padding: 20px;
        margin: 20px 0;
        box-sizing: border-box;
        background: #eee;
    }
</style>

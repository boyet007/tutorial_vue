<template>
  <div id="add-blog">
      <h2>Add a new Blog Post</h2>
      <form>
          <label for="">Blog Title: </label>
          <input type="text" v-model.lazy="blog.title" name="" required id="">
          <label for="">Blog Content</label>
          <textarea name="" id="" v-model.lazy="blog.content" cols="30" rows="10"></textarea>
          <div id="checkboxes">
              <label for="">Ninja</label>
              <input type="checkbox" name="" value="ninjas" v-model="blog.categories" id="">
              <label for="">Wizards</label>
              <input type="checkbox" name="" value="wizards" v-model="blog.categories" id="">
              <label for="">Mario</label>
              <input type="checkbox" name="" value="mario" v-model="blog.categories" id="">
              <label for="">Cheese</label>
              <input type="checkbox" name="" value="cheese" v-model="blog.categories" id="">
            </div>
      </form>
      <div id="preview">
          <h3>Preview Blog</h3>
          <p>Blog Title: {{ blog.title }} </p>
          <p>Blog Content:</p> <p>{{ blog.content }} </p>
          <p>Blog Categories:</p>
          <ul>
              <li v-for="category in blog.categories">{{ category }}</li>
          </ul>
      </div>

  </div>
</template>

<script>
export default {
    data() {
        return {
            blog: {
                title: '',
                content: '',
                categories: []
            }

        }
    }
}
</script>

<style>
    #add-blog *{
        box-sizing: border-box;
    }

    #add-blog{
        margin: 20px auto;
        max-width: 500px;
    }
    label{
        display: block;
        margin:20px 0 10px;
    }
    input[type="text"], textarea{
        display: block;
        width: 100%;
    }
    #preview{
        padding: 10px 20px;
        border: 1px dotted #ccc;
        margin:30px 0;
    }
    h3{
        margin-top:10px;
    }
    #checkboxes input{
        display: inline-block;
        margin-right:10px;
    }

    #checkboxes label{
        display: inline-block;
    }
</style>

<template>
<div>
    <nav>
        <ul>
            <!-- router linke pengganti a href -->
            <!-- exact untuk toggle background ketika link active berubah -->
            <li><router-link to="/" exact="">Blog</router-link></li>
            <li><router-link to="/add" exact="">Add a New Blog</router-link></li>
            <!-- <li><router-link to="/add">Add a New Blog</li> -->
        </ul>
    </nav>
</div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
nav {
    background: #444;
    padding: 14px 0;
    margin-bottom: 40px;
}

a {
    color: #fff;
    text-decoration: none;
    padding:6px 8px;
    border-radius:10px;
}

li {
    display: inline-block;
    margin: 0 10px;
}

ul {
    list-style-type: none;
    text-align: center;
    margin: 0;
}

.router-link-active{
    background: #eee;
    color: #444;
}
</style>

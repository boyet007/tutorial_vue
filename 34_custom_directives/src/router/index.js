import addBlogs from '../components/addBlog.vue';
import showBlogs from '../components/showBlogs.vue';
import singleBlog from '../components/singleBlog.vue';


export default [
    { path: '/', component: showBlogs },
    { path: '/add', component: addBlogs },
    { path: '/blog/:id', component: singleBlog}
];
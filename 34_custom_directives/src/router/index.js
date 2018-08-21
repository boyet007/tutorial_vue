import addBlogs from '../components/addBlog.vue';
import showBlogs from '../components/showBlogs.vue';
import listBlogs from '../components/listBlog.vue';

export default [
    { path: '/', component: showBlogs },
    { path: '/add', component: addBlogs }
];
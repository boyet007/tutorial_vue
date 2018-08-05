<template>
    <div>
        <form-helper>
            <div slot="form-header">
                <h3>Form Two - Log in</h3>
                <p>Enter your details to log in</p>
            </div>
            <div slot="form-fields">
                <input type="text" name="" placeholder="username" required id="">
                <input type="password" name="" placeholder="password" required id="">
            </div>
            <div slot="form-controls">
                <button v-on:click="handleSubmit">Login</button>
            </div>
        </form-helper>
    </div>
</template>

<script>

import formHelper from './formHelper.vue'

export default {
    components: {
        'form-helper': formHelper
    },
    data() {
        return {
            counter: 0
        }
    },
    methods: {
        handleSubmit: function() {
            alert('thanks for logging in (form-two)');
        }
    } 
}
</script>

<style>
    body{
        margin: 0;
        
    }
</style>


<template>
    <div class="login container">
        <form class="card-panel"
              @submit.prevent="login">
            <h2 class="center deep-purple-text">Login</h2>
            <div class="field">
                <label for="email">Email:</label>
                <input type="email" 
                       name="email" 
                       v-model="email"/>
            </div>
            <div class="field">
                <label for="password">Password:</label>
                <input type="password" 
                       name="password"
                       v-model="password"/>
            </div>
            <div class="field">
                <button class="btn deep-purple">Login</button>
            </div>
        </form>
    </div>
</template>


<script>
export default {
    name: 'Login',
    data(){
        return {

        }
    },
    methods: {
        login(){
            console.log('login method called');
        }
    }
}
</script>

<style scoped>

</style>

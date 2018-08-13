<template>
    <div class="navbar">
        <nav class="deep-purple darken-1">
            <div class="container">
                <router-link :to="{ name: 'GMap' }" 
                             class="brand-logo left">GeoNinjas!</router-link>
                <ul class="right">
                    <li><router-link :to="{ name: 'Signup' }">Signup</router-link></li>
                    <li><router-link :to="{ name: 'Login' }">Login</router-link></li>
                    <li><a @click="logout">Logout</a></li>
                </ul>
            </div>
        </nav>
    </div>
</template>


<script>
import firebase from 'firebase'

export default {
    name: 'Navbar',
    data(){
        return{

        }
    },
    methods:{
        logout(){
            if(this.email && this.password){
                firebase.auth().signInWithEmailAndPassword(this.email, this.password)
                .then(user => {
                    console.log(user);
                }).cath(err => {
                    this.feedback = err.message;
                });
                this.feedback = null
            }else{
                this.feedback = 'Please fill in the email and password fields : )'
            }
            console.log('logout called');
            firebase.auth().signOut().then(() => {
                this.$router.push({ name: 'Login'});
            });
        }
    }
}
</script>


<style scoped>

</style>


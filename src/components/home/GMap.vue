<template>
    <div class="map">
        <div class="google-map" id="map"></div>
    </div>
</template>

<script>
import firebase from 'firebase';
import db from '@/firebase/init';

export default {
    name: 'GMap',
    data(){
        return{
            lat: 53,
            lng: -2
        }
    },
    methods:{
        renderMap(){
            const map = new google.maps.Map(document.getElementById('map'),{
                center: {lat: this.lat, lng: this.lng},
                zoom: 6,
                maxZoom: 15,
                minZoom: 3,
                streetViewControl: false
            });
            db.collection('users').get().then(users => {
                users.docs.forEach(doc => {
                    let data = doc.data();
                    if(data.geolocation){
                        let marker = new google.maps.Marker({
                            position: {
                                lat: data.geolocation.lat,
                                lng: data.geolocation.lng
                            },
                            map: map
                        });
                        //add click event to marker
                        marker.addListener('click', () =>{
                         console.log(doc.id);
                        });
                    }
                })
            });
        },
        getUserLocation(){
            if(navigator.geolocation){
                navigator.geolocation.getCurrentPosition(pos => {
                    this.lat = pos.coords.latitude;
                    this.lng = pos.coords.longitude;

                    //find the user record and then update geocords
                    db.collection('users').where('user__id', '==', 'user.uid').get()
                    .then(snapshot => {
                        snapshot.forEach((doc) => {
                            console.log(doc.id);
                            db.collection('users').doc(doc.id).update({
                                geolocation: {
                                    lat: pos.coords.latitude,
                                    lng: pos.coords.longitude
                                }
                            })
                        });
                    }).then(() => {
                        this.renderMap();
                    });
                }, (err) => {
                    console.log(err);
                    this.renderMap();
                }, { maximumAge: 6000, timeout: 3000});
            }else{
                // positon center by default values
                this.renderMap();
            }

        },
    },
    mounted(){
        this.getUserLocation();
        //this.renderMap();
        console.log(firebase.auth().currentUser);
    }
}
</script>

<style scoped>
.google-map{
    width: 100%;
    height: 100%;
    margin: 0 auto;
    background: #fff;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
}

</style>

<template>
    <div class="map">
        <div class="google-map" id="map"></div>
    </div>
</template>

<script>
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
                center: {lat: this.lat, lng: this.lng}
            });

        }
    },
    mounted(){
        renderMap();
    }
}
</script>


<style scoped>

</style>

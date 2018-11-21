<template>
  <div id="location">
    <div>
      <h1>Location</h1>
    </div>
    <div>
      <span class="mdl-chip mdl-chip--contact">
          <span class="mdl-chip__contact mdl-color--teal mdl-color-text--white">La</span>
          <span id="latitude" class="mdl-chip__text">{{lat}}</span>
      </span>
    </div>
    <div>
      <span class="mdl-chip mdl-chip--contact">
          <span class="mdl-chip__contact mdl-color--teal mdl-color-text--white">Lo</span>
          <span id="longitude" class="mdl-chip__text">{{long}}</span>
      </span>
    </div>
    <back></back>
  </div>
</template>

<script>
  import back from './back.vue';
  export default {
    components: {
      back
    },
    methods: {
      onDeviceReady: function() {
        navigator.geolocation.watchPosition(
            position => {
              this.long = position.coords.longitude;
              this.lat = position.coords.latitude;
é            },
            positionError => () => {
                alert('error happened in locating');
            },
            { maximumAge: 500, timeout: 3000, enableHighAccuracy: true }
        );
      }
    },
    created: function() {
      document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    data: function() {
      return {
        long: this.longitude,
        lat: this.latitude
      }
    }
  }
</script>

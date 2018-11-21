<template>
  <div id="home">
    <div>
      <h1>Battery</h1>
    </div>
    <div id="battery-div">
      <div id="battery" class="mdl-shadow--4dp">
        <div id="battery-charge"></div>
        <h2>100%</h2>
      </div>
      <div id="plugged">
        <h2>The device is <span id="negation-state"></span> actually plugged</h2>
      </div>      
    </div>
    <back></back>
  </div>
</template>

<script>
  import back from './back.vue';
  import $ from "jquery";
  export default {
    components: {
      back
    },
    methods: {
      onDeviceReady: function() {
        function changeColorBatteryCharge(batteryLevel) {
          let $battery = $('#battery-charge');
          $battery.removeClass(['high', 'medium', 'low']);
          if (batteryLevel < 50 && batteryLevel >= 20) {
              $battery.addClass('medium')
          } else if (batteryLevel < 20) {
              $battery.addClass('low')
          } else {
              $battery.addClass('high')
          }
        }

        function changeStateBatteryCharge(batteryLevel) {
          let $battery = $('#battery-charge');
          let batteryLevelStr = `${batteryLevel}%`;
          $('#battery h2').text(batteryLevelStr)
          $battery.height(batteryLevelStr)
          if (batteryLevel < 99) {
              $battery.css('border-radius', '0px');
          }
        }

        function changeStatePlugged(isPlugged) {
          isPlugged ? null : $('#negation-state').text('not');
        }

        function onBatteryStatus(status) {
          changeStatePlugged(status.isPlugged)
          changeStateBatteryCharge(status.level);
          changeColorBatteryCharge(status.level);
          console.log(`Battery Level: ${status.level}`);
        }
        window.addEventListener("batterystatus", onBatteryStatus, true);
      },
    },
    mounted: function() {
      document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    data: () => {
      return {
      }
    }
  }
</script>


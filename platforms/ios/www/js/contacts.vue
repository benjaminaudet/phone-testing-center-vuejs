<template>
  <div id="home">
    <div>
      <h1>Contacts</h1>
    </div>
    <div>
        <table id="contacts" class="mdl-data-table mdl-js-data-table mdl-shadow--2dp">
        <thead>
        <tr>
            <th class="mdl-data-table__cell--non-numeric">Name</th>
            <th>Phone Number</th>
        </tr>
        </thead>
        <tbody>
        </tbody>
    </table>
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
    onDeviceReady: function () {

    },
    created: function() {
      document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    data: () => {
      return {
      }
    }
  }
</script>

<style scoped>

</style>


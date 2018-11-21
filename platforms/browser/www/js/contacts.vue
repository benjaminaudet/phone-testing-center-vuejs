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
          <tr v-for="contact of contacts" v-if="contact.displayName && contact.phoneNumbers">
            <td class="mdl-data-table__cell--non-numeric">{{contact.displayName.trim().split(' ')[0]}}</td>
            <td class="mdl-data-table__cell--non-numeric">{{contact.phoneNumbers[0].value}}</td>
          </tr>
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
    methods: {
      onSuccess: function(contacts) {
        console.log(contacts)
        this.contacts = contacts;
      },
      onDeviceReady: function () {
        var fields = [navigator.contacts.fieldType.displayName, navigator.contacts.fieldType.phoneNumbers];
        navigator.contacts.find(fields, this.onSuccess);
      },
    },
    created: function() {
      document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    data: function() {
      return {
        contacts: this.contacts
      }
    }
  }
</script>

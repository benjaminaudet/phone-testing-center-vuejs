<template>
  <div id="incremental">
    <div>
      <h1>Incremental</h1>
    </div>
    <div>
      <div>
        <p>{{value.numberOne}}</p>
      </div>
      <div class="button">
        <button v-on:click="increment(1)" class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored">
          Add
        </button>
      </div>
            <div>
        <p>{{value.numberTwo}}</p>
      </div>
      <div class="button">
        <button v-on:click="increment(2)" class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored">
          Add
        </button>
      </div>
            <div>
        <p>{{value.numberThree}}</p>
      </div>
      <div class="button">
        <button v-on:click="increment(3)" class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored">
          Add
        </button>
      </div>
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
      increment: function(number) {
        switch (number) {
          case 1:
            this.value.numberOne++;
            break;
          case 2:
            this.value.numberTwo++;
            break;
          case 3:
            this.value.numberThree++;
            break;
          default:
            break;
        }
      }
    },
    data: function() {
      return {
        value: {
          numberOne: 4,
          numberTwo: 8,
          numberThree: 2,
        }
      }
    }
  }
</script>

<style>

  .dish {
    background-color: grey;
    width           : 100%;
    color           : red;
    font-weight     : bold;
  }

</style>

<template>
  <div class="dish">
    {{dish}}
  </div>

</template>

<script>

  export default {
    data () {
      return {
        dish: "hamberger"
      }
    }
  }

</script>
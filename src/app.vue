<style>

  /**:root {
    --main-bg-color: pink;
  }**/

  @import "./styles/app.css";

  .dish {
    background-color: var(--main-bg-color);
    width           : 100%;
    color           : red;
    font-weight     : bold;

    & .knife {
      background-color: blue;
      color: white;
    }
  }

</style>

<template>
  <div class="dish">
    {{dish}}
    <div class="knife">
      foo foo foo foo
    </div>
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
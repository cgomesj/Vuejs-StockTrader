<template>
  <div class="home">
    <div class="row">
      <div class="col">
        <h1>Trade or View your Portfolio</h1>
        <h6>You may Save & Load your data</h6>
        <h6>Click on 'End Day' to begin a new day!</h6>
        <hr />
        <p>Your funds: {{ funds | currency }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import * as types from "../store/types";
import { mapGetters } from "vuex";

export default {
  name: "home",

  computed: {
    ...mapGetters({
      funds: types.GET_FUNDS
    })
  }
};
</script>

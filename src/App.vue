<template>
  <div>
    <Navbar />
    <b-container class="bv-example-row">
      <router-view />
    </b-container>
  </div>
</template>
<script>
import Navbar from "./components/layout/Navbar.vue";
export default {
  components: {
    Navbar,
  },
};
</script>
<style scoped></style>

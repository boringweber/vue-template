<template>
  <div id="app">
    <router-view />
    <loading v-show="isShowLoading"></loading>
  </div>
</template>
<script>
import loading from "@/components/loading.vue";
export default {
  name: "app",
  components: {
    loading
  },
  computed: {
    isShowLoading() {
      return  this.$store.state.common.isShowLoading;
    }
  }
};
</script>
<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding-top: 100px;
}
</style>

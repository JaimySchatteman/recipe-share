<template>
  <div class="header w-full flex items-center justify-center pb-2" ref="navbar">
    <router-link :to="{ name: 'recipes'}" class="mt-2">
      <img src="../assets/images/logo.svg" alt="logo" class="w-16 mr-8">
    </router-link>
  </div>
</template>

<script>
import EventBus from "@/main";

export default {
  name: "Header",
  methods: {
    sendHeightOfNavbar() {
      EventBus.$emit('heightNavbarAnswer', this.$refs.navbar.clientHeight);
    }
  },
  mounted() {
    EventBus.$on('getHeightOfNavbar', () => {
      this.sendHeightOfNavbar();
    });
  }

}
</script>

<style scoped>

div.header {
  background-color: #fff;
  box-shadow: 5px 0 15px rgba(50, 50, 0, 0.1);

}

</style>
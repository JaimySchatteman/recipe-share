<template>
  <div class="header w-full px-4 py-2">
    <img src="../assets/images/logo.svg" alt="logo" class="w-16">
    <router-link :to="{ name: 'recipes'}" ></router-link>

  </div>
</template>

<script>


export default {
name: "Header"
}
</script>

<style scoped>

div.header {
  background-color: #FFFADD;

}

</style>
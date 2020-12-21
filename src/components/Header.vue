<template>
  <div class="header w-full flex items-center justify-center pb-2">
    <router-link :to="{ name: 'recipes'}" class="mt-2">
      <img src="../assets/images/logo.svg" alt="logo" class="w-16 mr-8">
    </router-link>
  </div>
</template>

<script>


export default {
name: "Header"
}
</script>

<style scoped>

div.header {
  background-color: #edffeb;
  box-shadow: 5px 0 15px rgba(50, 50, 0, 0.1);

}

</style>
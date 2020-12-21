<template>
  <div class="header w-full flex items-center justify-center">
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
  background-color: #FFFADD;
}

a {
  color: #43803D;
  font-size: 1.3rem;
  font-weight: 700;
}

a:hover {
  color: #92C24C;
}

a.active {
  color: #92C24C;

}

</style>
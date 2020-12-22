<template>
  <router-link :to="{name: 'detail', params: {uid: recipe.uid}}" tag="div" class="recipe-card">
    <img :src="recipe.data.image.url" :alt="recipe.data.image.alt" class="w-full">
    <div class="px-7 pt-6 pb-7">
      <h1 class="text-xl sm:text-2xl">{{ recipe.data.name[0].text }}</h1>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "RecipesCard",
  props: ['recipe']
}
</script>

<style scoped>
h1 {
  color: #165412;
  font-weight: 700;
  white-space: nowrap;
  overflow: hidden;
  display: block;
  text-overflow: ellipsis;
}

img {
  border-top-left-radius: 1.5rem;
  border-top-right-radius: 1.5rem;
}

div.recipe-card {
  border-radius: 1.5rem;
  z-index: 9;
}

div.recipe-card {
  box-shadow: 2px 2px 18px rgba(30, 30, 0, 0.25);
}

div.recipe-card:hover {
  box-shadow: 2px 2px 22px rgba(70, 70, 0, 0.40);
}

</style>
<template>
  <router-link :to="{name: 'detail', params: {uid: recipe.uid}}" tag="div" class="recipe-card">
    <img :src="recipe.data.image.url" :alt="recipe.data.image.alt" class="w-full">
    <div class="px-6 pb-8">
      <h1 class="mt-4">{{ recipe.data.name[0].text }}</h1>
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
  font-size: 1.5rem;
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
  background-color: #fff;
  border-radius: 1.5rem;
  z-index: 9;
}

div.recipe-card {
  box-shadow: 2px 2px 15px rgba(50, 50, 0, 0.10);

}

div.recipe-card:hover {
  box-shadow: 2px 2px 22px rgba(50, 50, 0, 0.15);

}



</style>
<template>
  <div class="w-full h-screen grid grid-cols-3 gap-16 px-16 mt-12">
    <router-link v-for="recipe in recipes" :key="recipe.id" :to="{name: 'detail', params: {uid: recipe.uid}}" tag="div">
      <img :src="recipe.data.image.url" :alt="recipe.data.image.alt" class="w-full">
      <div class="">
        <h1>{{ recipe.data.name[0].text }}</h1>

      </div>

    </router-link>
  </div>
</template>

<script>

export default {
  name: "Recipes",
  data: function () {
    return {
      recipes: []
    }
  },
  methods: {
    getRecipes: function () {
      this.$prismic.client.query(
          this.$prismic.Predicates.at('document.type', 'recipe')
      ).then((data) => {
        console.log(data);
        data.results.forEach((recipe) => {
          console.log(recipe);
          this.recipes.push(recipe);
        });
    });
    }
  },
  created: function () {
    this.getRecipes();

  }
}
</script>

<style scoped>

</style>
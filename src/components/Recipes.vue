<template>
  <div class="w-full px-8 lg:px-12 xl:px-16 mt-16 mb-16">
    <div class="flex md:ml-4 text-3xl">
      <img src="../assets/images/recipe-book.svg" alt="favorite-recipes" class="w-7 sm:w-10 lg:w14">
      <h1 class="ml-4 text-2xl sm:text-3xl md:text-4xl">My Favorite Recipes</h1>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-12 xl:gap-16 2xl:gap-24 mt-8">
      <recipes-card v-for="recipe in recipes" :key="recipe.id" :recipe="recipe"/>
    </div>
  </div>
</template>

<script>
import RecipesCard from "@/components/RecipesCard";

export default {
  name: "Recipes",
  components: {
    RecipesCard
  },
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
        data.results.forEach((recipe) => {
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

h1 {
  font-weight: 700;
  color: #165412;
}

</style>
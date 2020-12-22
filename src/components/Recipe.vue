<template>
  <div v-if="recipe != null" class="recipe flex flex-col" :style="cssVars">
    <img :src="recipe.data.image.url" :alt="recipe.data.image.alt" class="background-image h-full">
    <div class="recipe-information -mt-8 md:-mt-16 lg:-mt-20 xl:-mt-32 mx-8 md:mx-16 lg:mx-24 xl:mx-42 2xl:mx-60 px-8 sm:px-12 py-10">
        <h1 class="text-4xl">{{ recipe.data.name[0].text }}</h1>
        <div class="grid grid-cols-1 md:grid-cols-3 mt-2 md:mt-8">

          <div class="col-start-1 col-end-2 md:col-start-1 md:col-end-2 flex flex-col sm:flex-row-reverse justify-between pr-8 md:flex-col">
            <div class="recipe-properties flex flex-col mx-0 md:mx-4 mt-0 sm:mt-8 md:mt-0">
              <div class="flex mt-4 py-3">
                <img src="../assets/images/clock.svg" alt="estimated-time-icon" class="w-8 mr-6">
                <h3>{{ recipe.data['estimated-time-minutes'] }} minutes</h3>
              </div>
              <div class="flex mt-4 py-3">
                <img src="../assets/images/chef.svg" alt="difficulty)icon" class="w-8 mr-6">
                <h3>{{ recipe.data['difficulty-level'][0].text }}</h3>
              </div>
              <div class="flex mt-4 py-3">
                <img src="../assets/images/vegan.svg" alt="vegan-icon" class="w-8 mr-6">
                <div v-if="recipe.data.vegetarian" class="is-vegetarian">
                  <h3>vegetarian</h3>
                </div>
                <div v-else class="not-vegetarian">
                  <h3>non-vegetarian</h3>
                </div>
              </div>
            </div>

            <div class="recipe-ingredients mt-6 md:mx-4 mt-0">
              <h2>Ingredients</h2>
              <ul>
                <li v-for="(ingredient, index) in recipe.data['recipe-ingredients']" :key="index" class="py-2">
                    <span>{{ ingredient.ingredients.data.quantity }}</span>
                    <span v-if="ingredient.ingredients.data.hasOwnProperty('unit')" class="ml-2">{{ ingredient.ingredients.data.unit[0].text }}</span>
                    <span class="ingredient ml-2">{{ ingredient.ingredients.data.name[0].text }}</span>
                </li>
              </ul>
            </div>
          </div>


          <div class="steps col-start-1 col-end-2 md:col-start-2 md:col-end-4 md:row-start-1 md:row-end-3 flex flex-col px-0 md:px-4 mt-12 md:mt-0">
            <div class="py-3"  v-for="(recipeStep, index) in recipe.data.steps" :key="index">
              <h2>step {{ index + 1 }}</h2>
              <p>{{ recipeStep.step[0].text }}</p>
            </div>
          </div>

        </div>
    </div>
  </div>
</template>

<script>
import EventBus from "@/main";

export default {
  name: "Recipe",
  props: ['uid'],
  data: function() {
    return {
      navHeightCssProperty: '',
      recipe: null
    }
  },
  computed: {
    cssVars() {
      return {
        '--height': this.navHeightCssProperty + 'px'
      }
    }
  },
  methods: {
    getRecipe: function (uid) {
      this.$prismic.client.getByUID('recipe', uid, { fetchLinks: ['ingredient.name', 'ingredient.quantity', 'ingredient.unit'] }).then((response) => {
        this.recipe = response;
      });
    }
  },
  mounted: function () {
    const that = this;
    EventBus.$on('heightNavbarAnswer', function (height) {
      that.navHeightCssProperty = height;
    });
    EventBus.$emit('getHeightOfNavbar', true);
  },
  created() {
    this.getRecipe(this.uid);
  }

}
</script>

<style scoped lang="less">

@media(min-width: 1280px) {
  .recipe {
    height: calc(100vh - var(--height));
  }
}

.background-image {
  object-fit: cover;
}

h1 {
  font-weight: 700;
}

h2, h3 {
  font-weight: 600;
}

li span.ingredient, div h3 {
  color: #666666;

}

h1, h2, li span {
  color: #165412;

}

h1 {
  font-weight: 600;
  color: #165412;
}

h2 {
  font-size: 1.2rem;
  font-variant: all-small-caps;
  font-weight: 600;
  color: #165412;

}

h3 {
  font-size: 1.2rem;
  font-weight: 600;

}

p {
  font-family: "Source Serif Pro", serif;
  color: #666666;
}

li span {
  font-weight: 600;
}

li span.ingredient {
  font-weight: 400;
}


.recipe-information {
  border-radius: 1.75rem;
  z-index: 20;
  background-color: #edffeb;
  box-shadow: 5px 5px 20px rgba(50, 50, 0, 0.1);
}

</style>
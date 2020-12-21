import Recipes from "@/components/Recipes";
import Recipe from "@/components/Recipe";


export const routes = [
    { path: '', name: 'recipes', component: Recipes },
    { path: '/detail/:uid', name: 'detail', component: Recipe, props: true },

    { path: '*', redirect: { path: '' } }
];
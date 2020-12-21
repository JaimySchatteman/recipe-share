<template>
  <div id="app">
    <Header/>
    <transition name="router-anim">
      <router-view></router-view>
    </transition>
    <Footer/>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default {
  name: 'App',
  components: {
    Header,
    Footer

  }
}
</script>

<style>

#app {
  font-family: "Source Sans Pro", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

}

.router-anim-enter-active {
  animation: coming 1s;
  animation-delay: 0.15s;
}

.router-anim-leave-active {
  animation: going 0.3s;
}

@keyframes going {
  from {
    transform: translateX(0);
    opacity: 1;
  }
  to {
    transform: translateX(-30px);
    opacity: 0;
  }

}

@keyframes coming {
  from {
    transform: translateX(30px);
    opacity: 0;

  }
  to {
    transform: translateX(0);
    opacity: 1;

  }

}

</style>

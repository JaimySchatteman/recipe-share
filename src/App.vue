<template>
  <div id="app">
    <Header/>
    <transition name="router-anim">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import Header from "@/components/Header";

export default {
  name: 'App',
  components: {
    Header
  }
}
</script>

<style>
html {
  background-color: #F2FFEC;

}

#app {
  font-family: "Source Sans Pro", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #F2FFEC;

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

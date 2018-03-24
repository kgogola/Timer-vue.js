<template>
  <body>
    <timerContainer></timerContainer>
  </body>
</template>


<script>
import time from "./time.vue";

export default {
  components: {
    timerContainer: time
  }
};
</script>


<style>
body {
  background-color: black;
}
</style>

<!--

-it is good composition of my project? For example should i put all buttons to 'time.vue' or
it's better to create new component for each button ?

-i'm not sure that I'm good understand it ; 

A)                               B) FILE.vue
var vm = new Vue({
el: #INSTANCE ELEMENT
...
...
})


A) and B) it's as well vue objects yeah? A) is created in HTML or in JS file, and B
is also vue object but in seperate file which i will import to JS file ? My thinking is OK or 
there is some diffrentes which i have to know ?
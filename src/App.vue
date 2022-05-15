<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>


export default {
  name: 'App',
  components: {}
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap');

body{
  height: 100%;
  line-height: 1;
  margin: 0;
  padding: 0;
}
#app{ 
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  color: #333333;
  font-size: 14px;   
 
 
}
</style>

<template>
  <v-app>
    <router-view></router-view>
  </v-app>
</template>

<script>
export default {
  name: "App",
};
</script>
<style>
body {
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  line-height: 1.6;
  background: #e8f7f0;
}
div.v-avatar.blue-grey {
  border-radius: 50% !important;
}
.col {
  flex-basis: 100%;
}
a {
  text-decoration: none;
}
</style>

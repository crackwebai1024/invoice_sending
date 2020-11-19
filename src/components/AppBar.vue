<template>
  <v-app-bar app color="blue-grey" darken-3>
    <v-spacer></v-spacer>
    <router-link v-for="btn in navbtns" :to="btn.link" v-bind:key="btn.name">
      <v-btn class="mr-3">
        <v-icon class="mr-1" color="white" size="medium">{{ btn.icon }}</v-icon>
        {{ btn.name }}
      </v-btn>
    </router-link>
  </v-app-bar>
</template>
<script>
export default {
  name: "AppBar",
  data() {
    return {
      navbtns: [
        {
          link: "/",
          icon: "fas fa-home",
          name: "Dashboard",
        },
        {
          link: "/invoice",
          icon: "fas fa-file",
          name: "Invoice",
        },
      ],
    };
  },
};
</script>
<style scoped>
.v-btn {
  background-color: rgba(0, 0, 0, 0.05) !important;
}
</style>

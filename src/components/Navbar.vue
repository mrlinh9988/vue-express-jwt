<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <router-link class="navbar-brand" to="/">mrLinh</router-link>|
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <router-link class="nav-link" to="/">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/about">About</router-link>
        </li>
        <li class="nav-item" v-if="!isLoggedin">
          <router-link class="nav-link" to="/login">Login</router-link>
        </li>
        <li class="nav-item" v-if="!isLoggedin">
          <router-link class="nav-link" to="/register">Register</router-link>
        </li>
        <li class="nav-item" v-if="isLoggedin">
          <router-link class="nav-link" to="/profile">Profile</router-link>
        </li>
        <li class="nav-item" v-if="isLoggedin">
          <a class="nav-link" @click.prevent="logoutUser" href="/logout">Logout</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
  data() {
    return {};
  },
  methods: {
    ...mapActions(['logout']),
    logoutUser() {
      this.logout();
    },
  },
  computed: {
    ...mapGetters(['isLoggedin']),
  },
  name: 'Navbar',
};
</script>

<style scoped></style>

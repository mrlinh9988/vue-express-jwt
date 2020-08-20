<template>
  <div>
    <h2>profile</h2>
    <div class="card" v-if="user">
      <div class="list-group">
        <div class="list-group-item">Email: {{ user.email }}</div>
        <div class="list-group-item">Username: {{ user.username }}</div>
        <div class="list-group-item">name: {{ user.name }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
  name: 'Profile',
  methods: {
    ...mapActions(['getProfile']),
  },
  computed: {
    ...mapGetters(['user']),
  },
  created() {
    this.getProfile();
  },
};
</script>

<style></style>

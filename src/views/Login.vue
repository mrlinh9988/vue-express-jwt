<template>
  <div>
    <div class="row">
      <div class="card mx-auto">
        <div class="card-header text-white bg-primary">
          <h4>Login</h4>
        </div>
        <div class="card-body">
          <form>
            <div class="form-group">
              <label for="username">Username</label>
              <input
                type="email"
                class="form-control"
                id="username"
                name="username"
                v-model="username"
                placeholder="Username"
              />
            </div>
            <div class="form-group">
              <label for="password">Password</label>
              <input
                type="password"
                class="form-control"
                id="password"
                name="password"
                v-model="password"
                placeholder="Password"
              />
            </div>
            <b-button variant="primary" @click="login">Login</b-button>
            <router-link class="card-link ml-2" to="/register">Register new account?</router-link>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    login() {},
  },
};
</script>

<style scoped>
.card {
  width: 60%;
  border-radius: 0;
}

/* .btn {
  border-radius: 0;
}

.form-control {
  border-radius: 0;
} */
</style>

<template>
  <div>
    <div class="row">
      <div class="card mx-auto">
        <div class="card-header text-white bg-primary">
          <h4>Register</h4>
        </div>
        <div class="card-body">
          <form>
            <div class="form-group">
              <label for="username">Username</label>
              <input
                type="text"
                class="form-control"
                id="username"
                name="username"
                v-model="username"
                placeholder="Username"
              />
            </div>
            <div class="form-group">
              <label for="name">Name</label>
              <input type="text" class="form-control" id="name" name="name" v-model="name" placeholder="Name" />
            </div>
            <div class="form-group">
              <label for="email">Email</label>
              <input type="email" class="form-control" id="email" name="email" v-model="email" placeholder="Email" />
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
            <div class="form-group">
              <label for="confirm_password">Confirm password</label>
              <input
                type="password"
                class="form-control"
                id="confirm_password"
                name="confirm_password"
                v-model="confirm_password"
                placeholder="Confirm password"
              />
            </div>
            <b-button variant="primary" @click="register">Register</b-button>
            <router-link class="card-link ml-2" to="/login">Already has account?</router-link>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Register',
  data() {
    return {
      username: '',
      name: '',
      email: '',
      password: '',
      confirm_password: '',
    };
  },
  methods: {
    register() {},
  },
};
</script>

<style scoped>
.card {
  width: 60%;
  border-radius: 0;
}
</style>

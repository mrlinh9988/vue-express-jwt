<template>
  <div>
    <div class="row">
      <div class="card mx-auto">
        <div class="card-header text-white bg-primary">
          <h4>Register</h4>
        </div>
        <div class="card-body">
          <form @submit.prevent="registerUser">
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
            <input class="btn btn-primary" variant="primary" value="Register" type="submit">
            <router-link class="card-link ml-2" to="/login">Already has account?</router-link>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
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
    ...mapActions(['register']),
    registerUser() {
      let userData = {
        username: this.username,
        name: this.name,
        email: this.email,
        password: this.password, 
        confirm_password: this.confirm_password, 
      }
      this.register(userData).then(res => {
        if(res.data.success) {
          this.$router.push("/login");
        }
      }).catch(error => {
        console.log('error: ', error);
      });
    },
  },
};
</script>

<style scoped>
.card {
  width: 60%;
  border-radius: 0;
}
</style>

<template>
  <div>
    <div class="row">
      <div class="card mx-auto">
        <div class="card-header text-white bg-primary">
          <h4>Login</h4>
        </div>
        <div class="card-body">
          <form @submit.prevent="loginUser">
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
            <input type="submit" @click="loginUser" variant="primary" value="Login" />
            <router-link class="card-link ml-2" to="/register">Register new account?</router-link>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    ...mapActions(["login"]),
    loginUser() {
      let user = {
        username: this.username,
        password: this.password,
      };
      this.login(user)
        .then((res) => {
          if (res.data.success) {
            this.$router.push("/profile");
          }
        })
        .catch((error) => {
          console.log("error: ", error);
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

/* .btn {
  border-radius: 0;
}

.form-control {
  border-radius: 0;
} */
</style>

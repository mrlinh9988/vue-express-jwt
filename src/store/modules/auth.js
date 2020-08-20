import axios from 'axios';
import router from '../../router';

const state = {
  token: localStorage.getItem('token') || '',
  user: {},
  status: '',
  error: null,
};

const getters = {
  // isLoggedin: function(state) {
  //   if (!state.token) {
  //     return false;
  //   }

  //   return true;
  // },
  isLoggedin: (state) => !!state.token,
  authState: (state) => state.status,
  user: (state) => state.user,
  error: (state) => state.error,
};

const actions = {
  // Login Action
  async login({ commit }, user) {
    commit('auth_request');
    try {
      let res = await axios.post('http://localhost:5000/api/users/login', user);
      if (res.data.success) {
        const token = res.data.token;
        const user = res.data.user;

        // Store token into local storage
        localStorage.setItem('token', token);
        axios.defaults.headers.common['Authorization'] = token;
        commit('auth_success', token, user);
      }
      return res;
    } catch (error) {
      commit('auth_error', error);
    }
  },
  // Register user
  async register({ commit }, userData) {
    commit('register_request');
    try {
      let res = await axios.post('http://localhost:5000/api/users/register', userData);
      if (res.data.success) {
        commit('register_success');
      }
      return res;
    } catch (error) {
      commit('register_error', error);
    }
  },
  // Logout user
  async logout({ commit }) {
    localStorage.removeItem('token');
    commit('logout');
    delete axios.defaults.headers.common['Authorization'];
    router.push('/login');
    return;
  },
  // get user profile
  async getProfile({ commit }) {
    commit('profile_request');
    try {
      const res = await axios.get('http://localhost:5000/api/users/profile');
      commit('profile_data', res.data.user);
      return res;
    } catch (error) {
      commit('profile_error', error);
    }
  },
};

const mutations = {
  auth_request(state) {
    state.error = null;
    state.status = 'loading';
  },
  auth_success(state, token, user) {
    state.status = 'success';
    state.token = token;
    state.user = user;
    state.error = null;
  },
  auth_error(state, error) {
    state.error = error.response.data.msg;
  },
  register_request(state) {
    state.status = 'loading';
    state.error = null;
  },
  register_success(state) {
    state.status = 'success';
    state.error = null;
  },
  register_error(state, error) {
    state.error = error.response.data.msg;
  },
  logout(state) {
    state.status = '';
    state.token = '';
    state.user = {};
    state.error = null;
  },
  profile_request(state) {
    state.status = 'loading';
    state.error = null;
  },
  profile_data(state, user) {
    state.user = user;
    state.error = null;
  },
  profile_error(state, error) {
    state.error = error.response.data.msg;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};

<template>
  <div id="app">
  <!-- NavBar -->
    <b-navbar toggleable="lg" type="light" variant="light" sticky>
      <b-navbar-brand :href="url+'#'">7ew1r.github.io</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item :href="url+'#biography'">Biography</b-nav-item>
          <b-nav-item :href="url+'#works'">Works</b-nav-item>
          <b-nav-item :href="url+'#contact'">Contact</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar><!-- NavBar -->
    <router-view/>
    <footer><small>&copy; 2019 TEWi_R</small></footer>
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Raleway');

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif, 'Raleway';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
nav {
  filter: drop-shadow(0 5px 10px rgba(0,0,0,0.4));
}

.wrapper{
  padding-top: 112px;
  margin-top: -56px;
  margin-bottom: 5em;
}
.section-title {
  margin: 0.5em 0;
  font-family: 'Raleway', sans-serif;
}
footer {
  text-align: center;
}
</style>

<script lang="ts">
import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

library.add(fas, far, fab);
Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.use(BootstrapVue);

export default Vue.extend({
  data() {
    return {
      url: window.location.origin,
    };
  },
});
</script>

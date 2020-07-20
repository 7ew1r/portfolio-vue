<template>
  <div class="home">
    <bio></bio>
    <hr>
    <works></works>
    <hr>
    <contact></contact>
    <hr>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Bio from '@/views/Bio.vue';
import Works from '@/views/Works.vue';
import Contact from '@/views/Contact.vue';

Vue.component('bio', Bio);
Vue.component('works', Works);
Vue.component('contact', Contact);

export default Vue.extend({

});
</script>

<style lang="scss" scoped>
hr {
  background-color:#f8f9fa;
}
</style>

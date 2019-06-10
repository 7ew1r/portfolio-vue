<template>
  <div>
    <span v-for="tech in techs" :key="tech" class="tech_icons">
      <span v-if="tech === 'HTML'">
        <font-awesome-icon :icon="['fab', 'html5']" />
      </span>
      <span v-else-if="tech === 'CSS'">
        <font-awesome-icon :icon="['fab', 'css3-alt']" />
      </span>
      <span v-else-if="tech === 'Vue.js'">
        <font-awesome-icon :icon="['fab', 'vuejs']" />
      </span>
      <span v-else-if="tech === 'Docker'">
        <font-awesome-icon :icon="['fab', 'docker']" />
      </span>
      <span v-else-if="tech === 'Laravel'">
        <font-awesome-icon :icon="['fab', 'laravel']" />
      </span>
      <span v-else-if="tech === 'ubuntu'">
        <font-awesome-icon :icon="['fab', 'ubuntu']" />
      </span>
      <span v-else class="non-icon">{{ tech }}</span>
    </span>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    techs: Array,
  },
});
</script>

<style lang="scss" scoped>
.tech_icons {
  font-size: 1.5em;
  > span {
    margin-left: 0.25em;
    margin-right: 0.25em;
  }
}

.non-icon {
  vertical-align: 4px;
  color: white;
  font-size: 13px;
  background-color: #2c3e50;
  border-radius: 5px;
  border: 1px solid #2c3e50;
  padding-left: 8px;
  padding-right: 8px;
  margin-bottom: 50px;
}
</style>

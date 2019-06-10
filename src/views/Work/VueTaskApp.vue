<template>
  <b-container class="work">
    <h1>{{ work.title }}</h1>
    <show-tech-icons :techs=work.usedTechnologies></show-tech-icons>
    <div class="work-img">
      <img :src=work.imgPath :alt=work.imgAlt>
    </div>
    <dl>
      <dt>制作期間</dt>
      <dd>{{ work.period }}</dd>
      <dt>URL</dt>
      <dd><a :href="work.URL"><font-awesome-icon icon="link" /> {{ work.URL }}</a></dd>
      <dt>ソースコード</dt>
      <dd><a :href="work.srcURL"><font-awesome-icon icon="link" /> {{ work.srcURL }}</a></dd>
      <dt>説明</dt>
      <dd>
        <p>
          Vue.jsを用いて初めて作成したTodoアプリです。<br>
          データはローカルストレージに保存されるため、
          外部にデータを保存したくない場合でも使用することが可能です。
        </p>
      </dd>
    </dl>
  </b-container>
</template>

<style lang="scss" scoped>
.work {
  max-width: 560px;
  padding-bottom: 5.0em;
  h1 {
    margin-top: 1.5em;
    margin-bottom: 0.5em;
  }
  .work-img {
    max-width: 560px;
    padding-bottom: 2.0em;
    img {
      max-width: 100%;
    }
  }
  dt {
    font-size: 1.2rem;
    padding-top: 0.5em;
  }
}


</style>


<script lang="ts">
import Vue from 'vue';
import ShowTechIcons from '@/components/ShowTechIcons.vue';

Vue.component('show-tech-icons', ShowTechIcons);

declare interface Work {
  id: number;
  title: string;
  period: string;
  imgPath: string;
  imgAlt: string;
  URL: string;
  srcURL: string;
  usedTechnologies: string[];
}

export default Vue.extend({
  data() {
    return {
      work: {
        title: 'Vue Task App',
        period: '2019/04',
        imgPath: 'img/vue-task-app.jpg',
        imgAlt: 'vue-task-app',
        URL: 'https://vue-task-app-bdc3b.firebaseapp.com/',
        srcURL: 'https://github.com/7ew1r/vue-task-app',
        usedTechnologies: ['HTML', 'CSS', 'Vue.js', 'Firebase'],
      } as Work,
    };
  },
});
</script>

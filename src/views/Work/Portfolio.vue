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
      <dd><a :href="work.URL">{{ work.URL }}</a></dd>
      <dt>ソースコード</dt>
      <dd><a :href="work.srcURL">{{ work.srcURL }}</a></dd>
      <dt>説明</dt>
      <dd>
        <p>
          このポートフォリオサイトです。<br>
          Vue.js使用して作成しました。<br>
          Vue Routerを使用しています。
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

a::before {
  font-family: 'FontAwesome';
  font-weight: 400;
  content: '\f0c1 ';
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
        title: 'ポートフォリオサイト',
        period: '2019/05 〜 現在',
        imgPath: 'img/portfolio.jpg',
        imgAlt: 'portfolio',
        URL: 'https://7ew1r.github.io/',
        srcURL: 'https://github.com/7ew1r/portfolio-vue',
        usedTechnologies: ['HTML', 'CSS', 'Vue.js', 'BootstrapVue'],
      } as Work,
    };
  },
});
</script>

<template>
<div id="works" class="wrapper">
  <b-container>
    <h1 class="section-title"><font-awesome-icon icon="wrench" /> Works</h1>
    <b-card-group columns>
      <div v-for="work in works" :key="work.id">
        <!-- <router-link to="/portfolio"> -->
        <router-link :to=work.pageTitle>
          <b-card
            :title=work.title
            :img-src=work.imgSrc
            :img-art=work.imgAlt
            img-top
          >
            <b-card-text>
              {{ work.description }}
            </b-card-text>
          </b-card>
        </router-link>
      </div>
    </b-card-group>
  </b-container>
</div>
</template>

<script lang="ts">
import Vue from 'vue';

declare interface Work {
  id: number;
  title: string;
  pageTitle: string;
  link: string;
  imgSrc: string;
  imgAlt: string;
  description: string;
}

export default Vue.extend({
  data() {
    return {
      works: [
        {
          id: 1,
          title: 'ポートフォリオサイト',
          pageTitle: 'portfolio',
          imgSrc: 'img/portfolio.jpg',
          imgAlt: 'portfolio',
          description: '自分自身のポートフォリオです',
        },
        {
          id: 2,
          title: 'Laranale',
          pageTitle: 'laranale',
          imgSrc: 'img/laranale.jpg',
          imgAlt: 'laranale',
          description: 'Laravelを用いたCMSアプリケーション',
        },
        {
          id: 3,
          title: 'Vue Task App',
          pageTitle: 'vue-task-app',
          imgSrc: 'img/vue-task-app.jpg',
          imgAlt: 'vue-task-app',
          description: 'Vue.jsを用いたタスクアプリ',
        },
        {
          id: 4,
          title: '「U EP」特設WEBページ',
          pageTitle: 'uep',
          imgSrc: 'img/uep.jpg',
          imgAlt: 'uep',
          description: 'U EP',
        },
        {
          id: 5,
          title: '「初めての構築」特設WEBページ',
          pageTitle: 'hajimete',
          imgSrc: 'img/hajimete.jpg',
          imgAlt: 'hajimete',
          description: '初めての構築',
        },
        {
          id: 6,
          title: 'PCD Viewer',
          pageTitle: 'pcd-viewer',
          imgSrc: 'img/pcd-viewer.jpg',
          imgAlt: 'pcd-viewer',
          description: 'PCD（Point Cloud Date）ファイルビューワー',
        },
      ] as Work[],
    };
  },
});
</script>

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
      <dd>なし</dd>
      <dt>ソースコード</dt>
      <dd><a :href="work.URL"><font-awesome-icon icon="link" /> {{ work.srcURL }}</a></dd>
      <dt>説明</dt>
      <dd>
        <p>
          PCDファイル（3次元点群データ）を表示するGUIツールです。<br>
          ファイルをウィンドウにD&Dすることで読み込み、点群データの閲覧を行う事が出来ます。
        </p>
        <p>
          大学の研究活動にて作成・使用していたものです
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
        title: 'PCD Viewer',
        period: '2017/4 〜 2018/3',
        imgPath: 'img/pcd-viewer.jpg',
        imgAlt: 'pcd-viewer',
        URL: '',
        srcURL: 'https://github.com/7ew1r/pcd-viewer',
        usedTechnologies: ['ubuntu', 'C++', 'glfw', 'PointCloudLibrary'],
      } as Work,
    };
  },
});
</script>

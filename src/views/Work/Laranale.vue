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
      <dt>概要</dt>
      <dd>
        <p>
        Laravelを用いて作成したCMSアプリです<br>
        Qiitaのような複数人で投稿を行う、知識共有サービスをイメージして作成しました。
        </p>
        <p>
          ユーザー登録機能や記事の投稿・閲覧機能など、
          基本的な機能が備わっています。<br>
          また記事はMarkdownを用いて投稿することが出来ます。<br>
        </p>
        <p>
          環境構築には<a href="https://laradock.io/" target="_blank" rel="noopener noreferrer">Laradock</a>
          用いているため、Dockerを利用できるのであればどこでも同じ環境で開発を行う事が出来ます。
        </p>
      </dd>
      <dt>使用技術</dt>
      <dd>
        <ul>
          <li>
            フレームワーク
            <ul><li>Laravel 5.5</li></ul>
          </li>
          <li>
            データベース
            <ul>
              <li>MySQL 5.7 [開発環境]</li>
              <li>PostgreSQL (Heroku Postgres)</li>
            </ul>
          </li>
          <li>
            インフラ
            <ul>
              <li>Heroku</li>
            </ul>
          </li>
          <li>
            CI
            <ul>
              <li>CircleCI</li>
            </ul>
          </li>
        </ul>
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
        title: 'Laranale',
        period: '2019/05',
        imgPath: 'img/laranale.png',
        imgAlt: 'laranale',
        URL: 'http://laranale.herokuapp.com/',
        srcURL: 'https://github.com/7ew1r/Laranale-cms',
        usedTechnologies: ['HTML', 'CSS', 'Laravel', 'Docker', 'heroku', 'CircleCI'],
      } as Work,
    };
  },
});
</script>

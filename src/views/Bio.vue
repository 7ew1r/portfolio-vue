<template>
  <!-- Biography -->
  <div id="biography" class="wrapper">
    <b-container>
      <b-row>
        <b-col class="text-center" md="4">
          <b-avatar src="img/avatar-image.jpg" class="avatar-image" size="12rem"></b-avatar>
          <div class="h2 user-id">@tewi_r</div>
          <div class="link-icons">
            <a href="https://twitter.com/tewi_r" target="_blank" rel="noopener noreferrer"><font-awesome-icon :icon="['fab', 'twitter']" /></a>
            <a href="https://github.com/7ew1r" target="_blank" rel="noopener noreferrer"><font-awesome-icon :icon="['fab', 'github']" /></a>
            <a href="https://qiita.com/TEWi_R" target="_blank" rel="noopener noreferrer"><b-button variant="outline-secondary"><font-awesome-icon icon="link" /> Qiita</b-button
              ></a
            >
            <a href="http://tewir.hatenablog.com/" target="_blank" rel="noopener noreferrer"
              ><b-button variant="outline-secondary"
                ><font-awesome-icon icon="link" /> Blog</b-button
              ></a
            >
          </div>
        </b-col>
        <b-col md="8">
          <h1 class="section-title">
            <!-- <font-awesome-icon icon="user" /> -->
            Biography</h1>
          <p class="profile-detail">
            <!-- eslint-disable-next-line max-len -->
            大学時代はロボット工学の研究室に所属し C++/OpenGL を用いた CG
            描画システムの開発を3年間行う。<br>
            新卒で大手通信会社に就職し、システムエンジニアとして
            ネットワーク/PBX
            分野の提案支援業務・プロジェクト管理業務に1年弱従事した後、受託開発企業に転職。<br>
            現在は Ruby on Rails を用いた Web 開発、Swift / Flutter
            を用いたモバイルアプリ開発を主に行っている。
          </p>
          <!-- <h2>Learning</h2>
      <p>Vue.js / Laravel</p> -->
          <!-- <h2>Interests</h2>
      <p>Design, VR</p> -->
        </b-col>
      </b-row>
    </b-container>
    <!-- Biography -->
  </div>
</template>

<style lang="scss" scoped>
.avatar-image {
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
}

.link-icons {
  font-size: 2.0rem;
  margin: 0 auto;
  > a {
    color:#f8f9fa;
;
    margin-left: 0.15em;
    margin-right: 0.15em;
    > button {
      margin-bottom: 8px;
    }
  }
}
</style>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({});
</script>

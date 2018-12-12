<template>
  <div class="home">
    <Search/>
    <div class="content" v-show="show">
        <div class="result" v-for="(value, key) in searchResult">
            <div class="engine">{{key}}</div>
            <ul v-if="typeof(value) == 'object'">
                <li v-for="ret of value">
                    <h3><a :href="ret.link" target="_blank" v-html="ret.title"></a></h3>
                    <p v-html="ret.desc"></p>
                </li>
            </ul>
            <Alert type="error" show-icon v-else>
                <span slot="desc">{{value}}</span>
            </Alert>
        </div>
    </div>
    <div class="footer">
        <div>Copyright © 2018 Moonbear Studio</div>
        <div><iframe frameborder="0" scrolling="0" width="100px" height="20px" src="https://ghbtns.com/github-btn.html?user=themoonbear&repo=paigu-web&type=star&count=true"></iframe></div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Search from '@/components/Search.vue'; // @ is an alias to /src

@Component({
  components: {
    Search,
  },
})
export default class Home extends Vue {
    get show(): boolean {
      let len = Object.keys(this.$store.state.searchResult).length
      return len != 0
    }

    get searchResult(): Object {
      return this.$store.state.searchResult
    }
}
</script>

<style>
  .content {
    margin: 10px auto;
    width: 95%;
    clear: both;
  }
  .result {
      float: left;
      overflow: auto;
      margin-right: 20px;
      width: calc(50% - 20px);
      min-height: 350px;
      text-align: left;
      font-size: 18px;
  }
  .engine {
      border-bottom: 1px solid coral;
      margin-bottom: 10px;
      font-size: 24px;
      line-height: 50px;
      text-transform: capitalize;
  }
  .result li {
      height: 120px;
  }
  .result a {
      text-decoration: underline;
  }
  .result li > h3 {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
  }
  .result li > p {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 3;
      overflow: hidden;
  }
  .result em{
      color: red;
  }
  .result strong {
      color: red;
      font-style: italic;
  }
  .footer {
      clear: both;
      margin-top: 20%;
  }
</style>

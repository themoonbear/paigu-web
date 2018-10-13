<template>
    <div class="search" v-bind:class="touched">
        <div class="logo">
            <img alt="PaiGu logo" src="../assets/logo.png"/>
        </div>
        <div class="keyword">
            <input type="text" name="c" search @keyup.enter="submit" v-focus/>
        </div>
        <div>
            <Spin fix v-if="showLoading">
                <Icon type="ios-loading" size=18 class="demo-spin-icon-load"></Icon>
                <div>Loading</div>
            </Spin>
        </div>
    </div>
</template>

<script lang="ts">

import { Component, Vue } from 'vue-property-decorator';

Vue.directive("focus", {
  inserted: function (el) {
    el.focus()
  }
})

@Component
export default class Search extends Vue {
  startSearch : boolean = false
  submit(event:any) {
    let keyword = event.target.value
    if (!keyword) {
      return
    }
    this.startSearch = true
    this.$store.dispatch("search", keyword)
  }
  get touched() {
    return this.startSearch ? "small" : "big"
  }

  get showLoading() {
    return this.$store.state.search
  }
}
</script>

<style scoped>
    .big {
        margin-top: 20%;
    }
    .small {
        margin-top: 10px;
    }
    .small .logo{
        float: left;
        margin-right: 20px;
    }
    .small .keyword {
        text-align: left;
    }
    .small img {
        zoom: 50%
    }
    input {
        min-width: 300px;
        width: 800px;
        height: 44px;
        font-size: 18px;
        border: 1px solid dodgerblue;
    }
    .demo-spin-icon-load{
        animation: ani-demo-spin 1s linear infinite;
    }
</style>
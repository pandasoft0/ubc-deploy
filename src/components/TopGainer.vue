<template>
  <div class = "topgainer">
    <div class = "topgainer-header">
      <img class = "primary-icon" src="../assets/img/rising.png" />
      <span class = "primary-text1"> Top Gainers</span>
      <span class = "topgainer-text1"> More > </span>
    </div>
    <div class="row">
      <span class="col-sm-1">1</span>
      <span class="col-sm-2"><img class = "coinimg1" :src="`https://s2.coinmarketcap.com/static/img/coins/64x64/${this.currencies[0].cid}.png`"/></span>
      <span class="col-sm-5 primary-text2">{{currencies[0].name}}</span>
    </div>
    <div class="row">
      <span class="col-sm-1">2</span>
      <span class="col-sm-2"><img class = "coinimg1" :src="`https://s2.coinmarketcap.com/static/img/coins/64x64/${this.currencies[1].cid}.png`"/></span>
      <span class="col-sm-5 primary-text2">{{currencies[1].name}}</span>
    </div>
    <div class="row">
      <span class="col-sm-1">3</span>
      <span class="col-sm-2"><img class = "coinimg1" :src="`https://s2.coinmarketcap.com/static/img/coins/64x64/${this.currencies[2].cid}.png`"/></span>
      <span class="col-sm-5 primary-text2">{{currencies[2].name}}</span>
    </div>
  </div>
</template>
<script>
  import { mapState } from 'vuex'
  export default {
    data() {
      return {
        rows: [],
      }
    },
    mounted() {
    },
    computed: {
      ...mapState(['tickers', 'currencies']),
      iconbase() {
          return `https://s2.coinmarketcap.com/static/img/coins/64x64/${this.currencies[0].cid}.png`
      }
    },
    methods: {

    },
    components: {
    }
  }
</script>

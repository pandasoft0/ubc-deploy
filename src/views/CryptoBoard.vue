<template>
  <div class="board">
    <table class="table">
      <thead>
        <tr>
          <td>#</td>
          <td>Name</td>
          <td>Price</td>
          <td>Rating</td>
          <td>24 Change%</td>
          <td>Market Cap</td>
          <td># Of Trades</td>
          <td>% Of Trades</td>
          <td>Price Chart</td>
        </tr>
      </thead>
      <tbody>
          <CurrencyRow v-for="(item, i) in currencies" :key="item.symbol" :ticker="tickers[item.symbol] || {}" :info="item" :rank="i"></CurrencyRow>
      </tbody>
    </table>
  </div>
</template>
<script>
  import CurrencyRow from '../components/CurrencyRow.vue'
  import { mapState } from 'vuex'
  export default {
    name: 'CryptoBoard',
    components: {
      CurrencyRow
    },
    data() {
      return {
        rows: [],
      }
    },
    computed: {
      ...mapState(['tickers', 'currencies'])
    }
  }
</script>

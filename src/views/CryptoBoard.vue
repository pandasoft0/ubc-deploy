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
        <CurrencyRow
          v-for="(item, i) in currencies"
          :key="item.symbol"
          :ticker="tickers[item.symbol] || {}"
          :info="item"
          :rank="i"
        ></CurrencyRow>
      </tbody>
    </table>
  </div>
</template>
<script>
import { mapState } from "vuex";
import CurrencyRow from "@/components/CurrencyRow"
export default {
  created() {
    console.log('sdfsdfs');
    this.getNews();
    // this.interval = setInterval(
    //   function () {
    //     this.getNews();
    //   }.bind(this),
    //   120000
    // );
  },
  components: {
    CurrencyRow,
  },
  beforeDestroy() {
    clearInterval(this.interval);
  },
  data() {
    return {
      news: [],
      interval: null,
      test: {},
    };
  },
  methods: {
    truncateText(value) {
      if (value.length > 135) {
        const substr = value.substring(0, 135);
        return substr.substring(0, substr.lastIndexOf(" ")) + " ...";
      } else {
        return value;
      }
    },
    async getNews() {
      let url =
        "https://data.messari.io/api/v1/assets/btc/metrics/market-data";
      console.log(url);
      let response = await fetch(url);
      if (response.ok) {
        let json = await response.json();
        // this.test = json;
        this.news = json["Data"];
        console.log(json);
      } else {
        console.log("Fetch Error :-S", response.status);
      }
    },
  },
  filters: {
    tags: function (value) {
      if (!value) return "";
      return value.split("|").join(", ");
    },
  },
  computed: {
    ...mapState(["tickers", "currencies"]),
  },
};
</script>

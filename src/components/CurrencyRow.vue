<template>
  <tr>
    <td>{{ rank + 1 }}</td>
    <td><img class="coinimg1" :src="iconbase" />{{ info.name }} <span class = "basetext">{{info.base}}</span></td>
    <td>${{test.USD}}</td>
    <td></td>
    <td>{{ test1.RAW[info.base].USD.CHANGEPCT24HOUR}}%</td>
    <td>${{ test1.RAW[info.base].USD.MKTCAP}}</td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td>:</td>
  </tr>

  <!-- <div class="coin-box" @dblclick.stop="openDetails">
        <div class="row no-gutters coin-info">
            <div class="col-7">
                <div class="font-weight-bold">{{info.name}}</div>
                <div class="row no-gutters mt-1">
                    <div class="box-icon">
                        <span :style="{ backgroundImage : 'url('+ iconbase +')' }"></span>
                    </div>
                    <div class="col text-left">
                        <div><b>{{info.base}}</b>/{{info.quote}}</div>
                        <div class="coin-price" v-if="ticker.price">{{ticker.price || '' }}<span style="font-size: x-small; font-weight: 700; padding-left: 3px;">{{info.quote}}</span></div>
                    </div>
                </div>
            </div>
            <div :class="[(ticker.percent < 0)?'down':'up', 'col-5','text-right']" v-if="ticker.price">
                <div class="coin-per"><span class="indicator"></span><span>{{ ticker.percent }}%</span></div>
                <div class="coin-chg">{{parseFloat(ticker.chg).toFixed((info.quote === 'USDT') ? 3 : 8)}} </div>
                <div><span class="text-secondary">Vol:</span> <span class="text-dark">{{ ticker.vol }}</span></div>
            </div>
            <div class="dd-container" :class="[{'show': showDropDown}]" v-click-outside="closeDropDown">
                    <span role="button" class="menu-btn" @click.stop="onDropDown">
                        <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
                    </span>
                <div class="dd-menu" v-if="showDropDown">
                    <span class="dd-item" @click="openDetails">Open</span>
                    <span class="dd-item" @click="removeCard">Delete</span>
                </div>
            </div>
        </div>
        <div class="sparkline-chart" v-if="ticker.price">
            <Sparkline :cdata="ticker.price" :width="380" :height="90"></Sparkline>
        </div>
    </div> -->
</template>
<script>
// import { unSubscribeSymbol } from "../services/binance";
export default {
  props: ["ticker", "info", "rank"],
  created() {
    this.getPrice();
    this.getAvg();
  },
  data() {
    return {
      showDropDown: false,
      test: {},
      test1: {},
    };
  },
  mounted() {

  },
  computed: {
    iconbase() {
      return `https://s2.coinmarketcap.com/static/img/coins/64x64/${this.info.cid}.png`;
    },
  },
  methods: {
    async getPrice() {
      let url = `https://min-api.cryptocompare.com/data/price?fsym=${this.info.base}&tsyms=USD&api_key=07b3474f4fda1065bf19525769c45ede4d5200ea39384ed9ff9d91e02cdfe593`;
      this.test = url;
      console.log(url);
      let response = await fetch(url);
      if (response.ok) {
        let json = await response.json();
        this.test = json;
        this.news = json["Data"];
        console.log(json);
      } else {
        console.log("Fetch Error :-S", response.status);
      }
    },
    async getAvg() {
      let url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${this.info.base}&tsyms=USD&api_key=07b3474f4fda1065bf19525769c45ede4d5200ea39384ed9ff9d91e02cdfe593`;
      this.test1 = url;
      console.log(url);
      let response = await fetch(url);
      if (response.ok) {
        let json = await response.json();
        this.test1 = json;
        this.news = json["Data"];
        console.log(json);
      } else {
        this.test1 = 'response.status';
        console.log("Fetch Error :-S", response.status);
      }
    },
  },
  components: {},
};
</script>

<template>
  <div>
      <img :src="data.path" class = "adimg"/>
      <h4>{{data.title}}</h4>
      <h6>{{data.desc}}</h6>
  </div>
</template>
<script>
  export default {
    props:['data'],
    data() {
      return {
        showDropDown: false
      }
    },
    mounted() {
       console.log(this.data);
    },
    computed: {
        iconbase() {
            return `https://s2.coinmarketcap.com/static/img/coins/64x64/${this.info.cid}.png`
        }
    },
    methods: {

    },
    components: {
    }
  }
</script>

<template>
  <div class="layout-container">
    <header class="page-header">
      <div class="container">
        <button
          class="back-btn"
          v-if="currentPage === 'infoview'"
          @click="$router.push({ path: '/' })"
        >
        </button>
        <img src="../assets/logo.png" class="logo" />
        <span class="page-title text-primary">Unbiased Crypto</span>
        <span class="navspan">
          <a class="text-te" href="#">Price</a>
          <a href="#">Chart</a>
          <a href="#">Advertise</a>
          <a href="#">Buy/Sell</a>
          <a href="#">About Us</a>
        </span>
        <span class="navbutton">
          <button class="btn btn-primary login">Log In</button>
          <button class="btn btn-primary signup">Sign Up</button>
        </span>
      </div>
    </header>
    <div class="menu-bar bg-primary">
      <div class="container">
        <span>Cryptos: </span><span></span> <span>Exchanges: </span
        ><span></span> <span>Market Cap: </span><span></span>
        <span>24h Vol</span>
      </div>
    </div>
    <div class="page-container container">
      <transition name="fade" mode="out-in">
        <keep-alive include="dashboard">
          <router-view />
        </keep-alive>
      </transition>
    </div>
  </div>
</template>
<script>
export default {
  name: "LayoutPage",
  created() {
    console.log('sfsdf');
  },
  data() {
    return {
      currentPage: "dashboard",
    };
  },
  watch: {
    $route: {
      deep: true,
      handler: function (page) {
        this.currentPage = page.name;
      },
    },
  },
};
</script>
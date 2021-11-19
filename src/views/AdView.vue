<template>
    <div>
      <agile :slidesToShow ="3" :dots="false" :infinite="false">
        <div class="slide" v-for="(ad, i) in ads" :key="i">
          <AdBoard :data ="ad" :key="i"></AdBoard>
        </div>
      </agile>
    </div>
</template>
<script>
  import AdBoard from '../components/AdBoard.vue'
  export default {
    name: 'AdView',
    mounted() {
      console.log('sfdsdfsdfsf');
    },
    data() {
      return {

      };
    },
    components: {
      AdBoard
    },
    computed: {
      ads() {
        return [{title: 'Bitcoin', desc: 'Learn more about bitcoin', path: 'http://localhost:8080/img/logo.png'},
        {title: 'Bitcoin', desc: 'Learn more about bitcoin', path: 'http://localhost:8080/img/logo.png'},
        {title: 'Bitcoin', desc: 'Learn more about bitcoin', path: 'http://localhost:8080/img/logo.png'},
        {title: 'Bitcoin', desc: 'Learn more about bitcoin', path: 'http://localhost:8080/img/logo.png'},
        {title: 'Bitcoin', desc: 'Learn more about bitcoin', path: 'http://localhost:8080/img/logo.png'},
        {title: 'Bitcoin', desc: 'Learn more about bitcoin', path: 'http://localhost:8080/img/logo.png'},
        {title: 'Bitcoin', desc: 'Learn more about bitcoin', path: 'http://localhost:8080/img/logo.png'},
        {title: 'Bitcoin', desc: 'Learn more about bitcoin', path: 'http://localhost:8080/img/logo.png'},
        {title: 'Bitcoin', desc: 'Learn more about bitcoin', path: 'http://localhost:8080/img/logo.png'},
        {title: 'Bitcoin', desc: 'Learn more about bitcoin', path: 'http://localhost:8080/img/logo.png'}];
      },
    }
  }
</script>

<script>

import axios from 'axios';
import { store } from './data/store';
import Header from './components/Header.vue';
import Hero from './components/Hero.vue';
import Main from './components/Main.vue';
import Footer from './components/Footer.vue';
import Card from './components/partials/Card.vue';

export default {
  name:'App',
  components: {
    Header,
    Hero,
    Main,
    Footer,
    Card
  },
  data() {
    return {
      store
    }
  },
  methods: {
    getApi(type) {
      store.movie = [];
      store.tv = [];
      if (store.apiParams.query === ''){
        store.apiUrlBase += store.default;
      } else store.apiUrlBase += store.search
      axios.get(store.apiUrlBase + type, {
        params: store.apiParams
      })
      .then(result => {
        if (store.type === 'multi'){
          result.data.results.forEach(object => {
            if (object.media_type !== 'movie'){
              store.tv.push(object)
            } else {
              store.movie.push(object)
            }
          });
        } else{
          store[type] = result.data.results;
        }
        
      })
      .catch(error => {
      })
    },
    startSearch() {
      this.getApi(store.type);
      store.apiParams.query = '';
      store.type = 'multi';
      store.apiUrlBase = 'https://api.themoviedb.org/3/';
      console.log('store.movie: '+store.movie.length);
      console.log('store.tv: '+store.tv.length);
    },

  },
  computed: {
    getNoImage(){
      if(store[type].poster_path === null) return '/img/no-image.jpg'
    }
  },
  mounted() {
    this.startSearch();
  },
}
</script>

<template>
  <Header @startSearch="startSearch" />
  <Hero />
  <Main 
    v-if="store.movie.length > 0 || store.type === 'movie'"  
    title="Films: " 
    type="movie"
  />
  <Main 
    v-if="store.tv.length > 0 || store.type === 'tv'"  
    title="Serie TV: " 
    type="tv"
  />
  <Footer />
 
</template>

<style lang="scss" >
@use './scss/main.scss';
h1 {
	padding: 10px;
}

.card-movie-wrapper,
.card-tv-wrapper {
	display: flex;
	flex-wrap: wrap;
}

</style>
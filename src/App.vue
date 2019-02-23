<template>
  <div id="app">
    <div>
      <transition name="slide">
          <div v-if="singlePage" class="single-page">
            <SinglePage v-bind:item="itemCheck" />
          </div>
        </transition >
    </div>
    <transition name="slide-home">
      <div>
        <header>
          <div class="container">
            <div class="header-wrp">
              <img src="https://feelandfly.com/img/template/logo/logo-black.png" alt="">
            </div>
          </div>
        </header>
          <div class="items-wrp container">
            <ItemList />
          </div>
        <footer>
          FOOTER
        </footer>
      </div>
    </transition>
  </div>
</template>

<script>
import SinglePage from './components/SinglePage.vue'
import ItemList from './components/itemList.vue'


export default {
  name: 'app',
  components: {
    SinglePage,
    ItemList
  },
  computed: {
    items() {
      return this.$store.state.items
    },
    singlePage(){
      return this.$store.state.singlePage
    },
    homePage(){
      return this.$store.state.homePage
    },
     itemCheck(){
      return this.$store.state.checkItem
    }
  },
  methods: {
    showSinglePage: function (item) {
      this.itemCheck = item
      this.$store.dispatch('showSinglePage')
     setTimeout(() => {
        let element = document.getElementById("scroll-body");
        element.classList.add("scroll-body");
     },300)
    }
  }
}
</script>

<style lang="scss">
body{
  margin: 0;
  width: 100%;
  height: 100%;
}

html{
  height: 100%;
}
header{
  padding: 15px 0;
  margin-bottom: 35px;
  box-shadow: 0 0 15px rgba(0,0,0,.09);
  .header-wrp{
    align-items: center;
    justify-content: center;
    display: flex;
  }
}

.single-page{
  position: fixed;
  width: 100%;
  min-height: 100vh;
  // top: 0;
  background: #eee;
  z-index: 2;
}

.slide-leave-active,
.slide-enter-active {
  transition: .5s;
}
.slide-enter {
  transform: translate(100%, 0);
}
.slide-leave-to {
  transform: translate(100%, 0);
}

.slide-home-leave-active,
.slide-home-enter-active {
  transition: .5s;
}
.slide-home-enter {
  transform: translate(-100%, 0);
}
.slide-home-leave-to {
  transform: translate(-100%, 0);
}

.container{
  margin: 0 15px;
}

@media screen and (max-width: 1024px) {
  .overflow{
    overflow: auto;
  }
  header{
    padding: 7px 0;
    margin-bottom: 25px;
  }
}

/* SCROLL BODY NONE */
.scroll-body::-webkit-scrollbar-button {
    background-image: url('');
    background-repeat: no-repeat;
    width: 0px;
    height: 0px
}
.scroll-body::-webkit-scrollbar-track {
    background-color: #eee
}
.scroll-body::-webkit-scrollbar-thumb {
    -webkit-border-radius: 0px;
    border-radius: 0px;
    background-color: #fff;
}
.scroll-body::-webkit-scrollbar-thumb:hover {
    background-color: #fff;
}
.scroll-body::-webkit-resizer {
    background-image: url('');
    background-repeat: no-repeat;
    width: 0px;
    height: 0px
}
.scroll-body::-webkit-scrollbar {
    width: 0px;
}


#app {
  height: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  // color: #2c3e50;
  // margin-top: 60px;
}
</style>

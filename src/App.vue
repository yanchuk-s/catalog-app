<template>
  <div id="app">
    <div>
      <transition name="slide">
          <div v-if="singlePage" class="single-page">
            <SinglePage v-bind:item="this.itemCheck" />
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
            <div class="items-list">
              <div class="col-4" v-for="(item, index) in items" v-bind:key="index">
                <div class="p-15">
                  <div class="item" @click="showSinglePage(item)">
                    <div>
                      <div class="item-img">
                        <img v-bind:src='item.generalImg' alt="">
                      </div>
                      <div class="item-descr">
                        <div class="item-title">
                          {{item.title}}
                        </div>
                        <div class="item-price">
                          {{item.priceG}} UAN
                          <!-- {{item.priceOpt}}
                          {{item.priceDrop}} -->
                        </div>
                        <div class="item-color">
                          {{item.color}}
                        </div>
                      </div>
                    </div>
                </div>
                </div>
              </div>
            </div>
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

export default {
  name: 'app',
  components: {
    SinglePage
  },
  data() {
    return {
      itemCheck: null
    }
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

.items-list{
  display: flex;
  flex-wrap: wrap;
  .col-4{
    width: 25%;
    max-width: 100%;
    .p-15{
      padding: 0 15px;
    }
  }
}

.item{
    margin: 0 0 25px 0;
    -webkit-box-shadow: 0px 5px 60px -10px rgba(0, 0, 0, 0.2);
    box-shadow: 0px 5px 60px -10px rgba(0, 0, 0, 0.2);
    background-color: transparent;
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    border-radius: 15px;
    cursor: pointer;
    overflow: hidden;
    background: #fff;
    -webkit-transition-duration: 0.3s;
    -moz-transition-duration: 0.3s;
    -o-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -webkit-transition-property: -webkit-transform;
    -moz-transition-property: -moz-transform;
    -o-transition-property: -o-transform;
    transition-property: transform;
    
    .item-img{
      height: 350px;
      position: relative;
      img{
        object-fit: cover;
        width: 100%;
        height: 100%;
        border-radius: 15px 15px 0 0;
      }
    }

    .item-descr{
      padding: 17px 20px;
      border-bottom-left-radius: 15px;
      border-bottom-right-radius: 15px;
      .item-title{
        color: #000;
        font-size: 24px;
        line-height: 30px;
        margin-top: 5px;
      }

       .item-color{
         font-size: 16px;
       }

      .item-price{
         font-size: 16px;
      }
    }
}

// .item:hover{
//   transform: scale(0.95);
// }

@media screen and (max-width: 1200px) {
  .items-list{
    display: flex;
    .col-4{
      width: 33.33333333333333333%;
    }
  }
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

@media screen and (max-width: 768px) {
  .items-list{
    display: flex;
    .col-4{
      width: 50%;
    }
  }
}

@media screen and (max-width: 600px) {
  .items-list{
    display: flex;
    .col-4{
      width: 100%;
      .p-15{
        padding: 0;
      }
    }
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

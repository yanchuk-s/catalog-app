<template>
  <div class="single-page-wrp">
     <button class="close-single-page" @click="hideSinglePage">
      <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
      </svg>
    </button>

    <div class="single-page-item">
      <div class="s-p-img">
        <img v-bind:src='item.generalImg' alt="">
      </div>
      <h1>{{item.title}}</h1>
    </div>

    <div>sadsad</div>
    <div>sadsad</div>
    <div>sadsad</div>
    <div>sadsad</div>
    <div>sadsad</div>
    <div>sadsad</div>
    <div>sadsad</div>
    <div>sadsad</div>
    <div>sadsad</div>
    <div>sadsad</div>
    <div>sadsad</div>
    <div>sadsad</div>
    <div>sadsad</div>
    <div>sadsad</div>
    <div>sadsad</div>
    <div>sadsad</div>
    <div>sadsad</div>
    <div>sadsad</div>
    <div>sadsad</div>
    <div>sadsad</div>
    <div>sadsad</div>
    <div>sadsad</div>
    <div>sadsad</div>
    <div>sadsad</div>
    <div>sadsad</div>
    <div>sadsad</div>
    <div>sadsad</div>
    <div>sadsad</div>
    <div>sadsad</div>
    <div>sadsad</div>
    <div>sadsad</div>
    <div>sadsad</div>
    <div>sadsad</div>
    <div>sadsad</div>
    <div>sadsad</div>
    <div>sadsad</div>
    <div>sadsad</div>
    <div>sadsad</div>
    <div>sadsad</div>
    <div>sadsad</div>
    <div>sadsad</div>
    <div>sadsad</div>
    <div>sadsad</div>
    <div>sadsad</div>
    <div>sadsad</div>
    <div>sadsad</div>
    <div>sadsad</div>
    <div>sadsad</div>
    <div>sadsad</div>
    <div>sadsad</div>
    <div>sadsad</div>
    <div>LAST</div>
  </div>
</template>

<script>
export default {
  name: 'SinglePage',
  props: {
    item: Object
  },
  methods:{
    hideSinglePage: function () {
      this.$store.dispatch('hideSinglePage')
      let element = document.getElementById("scroll-body");
      element.classList.remove("scroll-body");
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.single-page-wrp{
  width: 100%;
  min-height: 100vh;
  max-height: 30px;
  overflow-y: scroll;
  background: #eee;
  position: relative;
  .close-single-page{
    position: fixed;
    top: 20px;
    right: 20px;
    background: none;
    border: none;
    outline: none;
    cursor: pointer;
  }

  .single-page-item{
    .s-p-img{
      width: 100%;
      height: auto;
      img{
        width: 100%;
      }
    }
  }
}

/* SCROLL SINGLE PAGE */
.single-page-wrp::-webkit-scrollbar-button {
    background-image: url('');
    background-repeat: no-repeat;
    width: 21px;
    height: 0px;
}
.single-page-wrp::-webkit-scrollbar-track {
    background-color: #eee;
}
.single-page-wrp::-webkit-scrollbar-thumb {
    -webkit-border-radius: 0px;
    border-radius: 0px;
    background-color: #000;
}
.single-page-wrp::-webkit-scrollbar-thumb:hover {
    background-color: #000;
}
.single-page-wrp::-webkit-resizer {
    background-image: url('');
    background-repeat: no-repeat;
    width: 13px;
    height: 0px
}
.single-page-wrp::-webkit-scrollbar {
    width: 13px;
}

@media screen and (max-width: 1024px){
  /* SCROLL SINGLE PAGE */
.single-page-wrp::-webkit-scrollbar-button {
    background-image: url('');
    background-repeat: no-repeat;
    width: 12px;
    height: 0px;
}
.single-page-wrp::-webkit-scrollbar-track {
    background-color: #eee;
}
.single-page-wrp::-webkit-scrollbar-thumb {
    -webkit-border-radius: 0px;
    border-radius: 0px;
    background-color: #000;
}
.single-page-wrp::-webkit-scrollbar-thumb:hover {
    background-color: #000;
}
.single-page-wrp::-webkit-resizer {
    background-image: url('');
    background-repeat: no-repeat;
    width: 4px;
    height: 0px
}
.single-page-wrp::-webkit-scrollbar {
    width: 4px;
}
}
</style>

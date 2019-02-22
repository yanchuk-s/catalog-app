import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    items: [
      {
        id: 1,
        title: 'Stone Island 1',
        priceG: 1488,
        priceOpt: 1000,
        priceDrop: 1200,
        color: 'Red',
        generalImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTbNd8DlMxTQxyFcd_KdQm6vj-6yccwnWL1-SevJLtyjlh2HYa',
        img: [
          {
            src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTbNd8DlMxTQxyFcd_KdQm6vj-6yccwnWL1-SevJLtyjlh2HYa'
          }
        ]
      },
      {
        id: 2,
        title: 'Stone Island 2',
        priceG: 1488,
        priceOpt: 1000,
        priceDrop: 1200,
        color: 'Red',
        generalImg: 'https://img.giglio.com/images/prodPage/264492.009_1.jpg',
        img: [
          {
            src: 'https://img.giglio.com/images/prodPage/264492.009_1.jpg'
          }
        ]
      },
      {
        id: 3,
        title: 'Stone Island 3',
        priceG: 1488,
        priceOpt: 1000,
        priceDrop: 1200,
        color: 'Red',
        generalImg: 'https://img.giglio.com/images/prodPage/272124.009_1.jpg',
        img: [
          {
            src: 'https://img.giglio.com/images/prodPage/272124.009_1.jpg'
          }
        ]
      },
      {
        id: 4,
        title: 'Stone Island 4',
        priceG: 1488,
        priceOpt: 1000,
        priceDrop: 1200,
        color: 'Red',
        generalImg: 'https://res.cloudinary.com/fictive-kin/image/upload/v1/verygoods/prod/bb6d89322a376755ba138ee34ac3fb668ad57a20',
        img: [
          {
            src: 'https://res.cloudinary.com/fictive-kin/image/upload/v1/verygoods/prod/bb6d89322a376755ba138ee34ac3fb668ad57a20'
          }
        ]
      },
      {
        id: 5,
        title: 'Stone Island 5',
        priceG: 1488,
        priceOpt: 1000,
        priceDrop: 1200,
        color: 'Red',
        generalImg: 'https://cdn-images.farfetch-contents.com/stone-island-yellow-crew-neck-logo-patch-cotton-sweatshirt_12991889_13847604_400.jpg',
        img: [
          {
            src: 'https://cdn-images.farfetch-contents.com/stone-island-yellow-crew-neck-logo-patch-cotton-sweatshirt_12991889_13847604_400.jpg'
          }
        ]
      },
      {
        id: 6,
        title: 'Stone Island 6',
        priceG: 1488,
        priceOpt: 1000,
        priceDrop: 1200,
        color: 'Red',
        generalImg: 'https://cdn-images.farfetch-contents.com/stone-island-two-tone-ribbed-detail-jumper_13469261_16311853_400.jpg',
        img: [
          {
            src: 'https://cdn-images.farfetch-contents.com/stone-island-two-tone-ribbed-detail-jumper_13469261_16311853_400.jpg'
          }
        ]
      },
      {
        id: 7,
        title: 'Stone Island 7',
        priceG: 1488,
        priceOpt: 1000,
        priceDrop: 1200,
        color: 'Red',
        generalImg: 'https://cdnd.lystit.com/photos/notre-shop/c2512e13/stone-island-Olive-44735-Lamy-Flock-Jacket-In-Olive.jpeg',
        img: [
          {
            src: 'https://cdnd.lystit.com/photos/notre-shop/c2512e13/stone-island-Olive-44735-Lamy-Flock-Jacket-In-Olive.jpeg'
          }
        ]
      },
      {
        id: 8,
        title: 'Stone Island 8',
        priceG: 1488,
        priceOpt: 1000,
        priceDrop: 1200,
        color: 'Red',
        generalImg: 'https://cdn-images.farfetch-contents.com/12/99/19/44/12991944_14815835_322.jpg',
        img: [
          {
            src: 'https://cdn-images.farfetch-contents.com/12/99/19/44/12991944_14815835_322.jpg'
          }
        ]
      }
    ],
    singlePage: false,
    homePage: true
  },
  mutations: {
    showSinglePage(state){
      state.singlePage = true
      state.homePage = false
    },
    hideSinglePage(state){
      state.singlePage = false
      state.homePage = true
    }
  },
  actions: {
    showSinglePage({commit}){
      commit('showSinglePage')
    },
    hideSinglePage({commit}){
      commit('hideSinglePage')
    }
  }
})

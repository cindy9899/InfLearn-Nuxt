<template>
  <div>
    <div class="container">
      <div class="main-panel">
        <img class="product-image" :src="product.imageUrl" :alt="product.name" />
      </div>
      <div class="side-panel">
        <p class="name">{{product.name}}</p>
        <p class="price">{{product.price}}</p>
        <button type="button" @click="addToCart">카트에 담기</button>
      </div>
    </div>
  </div>
</template>

<script>
// import axios from 'axios'
import {fetchProductById, createCartItem} from '@/api/index'


  export default {
    async asyncData({params}){
      const response = await fetchProductById(params.id)
      const product = response.data
      return {product}
    },
    head() {
      return {
        title: `Shopping Item Detail - ${this.product.name}`,
        htmlAttrs: {
          lang: 'en',
        },
        meta: [
          { charset: 'utf-8' },
          { name: 'viewport', content: 'width=device-width, initial-scale=1' },
          { hid: 'description', name: 'description', content: `이 상품은 ${this.product.name}입니다.` },
          { name: 'format-detection', content: 'telephone=no' },
          { hid: 'og:title', property: 'og:title', content: '상품 상세 페이지'},
          { hid: 'og:description', property: 'og:description', content: '상품 상세 정보를 확인하세요.'},
        ],

      }
  },
    methods: {
      async addToCart(){
        const response = await createCartItem(this.product);
        console.log("detail response: ",response)
        this.$store.commit('addCartItem', this.product);
        this.$router.push('/cart');
      }
    }
    
  }
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  margin: 2rem 0;
}
.product-image {
  width: 500px;
  height: 375px;
}
.side-panel {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 220px;
  text-align: center;
  padding: 0 1rem;
}
</style>
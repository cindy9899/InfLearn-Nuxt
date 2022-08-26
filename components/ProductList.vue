<template>
  <div>
      {{products}}
    </div>
</template>

<script>
import { fetchProducts } from '~/api'
  export default {
    async asyncData() {
       const response = await fetchProducts();
      // console.log(response);
      const products = response.data

      return {products}
    },
  }
</script>

<style lang="scss" scoped>

</style>
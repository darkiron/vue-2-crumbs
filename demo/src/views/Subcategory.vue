<template>
  <div class="container">
    <productCard v-for="(product, index) in products" :key="index" :product="product" :link="true"></productCard>
  </div>
</template>
<script>
import axios from 'axios'
import productCard from '@/components/Product.vue'

export default {
  name: 'subcategory',
  components: {
    productCard
  },
  data () {
    return {
      products: []
    }
  },
  mounted () {
    axios.get('/products.json').then(res => {
      res.data.map(item => {
        if (this.$route.params.subcategory === item.subcategory) {
          this.products.push(item)
        }
      })
    })
  }
}
</script>

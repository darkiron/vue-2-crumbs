<template>
  <div>
     <productCard :product="product" :link="false"></productCard>
  </div>
</template>
<script>
import axios from 'axios'
import productCard from '@/components/Product.vue'

export default {
  name: 'product',
  components: {
    productCard
  },
  computed: {
    product () {
      return this.$store.state.item
    }
  },
  mounted () {
    axios.get('/products.json').then(res => {
      res.data.map(item => {
        if (this.$route.params.productslug === item.slug) {
          this.$store.dispatch('setItem', item)
        }
      })
    })
  }
}
</script>

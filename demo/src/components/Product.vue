<template>
  <div class="product">
    <h3>{{ product.name }}</h3>
    <img :src="product.image">
    <p>{{ product.description }}</p>
    <div> {{ product.price }}</div>
    <router-link class="btn-link" v-if="link" :to="{ name: 'product', params: { productslug: product.slug, category: product.category, subcategory: product.subcategory } }">
      view product
    </router-link>
  </div>
</template>
<script>
export default {
  name: 'product-card',
  props: ['product', 'link']
}
</script>

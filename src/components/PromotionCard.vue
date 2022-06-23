<template>
  <div class="card">
    <img class="product-image" :src="promotion.product.image" />
    <img :src="dicountImgSrc"/>
    <h3>{{promotion.product.name}}</h3>
    <div>{{promotion.product.description}}</div>
    <div>Valoración: {{promotion.rating}}</div>
    <img :src="fullStar"/>
    <img :src="emptyStar"/>
    <div>Vigencia: {{promotion.date_end}} | {{promotion.date_init}}</div>
  </div>
</template>

<script>
import fullStar from '@/assets/icons/full-star.png'
import emptyStar from '@/assets/icons/empty-star.png'
export default {
  data () {
    return {
      fullStar,
      emptyStar
    }
  },
  props: {
    promotion: {
      type: Object,
      required: true
    }
  },
  computed: {
    dicountImgSrc () {
      let discountCode
      const discountStr = this.promotion.discount.toFixed(2).replace('.', '')
      if (this.promotion.discount < 10) {
        discountCode = `0${discountStr}`
      } else {
        discountCode = `${discountStr}`
      }
      return `https://public-storage-cdn-farmapremium.imgix.net/discount-icons/disc_gen_es_${discountCode}.png?w=110`
    }
  }
}
</script>

<style lang="scss" scoped>
.card{
  border: 1px solid #444;
  margin-bottom: 10px;
  max-width: 300px;
}
.product-image{
  width: 200px;
}
</style>

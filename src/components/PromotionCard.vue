<template>
  <div class="card">
    <img class="product-image" :src="promotion.product.image" />
    <img class="product-discount-image" :src="dicountImgSrc"/>
    <div class="description">
      <img v-for="rating in promotion.rating" :key="rating" :src="fullStar"/>
      <img v-for="rating in promotion.rating - 5" :key="rating" :src="emptyStar"/>
      <h3>{{promotion.product.name}}</h3>
      <p>{{promotion.product.description}}</p>
      <p>Vigencia: {{promotion.date_end}} | {{promotion.date_init}}</p>
    </div>
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
  border: 0.5px solid #E2E2E2;
  margin-bottom: 10px;
  max-width: 360px;
  position: relative;
  font-family: 'Atlas Grotesk';
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 20px;
  color: #3D3F49;
}

.description{
  padding: 20px;
}
.product-image{
  width: 100%;
  background-color: #FAFAFA;
  margin-bottom: 20px;
}
.product-discount-image {
position: absolute;
left: 5.17%;
right: 85.67%;
top: 16.4%;
bottom: 78.1%;
}
</style>

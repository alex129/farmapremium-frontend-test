<template>
  <div class="card">
    <img class="product-image" :src="promotion.product.image" />
    <img class="product-discount-image" :src="dicountImgSrc"/>
    <div class="description">
      <img v-for="i in promotion.rating" :key="`${i}-full`" :src="fullStar"/>
      <img v-for="i in 5 - promotion.rating" :key="`${i}-empty`"  :src="emptyStar"/>
      <h3>{{promotion.product.name}}</h3>
      <p>{{promotion.product.description}}</p>
      <p class="text-duedate">
        Vigencia: {{new Date(promotion.date_end).toLocaleDateString('en-us', { month:"2-digit", year:"numeric"})}} | {{new Date(promotion.date_init).toLocaleDateString('en-us', { day: "2-digit", month:"2-digit", year:"numeric"})}}
      </p>
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
  margin-bottom: 10px;
}
.product-discount-image {
position: absolute;
top: 25px;
left: 20px;
}

.description *{
  margin-bottom: 10px;
}
.description h3{
  font-size: 18px;
  font-weight: 500;
  font-size: 18px;
  line-height: 28px;
}

.description p{
  font-size: 13px;
}

.text-duedate{
  font-weight: 400;
  font-size: 13px;
  line-height: 20px;
  color: #019097;
}
</style>

<template>
  <form @submit.prevent="submit">
    <label>Elige el producto en promoción</label>
    <multi-select
      v-model.trim="$v.promotion.product.$model"
      :options="products"
      track-by="id"
      label="name"
      placeholder="Productos"
      select-label=""
      deselect-label=""
      class="select"
      :class=" { 'form-group--error': $v.promotion.product.$error } "
    />
    <div class="error" v-if="!$v.promotion.product.required">Product is required!</div>

    <label>Descuento a aplicar en el producto</label>
    <input placeholder="Ejemplo: 1.55" type="text" v-model="$v.promotion.discount.$model" />
    <div class="error" v-if="!$v.promotion.discount.between">Discount has to be number between 0.05 and 99.95</div>
    <div class="error" v-if="!$v.promotion.discount.required">Discount is required!</div>
    <div class="error" v-if="!$v.promotion.discount.multipleOfFive">Discount has to be multiple of 5!</div>

    <label>Fecha de inicio de la promoción</label>
    <v-date-picker
      :masks="{ title: 'MMM YYYY' }"
      locale="es"
      v-model="promotion.date_init"
      :model-config="{
        type: 'string',
        mask: 'YYYY-MM-DD 00:00:00',
      }"
    >
      <template v-slot="{ inputValue, togglePopover }">
        <input
          :value="inputValue"
          placeholder="Ejemplo: 22/05/2022"
          readonly
          @focus="togglePopover"
          @blur="togglePopover"
        />
      </template>
    </v-date-picker>
    <div class="error" v-if="!$v.promotion.date_init.required">Date init is required!</div>
    <div class="error" v-if="!$v.promotion.date_init.dateFifteenDaysLate">Date init must be 15 days later than the current date</div>

    <label>Fecha de fin de la promoción</label>
    <v-date-picker
      locale="es"
      v-model="promotion.date_end"
      :model-config="{
        type: 'string',
        mask: 'YYYY-MM-DD 23:59:59',
      }"
    >
      <template v-slot="{ inputValue, togglePopover }">
        <input
          placeholder="Ejemplo: 22/05/2022"
          :value="inputValue"
          readonly
          @focus="togglePopover"
          @blur="togglePopover"
        />
      </template>
    </v-date-picker>
    <div class="error" v-if="!$v.promotion.date_end.required">Date end is required!</div>
    <div class="error" v-if="!$v.promotion.date_end.dateFifteenDaysLateAsDateInit">Date end must be 15 days later than the date init</div>

    <button type="submit">Crear promoción</button>
  </form>
</template>

<script>
import axios from 'axios'
import { mapActions, mapState } from 'vuex'
import { required, between } from 'vuelidate/lib/validators'
const dateFifteenDaysLate = (value) => {
  const today = new Date()
  return today.setDate(today.getDate() + 15) <= new Date(value)
}
const dateFifteenDaysLateAsDateInit = (value, vm) => {
  const date = new Date(vm.date_init)
  return date.setDate(date.getDate() + 15) <= new Date(value)
}
const multipleOfFive = (value) => {
  console.log(value, (value * 100) % 5)
  return (value * 100) % 5 === 0
}

export default {
  data () {
    return {
      promotion: {
        date_init: null,
        date_end: null,
        product: null,
        discount: null,
        rating: 0 // Left rating set to default value for new promotions.
      }
    }
  },
  computed: {
    ...mapState('promotions', ['products'])
  },
  methods: {
    ...mapActions('promotions', ['fetchProducts']),
    submit () {
      console.log(this.promotion)
      this.$v.$touch()
      if (!this.$v.$invalid) {
        axios.post('/promotions', this.promotion).then(res => {
          console.log(res)
        }).catch(err => console.log(err))
      }
    }
  },
  created () {
    this.fetchProducts()
  },
  validations: {
    promotion: {
      date_init: { required, dateFifteenDaysLate },
      date_end: { required, dateFifteenDaysLateAsDateInit },
      product: { required },
      discount: {
        required,
        between: between(0.05, 99.95),
        multipleOfFive
      },
      rating: { required }
    }
  }
}
</script>

<style lang="scss" scoped>
form {
  width: 400px;
}
button[type="submit"]{
  margin-top: 30px;
}

.error {
  color: red;
}
</style>

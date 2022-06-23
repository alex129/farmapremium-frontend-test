<template>
  <form @submit.prevent="submit">
    <label>Elige el producto en promoción</label>
    <multi-select
      v-model="promotion.product"
      :options="products"
      track-by="id"
      label="name"
      placeholder="Productos"
      select-label=""
      deselect-label=""
      class="select"
    />
    <label>Descuento a aplicar en el producto</label>
    <input placeholder="Ejemplo: 1.55" type="text" v-model.number="promotion.discount" />
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
    <button type="submit">Crear promoción</button>
  </form>
</template>

<script>
import { mapActions, mapState } from 'vuex'
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
    }
  },
  created () {
    this.fetchProducts()
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
</style>

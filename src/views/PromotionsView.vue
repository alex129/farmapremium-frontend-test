<template>
  <BaseView title="Promociones vigentes">
    <div class="row row-filters">
      <multi-select
        v-model="filterValue"
        :options="filterOptions"
        select-label=""
        deselect-label=""
        track-by="value"
        label="label"
        placeholder="Filtrar por"
        class="select"
      />
      <multi-select
        v-model="sortValue"
        :options="sortOptions"
        select-label=""
        deselect-label=""
        track-by="value"
        label="label"
        placeholder="Ordenar por"
        class="select"
      />
    </div>
    <div class="row">
      <promtion-grid
        :sort-value="sortValue"
        :filter-value="filterValue"
        :promotions="promotions"
      />
    </div>
  </BaseView>
</template>

<script>
import PromtionGrid from '@/components/PromotionGrid.vue'
import BaseView from '@/components/BaseView.vue'
import { mapActions, mapState } from 'vuex'
export default {
  components: { PromtionGrid, BaseView },
  data () {
    return {
      filterValue: null,
      sortValue: null,
      filterOptions: [
        {
          label: 'Ver todos',
          value: {}
        },
        {
          label: 'Filtrar por descuento mayor de 4,00€',
          value: {
            field: 'discount',
            value: 4,
            type: '>'
          }
        },
        {
          label: 'Filtrar por descuento menor de 2,00€',
          value: {
            field: 'discount',
            value: 2,
            type: '<'
          }
        },
        {
          label: 'Filtrar por valoración mayor de 4 estrellas',
          value: {
            field: 'rating',
            value: 4,
            type: '>'
          }
        },
        {
          label: 'Filtrar por valoración menor de 2 estrellas',
          value: {
            field: 'rating',
            value: 4,
            type: '<'
          }
        }
      ],
      sortOptions: [
        {
          label: 'Ordenar por descuento más alto',
          value: {
            field: 'discount',
            value: 'desc'
          }
        },
        {
          label: 'Ordenar por descuento más bajo',
          value: {
            field: 'discount',
            value: 'asc'
          }
        },
        {
          label: 'Ordenar por valoración más alta',
          value: {
            field: 'rating',
            value: 'desc'
          }
        },
        {
          label: 'Ordenar por valoración más baja',
          value: {
            field: 'rating',
            value: 'asc'
          }
        }
      ]
    }
  },
  computed: {
    ...mapState('promotions', ['promotions', 'isFetching', 'error'])
  },
  methods: {
    ...mapActions('promotions', ['fetchPromotions'])
  },
  created () {
    this.fetchPromotions()
  }
}
</script>

<style lang="scss" scoped>
.row-filters {
  height: 50px;
  margin-bottom: 45px;
  display: flex;
  gap: 20px;
  .select {
    width: 400px;
  }
}
</style>

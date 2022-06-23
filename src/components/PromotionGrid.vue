<template>
  <div>
    <div class="pagination">
      <paginate-buttons
        :page-count="numePages"
        :click-handler="onPageClick"
        :prev-text="'<'"
        :next-text="'>'"
        :container-class="'pagination-container'"
        :page-link-class="'page-item'"
        :prev-link-class="'page-item'"
        active-class="page-item-active"
      >
      </paginate-buttons>
    </div>

    <div class="promotions-grid">
      <promtion-card
        v-for="promotion in promotions"
        :key="promotion.id"
        :promotion="promotion"
      ></promtion-card>
    </div>
  </div>
</template>

<script>
import PromtionCard from '@/components/PromotionCard'
const PROMO_PER_PAGE = 9
export default {
  components: { PromtionCard },
  data () {
    return {
      page: 1
    }
  },
  props: {
    promotions: {
      type: Array,
      required: true
    },
    sortValue: {
      type: Object,
      default: () => {
        return {}
      }
    },
    filterValue: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  methods: {
    onPageClick (selectedPage) {
      this.page = selectedPage
    }
  },
  computed: {
    numePages () {
      return Math.ceil(this.promotions.length / PROMO_PER_PAGE)
    }
  }
}
</script>

<style lang="css">
.promotions-grid {
    max-width: 100%;
    margin: 0 auto;
    display: grid;
    gap: 3rem;
}
.pagination-container{
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  margin-bottom: 45px;
}

.page-item {
  font-family: "Atlas Grotesk";
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 16px;
  color: #B1B1B1 !important;
}

.page-item-active a{
    border-radius: 100%;
    background-color: #00B0B9;
    display: inline-block;
    width: 20px;
    height: 20px;
    line-height: 20px;
    color: white !important;
    text-align: center;
}

@media (min-width: 600px) {
  .promotions-grid { grid-template-columns: repeat(2, 1fr); }
}

@media (min-width: 900px) {
  .promotions-grid { grid-template-columns: repeat(3, 1fr); }
}
</style>

<template>
  <BaseView title="Crear una promoción">
    <PromotionForm />
  </BaseView>
</template>

<script>
import PromotionForm from '@/components/PromotionForm.vue'
import BaseView from '@/components/BaseView.vue'
export default {
  components: { PromotionForm, BaseView }
}
</script>

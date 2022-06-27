import PromotionGrid from '@/components/PromotionGrid.vue'
import { createLocalVue, shallowMount } from '@vue/test-utils'
import dbJson from '../../data/db.json'
import Paginate from 'vuejs-paginate'

const localVue = createLocalVue();
localVue.component('PaginateButtons', Paginate)

describe('PromotionGrid.vue', () => {
  it('shoud render list of promotions paginated', async () => {
    const wrapper = shallowMount(PromotionGrid, {
      propsData: { promotions: dbJson.promotions },
      localVue
    })
    const wrapperPromotions = wrapper.findAllComponents('[data-test="promotions"]');
    expect(wrapperPromotions.length).toBe(9)
  })
})

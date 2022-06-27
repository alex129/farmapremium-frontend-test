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

  it('shoud render filteredPromotions', async () => {
    const wrapper = shallowMount(PromotionGrid, {
      propsData: { promotions: dbJson.promotions },
      localVue
    })

    expect(wrapper.vm.filteredPromotions.length).toBe(dbJson.promotions.length)
  })

  it('shoud render filteredPromotions with filter', async () => {
    const wrapper = shallowMount(PromotionGrid, {
      propsData: { 
        promotions: dbJson.promotions,
        filterValue: {
          value: {
            field: 'discount',
            value: 4,
            type: '>'
          }
        }
       },
      localVue
    })

    const filteredPromotions = dbJson.promotions.filter(p => p.discount > 4);

    expect(wrapper.vm.filteredPromotions.length).toBe(filteredPromotions.length)
  })

  it('shoud render filteredPromotions with sort value', async () => {
    const wrapper = shallowMount(PromotionGrid, {
      propsData: { 
        promotions: dbJson.promotions,
        sortValue: {
          value: {
            field: 'discount',
            value: 'desc'
          }
        }
       },
      localVue
    })

    const filteredPromotions = dbJson.promotions.sort((a, b) => (a.discount > b.discount ? -1 : 1));

    expect(filteredPromotions[0].discount).toBe(wrapper.vm.filteredPromotions[0].discount)
  })
})

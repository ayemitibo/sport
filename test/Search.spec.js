import { shallowMount } from '@vue/test-utils'
import Search from '~/components/Search.vue'

describe('Search component', () => {
    it('check if cancel button exists', () => {
        const wrapper = shallowMount(Search, {
            mocks: {
                $utils: {
                    formatToDate(value) {
                        return value
                    }
                }
            },
            stubs: {
                NuxtLink: true
            }
        })

        expect(wrapper.find('#cancel').exists()).toBe(true)
    })
})

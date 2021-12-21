import { shallowMount } from '@vue/test-utils'
import Search from '~/components/Search.vue'

describe('SearchingToast component', () => {
    it('emits routes user back to settings page when close button is clicked', () => {
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
        const cancelButton = wrapper.find('#cancel')
        cancelButton.trigger('click')
        console.log(wrapper.element)
        expect(cancelButton).not.exists()
    })
})

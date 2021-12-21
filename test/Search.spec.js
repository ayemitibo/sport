import { shallowMount } from '@vue/test-utils'
import Search from '~/components/Search.vue'

describe('SearchingToast component', () => {
    it('emits routes user back to settings page when close button is clicked', () => {
        const wrapper = shallowMount(Search)
        const cancelButton = wrapper.find('a')

        console.log(cancelButton)
    })
})

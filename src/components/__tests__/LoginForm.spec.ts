import { describe, it, expect, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import LoginForm from '@/components/LoginForm.vue'
import { setActivePinia, createPinia } from 'pinia'

describe('LoginForm', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('renders properly', () => {
    const wrapper = mount(LoginForm, {})

    expect(wrapper.find('provet-input').element).toBeDefined()
    expect(wrapper.find('provet-checkbox').element).toBeDefined()
    expect(wrapper.find('provet-button').element).toBeDefined()
  })
})

import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'

import TodoList from '@/components/todolist/TodoList.vue'

describe('TodoList', () => {
  it('renders correct TodoList', () => {
    const wrapper = mount(TodoList)
    const items = wrapper.findAll('[data-test="todo-item"]')

    expect(wrapper.exists()).toBe(true)
    expect(items.length).toBe(3)
  })
})

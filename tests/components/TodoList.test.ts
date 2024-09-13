import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'

import TodoList from '@/components/todolist/TodoList.vue'
import TodoItem from '@/components/todolist/TodoItem.vue'

describe('TodoList', () => {
  it('renders correct TodoList', () => {
    const wrapper = mount(TodoList)
    const items = wrapper.findAll('[data-test="todo-item"]')

    expect(wrapper.exists()).toBe(true)
    expect(items.length).toBe(3)
  })

  it('adds new TodoItem', async () => {
    const wrapper = mount(TodoList)

    const form = wrapper.find('[data-test="todo-form"]')
    const field = form.find('[data-test="todo-field"]')
    const input = field.find('[data-test="todo-field-input"]')

    await input.setValue('Новая задача')
    await form.trigger('submit')

    //TODO: Посчитать исходное количество TodoItem, проверить, что их количество увеличелось на 1
    //TODO: Проверить наличие TodoItem с названием «Новая задача»

    const items = wrapper.findAll('[data-test="todo-item"]')
    expect(items.length).toBe(4)
    expect(wrapper.text()).toContain('Новая задача')
  })

  it('removes TodoItem', async () => {
    const wrapper = mount(TodoList)

    const currentItems = wrapper.findAll('[data-test="todo-item"]')
    expect(currentItems.length).toBe(3)

    const item = currentItems[0]
    const button = item.find('[data-test="todo-item-remove"]')
    await button.trigger('click')

    const updatedItems = wrapper.findAll('[data-test="todo-item"]')

    expect(updatedItems.length).toBe(2)
  })
})

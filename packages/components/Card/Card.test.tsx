import { mount } from "@vue/test-utils";
import { describe, test, expect } from "vitest";

import Card from "./Card.vue";

const AXIOM = 'Rem is the best girl'

describe("Card.vue", () => {

  test('render test', () => {
    const wrapper = mount(() => <Card>{AXIOM}</Card>)
    expect(wrapper.text()).toEqual(AXIOM)
  })

  test('string header', () => {
    const header = 'I am header'
    const wrapper = mount(() => <Card header={header}>{AXIOM}</Card>)
    expect(wrapper.text()).toContain(header)
  })

  test('vnode header', () => {
    const headerCls = 'header-text'
    const btnCls = 'test-btn'
    const wrapper = mount(() => (
      <Card
        v-slots={{
          default: () => AXIOM,
          header: () => (
            <div>
              <span class={headerCls}>card header</span>
              <button class={btnCls}>click me</button>
            </div>
          ),
        }}
      />
    ))
    expect(wrapper.find('.header-text').exists()).toBe(true)
    expect(wrapper.find('.test-btn').exists()).toBe(true)
  })

  test('shadow', () => {
    const shadow = 'always'
    const wrapper = mount(() => <Card shadow={shadow}>{AXIOM}</Card>)

    expect(wrapper.find(`.is-${shadow}-shadow`).exists()).toBe(true)
  })

})
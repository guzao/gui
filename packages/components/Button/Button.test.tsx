import { describe, test, expect, vi } from "vitest";
import { mount } from "@vue/test-utils";

import Button from "./Btton.vue";
import ButtonGroup from "./ButtonGroup.vue";

describe("Button.vue", () => {

  test("basic button", async () => {

    const onClick = vi.fn();

    const wrapper = mount(() => (
      <Button tag={'button'} type="primary" {...{ onClick }}>
        button content
      </Button>
    ));

    // bae class  
    expect(wrapper.get("button").element.className).include('gui-button');

    // tag 
    expect(wrapper.get("button").element.tagName).toBe("BUTTON");

    // slot
    expect(wrapper.get("button").text()).toBe("button content");

    // events
    await wrapper.get("button").trigger("click");
    expect(onClick).toHaveBeenCalledOnce();

  });

  test('type should include input type prop ', () => {

    const wrapper = mount(() => (
      <Button tag={'button'} type="primary" >
        button content
      </Button>
    ));
    expect(wrapper.get("button").element.className).include('gui-button--primary');


    const wrapper1 = mount(() => (
      <Button tag={'button'} type="success" >
        button content
      </Button>
    ));
    expect(wrapper1.get("button").element.className).include('gui-button--success');

    const wrapper2 = mount(() => (
      <Button tag={'button'} type="danger" >
        button content
      </Button>
    ));
    expect(wrapper2.get("button").element.className).include('gui-button--danger');

    const wrapper3 = mount(() => (
      <Button tag={'button'} type="warning" >
        button content
      </Button>
    ));
    expect(wrapper3.get("button").element.className).include('gui-button--warning');

    const wrapper4 = mount(() => (
      <Button tag={'button'} type="info" >
        button content
      </Button>
    ));
    expect(wrapper4.get("button").element.className).include('gui-button--info');


  })

  test('size should include input size prop', () => {

    const wrapper = mount(() => (
      <Button tag={'button'} size="large">
        button content
      </Button>
    ));
    expect(wrapper.get("button").element.className).include('gui-button--large');

    const wrapper1 = mount(() => (
      <Button tag={'button'} size="default">
        button content
      </Button>
    ));
    expect(wrapper1.get("button").element.className).include('gui-button--default');

    const wrapper2 = mount(() => (
      <Button tag={'button'} size="small">
        button content
      </Button>
    ));
    expect(wrapper2.get("button").element.className).include('gui-button--small');

  })

  test('plain should include input plain prop', () => {

    const wrapper = mount(() => (
      <Button tag={'button'} plain={true}>
        button content
      </Button>
    ));
    expect(wrapper.get("button").element.className).include('is-plain');

  })

  test('circle should include input circle prop', () => {

    const wrapper = mount(() => (
      <Button tag={'button'} circle={true}>
        button content
      </Button>
    ));
    expect(wrapper.get("button").element.className).include('is-circle');

  })

  test('round should include input round prop', () => {

    const wrapper = mount(() => (
      <Button tag={'button'} round={true}>
        button content
      </Button>
    ));
    expect(wrapper.get("button").element.className).include('is-round');

  })

  test('disabled should include input disabled prop', async () => {

    const onClick = vi.fn();

    const wrapper = mount(() => (
      <Button tag={'button'} disabled={true} {...{ onClick }}>
        button content
      </Button>
    ));

    expect(wrapper.get("button").element.className).include('is-disabled');


    // events
    await wrapper.get("button").trigger("click");
    expect(onClick).not.toHaveBeenCalledOnce();


  })

  test('autofocus should to be autofocus', () => {
    const wrapper = mount(() => (
      <Button tag={'button'} autofocus={true}>
        button content
      </Button>
    ));

    expect(wrapper.get('button').element.autofocus).toBe(true)

  })


});



describe("ButtonGroup.vue", () => {
  test("basic button group", () => {
    const wrapper = mount(() => (
      <ButtonGroup>
        <Button>button 1</Button>
        <Button>button 2</Button>
      </ButtonGroup>
    ));

    expect(wrapper.classes()).toContain("gui-button-group");
  });

  test("button group size", () => {
    const sizes = ["large", "default", "small"];
    sizes.forEach((size) => {
      const wrapper = mount(() => (
        <ButtonGroup size={size as any}>
          <Button>button 1</Button>
          <Button>button 2</Button>
        </ButtonGroup>
      ));

      const buttonWrapper = wrapper.findComponent(Button);
      expect(buttonWrapper.classes()).toContain(`gui-button--${size}`);
    });
  });

  test("button group type", () => {
    const types = ["primary", "success", "warning", "danger", "info"];
    types.forEach((type) => {
      const wrapper = mount(() => (
        <ButtonGroup type={type as any}>
          <Button>button 1</Button>
          <Button>button 2</Button>
        </ButtonGroup>
      ));

      const buttonWrapper = wrapper.findComponent(Button);
      expect(buttonWrapper.classes()).toContain(`gui-button--${type}`);
    });
  });

  test("button group disabled", () => {
    const wrapper = mount(() => (
      <ButtonGroup disabled>
        <Button>button 1</Button>
        <Button>button 2</Button>
      </ButtonGroup>
    ));

    const buttonWrapper = wrapper.findComponent(Button);
    expect(buttonWrapper.classes()).toContain(`is-disabled`);
  });
});

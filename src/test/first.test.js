import TestComp from "../components/TestComp.vue"; //компонент, который будем тестить
import { mount } from "@vue/test-utils"; // метод, принимающий два парама: компонент, который будем тетстить и опции.пропсы тестирования

describe('Test for TestComp', () => {
  test('test props', () => {
    const wrapper = mount(TestComp, {
      propsData: {
        msg: "hello vue"
      }
    })
    expect(wrapper.text()).toContain('The message is: hello vue')
  })
})
/** 
 * экспект вернет тру\фолс если враппер будет соответствовать ожидаемому.
 * текст() приведет содержимое к тексту без хтмл
 * html() соответственно, будет проверять и html теги в том числе
 * в туконтеин() мы передаем ожидаемое.
 * 
 * **/
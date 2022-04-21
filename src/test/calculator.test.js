import CalculatorComp from "../components/CalculatorComp.vue"; //компонент, который будем тестить
import { mount } from "@vue/test-utils"; // метод, принимающий два парама: компонент, который будем тетстить и опции.пропсы тестирования

describe('Test for Calculator', () => {
  let wrapper;
  let oper2Input;
  let oper1Input;

  beforeEach(() => {
    wrapper = mount(CalculatorComp);
    oper2Input = wrapper.find('input[name="oper2"]')
    oper1Input = wrapper.find('input[name="oper1"]')
  })
  it('test operand1 input value', async () => {
    oper1Input = wrapper.find('input[name="oper1"]')
    oper1Input.setValue('1')
    expect(wrapper.vm.operand1).toBe(1)
  })
  it('test operand2 input value', async () => {
    oper2Input = wrapper.find('input[name="oper2"]')
    oper2Input.setValue('1')
    expect(wrapper.vm.operand2).toBe(1)
  })

  //Methods
  it('test operation +', async () => {

    const operation = wrapper.find('button[name="+"]')


    oper1Input.setValue('1')
    oper2Input.setValue('1')
    operation.trigger('click')

    expect(wrapper.vm.result).toBe(2)
  })
  it('test operation -', async () => {

    const operation = wrapper.find('button[name="-"]')


    oper1Input.setValue('1')
    oper2Input.setValue('1')
    operation.trigger('click')

    expect(wrapper.vm.result).toBe(0)
  })
  it('test operation /', async () => {

    const operation = wrapper.find('button[name="/"]')


    oper1Input.setValue('1')
    oper2Input.setValue('1')
    operation.trigger('click')

    expect(wrapper.vm.result).toBe(1)
  })
  it('test operation *', async () => {

    const operation = wrapper.find('button[name="*"]')


    oper1Input.setValue('1')
    oper2Input.setValue('3')
    operation.trigger('click')

    expect(wrapper.vm.result).toBe(3)
  })
  it('test operation %', async () => {

    const operation = wrapper.find('button[name="%"]')


    oper1Input.setValue('7')
    oper2Input.setValue('2')
    operation.trigger('click')

    expect(wrapper.vm.result).toBe(1)
  })
  it('test operation pow', async () => {

    const operation = wrapper.find('button[name="pow"]')


    oper1Input.setValue('3')
    oper2Input.setValue('2')
    operation.trigger('click')

    expect(wrapper.vm.result).toBe(9)
  })
})
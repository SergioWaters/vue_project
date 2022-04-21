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
    oper1Input.setValue('1')
    expect(wrapper.vm.operand1).toBe(1)
  })
  it('test operand2 input value', async () => {
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
  //keyboard
  it('test numbers keboard visible', async () => {

    wrapper.find('input[name="showNumbers"]').setChecked(true)

    expect(wrapper.text()).toContain("backspace")
    expect(wrapper.html()).toContain('<div class="numberKeys">')
  })
  it('test keboard input2', async () => {
    wrapper.find('input[name="showNumbers"]').setChecked(true)

    wrapper.find('input[id="operand2"]').setChecked(true)
    expect(wrapper.vm.operandPick).toBe("operand2")

    wrapper.find("button[name='7']").trigger('click')
    expect(wrapper.vm.operand2).toBe(7)
  })
  it('test keboard input1', async () => {
    wrapper.find('input[name="showNumbers"]').setChecked(true)

    wrapper.find('input[id="operand1"]').setChecked(true)
    expect(wrapper.vm.operandPick).toBe("operand1")

    wrapper.find("button[name='7']").trigger('click')
    expect(wrapper.vm.operand1).toBe(7)
  })
  it('test keboard buttons', async () => {

    wrapper.find('input[name="showNumbers"]').setChecked(true)

    wrapper.find('button[name="0"]').trigger('click')
    expect(wrapper.vm.operand1).toBe(0)
    wrapper.find('button[name="9"]').trigger('click')
    expect(wrapper.vm.operand1).toBe(9)
    wrapper.find('button[name="8"]').trigger('click')
    expect(wrapper.vm.operand1).toBe(98)
    wrapper.find('button[name="7"]').trigger('click')
    expect(wrapper.vm.operand1).toBe(987)
    wrapper.find('button[name="6"]').trigger('click')
    expect(wrapper.vm.operand1).toBe(9876)
    wrapper.find('button[name="5"]').trigger('click')
    expect(wrapper.vm.operand1).toBe(98765)
    wrapper.find('button[name="4"]').trigger('click')
    expect(wrapper.vm.operand1).toBe(987654)
    wrapper.find('button[name="3"]').trigger('click')
    expect(wrapper.vm.operand1).toBe(9876543)
    wrapper.find('button[name="2"]').trigger('click')
    expect(wrapper.vm.operand1).toBe(98765432)
    wrapper.find('button[name="1"]').trigger('click')
    expect(wrapper.vm.operand1).toBe(987654321)

  })

  it('test input=3 & keboard button 5', async () => {
    wrapper.find('input[name="showNumbers"]').setChecked(true)
    oper1Input.setValue('3')

    const button = wrapper.find('button[name="5"]')
    button.trigger('click')

    expect(wrapper.vm.operand1).toBe(35)
  })
  it('test input=333 & keboard button backspace', async () => {
    wrapper.find('input[name="showNumbers"]').setChecked(true)

    oper1Input.setValue('333')

    wrapper.find('button[name="backspace"]').trigger('click')

    expect(wrapper.vm.operand1).toBe(33)
  })
})
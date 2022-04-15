<template>
  <div>
    <h1>{{ msg }}</h1>
    <hr />
    <div class="display">
      <input
        v-model.number="operand1"
        type="number"
        :disabled="operandPick === 'pick2'"
      />
      <input
        v-model.number="operand2"
        type="number"
        :disabled="operandPick === 'pick1'"
      />

      = {{ result }}
    </div>

    <div class="keyboard">
      <button
        v-for="operation in operationArr"
        :key="operation"
        @click="calculate(operation)"
      >
        {{ operation }}
      </button>
    </div>

    <label for="numbersCheckbox">
      <input
        type="checkbox"
        name="showNumbers"
        id="numbersCheckbox"
        v-model="numberKeysCheckbox"
      />
      Отобразить экранную клавиатуру с цифрами
    </label>

    <div class="numberKeys" v-show="numberKeysCheckbox">
      <button
        v-for="number in numberArr"
        :key="number"
        @click="addNumber(number)"
      >
        {{ number }}
      </button>
      <button @click="removeNumber()">backspace</button>

      <div class="operandPick">
        <label for="operand1">
          Операнд 1
          <input
            type="radio"
            name="operand1"
            id="operand1"
            v-model="operandPick"
            value="pick1"
          />
        </label>
        <label for="operand2">
          Операнд 2
          <input
            type="radio"
            name="operand2"
            id="operand2"
            v-model="operandPick"
            value="pick2"
          />
        </label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CalculatorComp",
  data() {
    return {
      msg: "Calculator",
      operandPick: " ",
      numberKeysCheckbox: "false",
      message: "Hello Vue",
      operand1: 0,
      operand2: 0,
      result: 0,
      numberArr: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      operationArr: ["+", "-", "/", "*", "%", "pow"],
    };
  },
  methods: {
    doThat(str, evnt) {
      console.log("click", str, evnt);
    },

    onValidate() {
      console.log("validation true");
    },

    addNumber(number) {
      if (this.operandPick === "pick1")
        this.operand1 = this.operand1 + `${number}`;
      if (this.operandPick === "pick2")
        this.operand2 = this.operand2 + `${number}`;
    },

    removeNumber() {
      if (this.operandPick === "pick1")
        this.operand1 = this.operand1.slice(0, -1);
      if (this.operandPick === "pick2")
        this.operand2 = this.operand2.slice(0, -1);
    },

    calculate(operation) {
      const { operand1, operand2 } = this;
      switch (operation) {
        case "+":
          this.result = +operand1 + +operand2;
          break;
        case "-":
          this.result = +operand1 - +operand2;
          break;
        case "/":
          this.result = +operand1 / +operand2;
          break;
        case "*":
          this.result = +operand1 * +operand2;
          break;
        case "%":
          this.result = +operand1 % +operand2;
          break;
        case "pow":
          this.result = Math.pow(+operand1, +operand2);
          break;
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.keyboard {
  margin: 20px 0px 50px 0px;
}
</style>
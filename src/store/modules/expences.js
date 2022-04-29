export default {
  state: {
    expencesArr: [],
    stackOfPages: 10,
    focusPage: 1,
  },
  getters: {
    getExpencesSlice(state) {
      return state.expencesArr.slice(
        state.stackOfPages * (state.focusPage - 1),
        state.stackOfPages * (state.focusPage - 1) + state.stackOfPages);
    },
    getAllExpences(state) {
      return state.expencesArr
    },
    getStackOfPages(state) {
      return state.stackOfPages
    },
    getFocusPage(state) {
      return state.focusPage
    },
    getCategoryArr(state) {
      // let categoryArr = state.expencesArr.reduce((acc, expence) => {
      //   if (acc.map[expence.category]) return acc;
      //   acc.map[expence.category] = true;
      //   acc.categoryArr.push(expence.category);
      //   return acc;
      // }, {
      //   map: {},
      //   categoryArr: []
      // }).categoryArr;
      let categoryArr = [...new Set(state.expencesArr.map((item) => item.category))];

      return categoryArr
    }
  },
  mutations: {
    updateExpences(state, arr) {
      arr.forEach(element => {
        if (!element.id) element.id = Math.floor(Math.random() * Math.floor(Math.random() * Date.now()))
      });
      state.expencesArr = arr
    },
    updateFocusPage(state, focusPage) {
      state.focusPage = focusPage
    },
    updateStackOfPages(state, stackOfPages) {
      state.stackOfPages = stackOfPages
    },
    updNewExpence(state, expence) {
      if (!expence.id) expence.id = Math.floor(Math.random() * Math.floor(Math.random() * Date.now()))
      state.expencesArr.unshift(expence);
    },
    updEditExpence(state, [indx, item]) {
      item ? state.expencesArr.splice(+indx, 1, item) : state.expencesArr.splice(+indx, 1)
    }
  },
  actions: {
    fetchData(ctx) {
      const arr = [
        {
          date: "2020-03-28",
          category: "Food",
          value: 169,
        },
        {
          date: "2020-03-24",
          category: "Transport",
          value: 360,
        },
        {
          date: "2020-03-24",
          category: "Food",
          value: 532,
        },
        {
          date: "2020-03-24",
          category: "Food",
          value: 532,
        },
        {
          date: "2020-03-24",
          category: "Food",
          value: 532,
        },
        {
          date: "2020-03-24",
          category: "Food",
          value: 532,
        },
        {
          date: "2020-03-24",
          category: "Food",
          value: 532,
        },
        {
          date: "2020-03-24",
          category: "Food",
          value: 532,
        },
        {
          date: "2020-03-24",
          category: "Food",
          value: 532,
        },
        {
          date: "2020-03-24",
          category: "Food",
          value: 532,
        },
        {
          date: "2020-03-24",
          category: "Food",
          value: 532,
        },
      ];
      ctx.commit('updateExpences', arr)
    },
  },
}
export default {
  state: {
    expencesArr: [],
    stackOfPages: 5,
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
      let categoryArr = state.expencesArr.reduce((acc, expence) => {
        if (acc.map[expence.category]) return acc;
        acc.map[expence.category] = true;
        acc.categoryArr.push(expence.category);
        return acc;
      }, {
        map: {},
        categoryArr: []
      }).categoryArr;
      return categoryArr
    }
  },
  mutations: {
    updateExpences(state, arr) {
      state.expencesArr = arr
    },
    updateFocusPage(state, focusPage) {
      state.focusPage = focusPage
    },
    updateStackOfPages(state, stackOfPages) {
      state.stackOfPages = stackOfPages
    },
    addNewExpence(state, expence) {
      state.expencesArr.unshift(expence);
    },
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
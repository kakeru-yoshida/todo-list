import axios from 'axios'
export default {
  namespaced: true,
  state: {
    data:{},
    error:"",
    loginState: false
  },

  getters: {
    error (state) {
      return state.error
    },
    loginState (state) {
      return state.loginState
    }
  },

  mutations: {
    dataInsertion(state,value) {
      state.data = value
    },

    errorInsertion(state,value) {
      state.error = value
    },

    loginSuccessful(state) {
      state.error = ""
      state.loginState = true
    }
  },

  actions: {
    async loginDecision({state,commit,dispatch},data) {
      const communicateForText = 'username=' + data.nameValue     
      await dispatch('dataImport', communicateForText)
      dispatch('selectionLoginState',data.paswordValue)
    },

    selectionLoginState({state,commit},data) {
      if(state.data.length) {
        if(state.data[0].email === data) {
          commit('loginSuccessful')
        }
        else {
          commit('errorInsertion',"パスワードが違います")
          }
        }
        else {
        commit('errorInsertion',"名前が違います");
      }
    },

    dataImport({commit},data) {
      return new Promise(resolve => {
        let value = {}
        axios.get('https://jsonplaceholder.typicode.com/users?' + data)
        .then(function (response) {
          value = response.data
          commit('dataInsertion',value);
        })
        .catch(function (error) {
          value = error
          commit('error',value);
        })
        .finally(function () {
          resolve()
        });
      })

    }
  },
};
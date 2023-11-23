import { createStore } from "vuex";
import axios from "axios";
export default createStore({
   state: {
      serv: `http://localhost:3000`,
      roles: [],
      questions: [],
   },
   getters: {
      SERV(state) {
         return state.serv;
      },
      ROLES(state) {
         return state.roles;
      },
      QUESTIONS(state) {
         return state.questions;
      },
   },
   mutations: {
      SET_ROLES_TO_STATE: (state, data) => {
         state.roles = data;
      },
      SET_QUESTIONS_TO_STATE: (state, data) => {
         state.questions = data;
      },
   },
   actions: {
      GET_ROLES({ commit }) {
         return axios(`${this.getters.SERV}/roles.json`, {
            method: "GET",
         })
            .then((response) => {
               commit("SET_ROLES_TO_STATE", response.data.roles);
               return response;
            })
            .catch((error) => {
               console.log(error);
               return error;
            });
      },
      GET_QUESTIONS({ commit }) {
         return axios(`${this.getters.SERV}/questions.json`, {
            method: "GET",
         })
            .then((response) => {
               commit("SET_QUESTIONS_TO_STATE", response.data.questions);
               return response;
            })
            .catch((error) => {
               console.log(error);
               return error;
            });
      },
   },
   modules: {},
});

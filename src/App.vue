<template>
   <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/quiz">Quiz</router-link>
      {{ ROLES }}
      <select @change="startQuiz">
         <option value="null">Null</option>
         <option
            v-for="(value, key) in ROLES"
            :value="key"
            :key="key"
         >
            {{ value }}
         </option>
      </select>
   </nav>
   <router-view />
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
   name: "App",
   components: {},
   props: {},
   data() {
      return {};
   },
   computed: {
      ...mapGetters([
         "ROLES",
         "QUESTIONS",
         // "NAME"
      ]),
   },
   methods: {
      ...mapActions([
         "GET_ROLES",
         "GET_QUESTIONS",
         // "NAME"
      ]),
      startQuiz(e) {
         console.log(e);
      },
   },
   watch: {},
   created() {},
   beforeMount() {},
   mounted() {
      this.GET_ROLES();
      this.GET_QUESTIONS();
   },
   beforeUnmount() {},
   unmounted() {},
   beforeUpdate() {},
   updated() {},
};
</script>

<style lang="scss"></style>

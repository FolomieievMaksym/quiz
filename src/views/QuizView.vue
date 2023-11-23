<template>
   <div class="quiz">Quiz</div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
   name: "QuizView",
   components: {},
   props: {},
   data() {
      return {};
   },
   computed: {
      ...mapGetters([
         // "NAME",
         // "NAME"
      ]),
   },
   methods: {
      ...mapActions([
         // "NAME",
         // "NAME"
      ]),
   },
   watch: {},
   created() {},
   beforeMount() {},
   mounted() {},
   beforeUnmount() {},
   unmounted() {},
   beforeUpdate() {},
   updated() {},
};
</script>

<style lang="scss">
.quiz {
}
</style>

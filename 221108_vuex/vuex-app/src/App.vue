<template>
  <div id="app">
    <h2>
      {{ message }}
    </h2>
    <h4>{{ messageLength }} 자의 message</h4>
    <input type="text"
      @keyup.enter="changeMessage" v-model="inputData"
    >
  </div>
</template>

<script>

export default {
  name: 'App',

  data() {
    return {
      inputData: null,
    }
  },

  components: {
  },

  computed: {
    message() {
      return this.$store.state.message
    },
    messageLength() {
      return this.$store.getters.messageLength
    }
  },

  methods: {
    changeMessage() {
      const newMessage = this.inputData
      this.$store.dispatch('changeMessage', newMessage)
      this.inputData = null
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

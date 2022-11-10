<template>
  <div class="about">
    <h1>어바웃</h1>
    <!-- <router-link :to="{ name: 'home' }">Home</router-link> <br>
    <button @click="toHome">
      hOME
    </button> -->
    <input 
      type="text" 
      v-model="inputData"
      @keyup.enter="sendData"
    >
  </div>
</template>

<script>
export default {
  name: 'AboutView',
  data() {
    return {
      inputData: null,
    }
  },
  methods: {
    toHome() {
      this.$router.push({ name: 'home' })
    },
    sendData() {
      this.$router.push({ name: 'hello', params: {userName: this.inputData} })
      this.inputData = null
    }
  },
}
</script>
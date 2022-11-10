<template>
  <div>
    <h1>Hello</h1>
    <!-- <h2>name : {{ $route.params.userName }}</h2> -->
    <h2>name : {{ userName }}</h2>
  </div>
</template>

<script>
export default {
  name: 'HelloView',

  data() {
    return {
      userName: this.$route.params.userName
    }
  },

  beforeRouteUpdate(to, from, next) {
    this.userName = to.params.userName
    next()
  }

}
</script>

<style>

</style>
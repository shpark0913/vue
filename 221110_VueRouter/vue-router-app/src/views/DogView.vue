<template>
  <div>
    <p v-if="!imgSrc">{{ message }}</p>
    <h1>왈왈으르렁</h1>
    <img :src="imgSrc" alt="">
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'DogView',
  data() {
    return {
      imgSrc: null,
      message: '로딩중학교',
    }
  },
  methods: {
    getDogImage() {
      const breed = this.$route.params.breed
      const dogImageUrl = `https://dog.ceo/api/breed/${breed}/images/random`

      axios({
        method: 'get',
        url: dogImageUrl
      })
        .then((response) => {
          console.log(response);
          const imgSrc = response.data.message
          this.imgSrc = imgSrc
        })
        .catch((error) => {
          this.$router.push('/404')
          console.log(error);
        })
    }
  },
  created() {
    this.getDogImage()
  }
}
</script>

<style>

</style>
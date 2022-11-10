<template>
  <div>
    <h1>Articles</h1>
    <hr>
    <!-- {{ articles }} -->
    <ArticleItemVue
      v-for="article in articles"
      :key="article.id"
      :article=article
    />
  </div>
</template>

<script>
import ArticleItemVue from '@/components/ArticleItem.vue';

export default {
  name: 'IndexView',
  components: {
    ArticleItemVue
  },
  computed: {
    articles() {
      return this.$store.state.articles
    }
  }
}
</script>

<style>

</style>
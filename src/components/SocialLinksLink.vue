<template>
  <a
      :href="link.href"
      :title="link.title"
      target="_blank"
      class="SocialLinksLink"
  >
    <img :src="linkToImage" :alt="link.alt" class="image">
  </a>
</template>

<script>
export default {
  name: 'SocialLinksLink',
  props: {
    link: {
      type: Object,
      required: true
    }
  },
  computed: {
    linkToImage () {
      return require(`@/assets/images/${this.link.icon}.svg`)
    }
  }
}
</script>
<style lang="stylus">
@import '~@/assets/styles/vars'

.SocialLinksLink
  padding: 1rem 0.7rem
  display: block
  def-transit()
  .image
    width: 46px
    height: 46px

</style>

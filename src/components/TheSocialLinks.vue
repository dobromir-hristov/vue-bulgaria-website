<template>
  <div class="TheSocialLinks">
    <social-links-link
        v-for="(link, index) in links"
        :key="index"
        :link="link"
    />
  </div>
</template>

<script>
import SocialLinksLink from './SocialLinksLink'

export default {
  name: 'TheSocialLinks',
  components: { SocialLinksLink },
  data () {
    return {
      links: [
        { icon: 'facebook', href: 'https://www.facebook.com/groups/1533894873356349/', title: 'Vue.js Bulgaria Facebook Page', alt: 'Facebook Logo' },
        { icon: 'twitter', href: 'https://twitter.com/VueJSBulgaria', title: 'Vue.js Bulgaria Twitter Profile', alt: 'Twitter Logo' }
      ]
    }
  }
}
</script>
<style lang="stylus">
@import '~@/assets/styles/vars'

.TheSocialLinks
  display: flex
  justify-content: center
</style>

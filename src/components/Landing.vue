<template>
  <div class="Landing">
    <div class="wrapper">
      <img src="@/assets/logo.png" class="logo" alt="Vue Bulgaria">
      <the-title/>
      <the-social-links/>
    </div>
    <the-mountains/>
  </div>
</template>

<script>
import TheMountains from './TheMountains'
import TheSocialLinks from './TheSocialLinks'
import TheTitle from './TheTitle'

export default {
  name: 'Landing',
  components: { TheSocialLinks, TheTitle, TheMountains },
  data () {
    return {}
  }
}
</script>

<style lang="stylus">
@import "~@/assets/styles/vars"
.Landing
  min-height: 100vh
  display: flex
  flex-flow: column
  .wrapper
    display: flex
    align-items: center
    flex-flow: column
    text-align center
    max-width: 100%
    padding: 2rem
    padding-bottom: 0
    overflow-x hidden
    +desktop()
      padding: 4rem
      padding-bottom: 0

  .logo
    width: 150px
</style>

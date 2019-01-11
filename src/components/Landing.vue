<template>
  <div class="Landing">
    <div class="wrapper">
      <img src="@/assets/logo.svg" class="logo" alt="Vue Bulgaria">
      <the-title/>
      <app-events/>
      <the-social-links/>
    </div>
    <the-mountains/>
  </div>
</template>

<script>
import AppEvents from './AppEvents'
import TheMountains from './TheMountains'
import TheSocialLinks from './TheSocialLinks'
import TheTitle from './TheTitle'

export default {
  name: 'Landing',
  components: { AppEvents, TheSocialLinks, TheTitle, TheMountains }
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
    z-index: 1
    +desktop()
      padding: 4rem
      padding-bottom: 0

  .logo
    width: 80px
    +desktop()
      width: 150px
</style>

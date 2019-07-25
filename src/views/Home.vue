<template>
  <div class="Home">
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
import TheTitle from '@/components/TheTitle'
import AppEvents from '@/components/AppEvents'
import TheMountains from '@/components/TheMountains'
import TheSocialLinks from '@/components/TheSocialLinks'

export default {
  name: 'Home',
  components: { AppEvents, TheSocialLinks, TheTitle, TheMountains }
}
</script>

<style lang="stylus">
@import "~@/assets/styles/vars"
.Home
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
</style>

<template>
  <div class="TheMountains">
    <div class="mountain mountain--left mountain--left-blue">
      <img src="@/assets/images/mountains/left_blue.svg" alt="">
    </div>
    <div class="mountain mountain--right mountain--right-blue">
      <img src="@/assets/images/mountains/right_blue.svg" alt="">
    </div>
    <div class="mountain mountain--right mountain--right-green">
      <img src="@/assets/images/mountains/right_green.svg" alt="">
    </div>
    <div class="mountain mountain--left mountain--left-green">
      <img src="@/assets/images/mountains/left_green.svg" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: 'TheMountains'
}
</script>
<style lang="stylus">
@import '~@/assets/styles/vars'
mountainAnimation(name, delay = 0.1s, duration = 1s)
  animation-name: name
  animation-delay: 0.2s + delay
  animation-duration: duration
  animation-fill-mode both

.TheMountains
  width: 100%
  position: relative
  overflow: hidden
  flex: 1
  min-height: 24vw
  +desktop()
    min-height: 0

.mountain
  position: absolute
  bottom: -5px
  +desktop() {
    bottom: -10%
  }
  img
    display: block
  &--left
    left: 0
    &-blue
      width: 115vw
      transform: translateX(-50%)
      img
        mountainAnimation(slideInLeft, .3)
    &-green
      width: 65vw
      transform: translateX(-18%)
      img
        mountainAnimation(slideInLeft)

  &--right
    right: 0
    &-blue
      width: 85vw
      transform: translateX(30%)
      img
        mountainAnimation(slideInRight, .3)
    &-green
      width: 65vw
      transform: translateX(12%)
      img
        mountainAnimation(slideInRight)
</style>

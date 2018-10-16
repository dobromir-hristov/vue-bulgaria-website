<template>
  <div class="TheMountains">
    <img src="@/assets/images/mountains/left_blue.svg" class="mountain mountain--left mountain--left-blue" alt="">
    <img src="@/assets/images/mountains/right_blue.svg" class="mountain mountain--right mountain--right-blue" alt="">
    <img src="@/assets/images/mountains/right_green.svg" class="mountain mountain--right mountain--right-green" alt="">
    <img src="@/assets/images/mountains/left_green.svg" class="mountain mountain--left mountain--left-green" alt="">
  </div>
</template>

<script>
export default {
  name: 'TheMountains'
}
</script>
<style lang="stylus">
@import '~@/assets/styles/vars'
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
  &--left
    left: 0
    &-blue
      width: 115vw
      transform: translateX(-50%)
    &-green
      width: 65vw
      transform: translateX(-18%)
  &--right
    right: 0
    &-blue
      width: 85vw
      transform: translateX(30%)
    &-green
      width: 65vw
      transform: translateX(12%)
</style>

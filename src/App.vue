<template>
  <div id="app">
    <landing/>
  </div>
</template>

<script>
import Landing from './components/Landing'

export default {
  name: 'app',
  components: { Landing }
}
</script>
<style lang="stylus" src="@/assets/styles/glacial.styl"></style>
<style lang="stylus">
@import "~@/assets/styles/vars"
@import "~@/assets/styles/animations"

html, body
  padding 0
  margin 0
  overflow-x: hidden

::selection
  background: $green
  color: $white
</style>

<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<style lang="stylus" src="@/assets/styles/glacial.styl"></style>
<style lang="stylus">
@import "~@/assets/styles/vars"
@import "~@/assets/styles/animations"

html, body
  padding 0
  margin 0
  overflow-x: hidden
  font-family: 'glacialIndifference', sans-serif;

::selection
  background: $green
  color: $white

h1, h2, h3, h4, h5, h6
  color: $blue

a
  text-decoration: none
  color: $blue
  def-transit()
  &:hover
    text-decoration: underline
    color: $green
</style>

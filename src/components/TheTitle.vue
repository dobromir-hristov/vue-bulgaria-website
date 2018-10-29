<template>
  <div class="TheTitle">
    {{ text }}
  </div>
</template>

<script>
export default {
  name: 'TheTitle',
  data () {
    return {
      text: 'Vue.js Bulgaria'
    }
  }
}
</script>

<style lang='stylus'>
@import "~@/assets/styles/vars"

.TheTitle
  margin: 2rem 0;
  color: $blue
  font-weight: 600;
  font-size: 45px;
  +desktop() {
    font-size: 85px;
  }
</style>

<template>
  <div class="Summer">
    <img src="@/assets/images/palm.png" class="absolute right-0 top-0 w-1/3" alt="">
    <div class="min-h-screen flex flex-col px-6">
      <div class="flex-1 flex flex-col justify-center">
        <div class="text-center mb-10">
          <img src="@/assets/logo.svg" class="w-32 lg:w-64 mx-auto pb-10" alt="Vue Bulgaria Logo">
          <div class="leading-none">
            <h3 class="text-3xl uppercase">Vue Bulgaria</h3>
            <h1 class="text-5xl font-bold uppercase">Summer Talks</h1>
          </div>
        </div>
        <form @submit.prevent="submit" class="text-center">
          <input
            v-model="input"
            type="text"
            placeholder="Enter the crossword code here"
            class="w-64 border-2 border-gray p-2 mr-4 mb-2 max-w-full"
          >
          <button
            type="submit"
            class="px-4 py-2 border-green border-2 bg-green text-white uppercase mb-2"
          >
            Get Prize
          </button>
        </form>
        <div class="w-3/4 lg:w-1/3 mx-auto py-4 text-gray-600 text-sm">
          The awesome guys at Vue School are gladly supporting Bulgaria’s growing Vue community. They are dedicated to making Vue education accessible to everyone, which is why they introduced the 62% price power parity discount 💸. Enter the crossword puzzle solution from the golden letters to claim your Vue School prize and get your first month for just $5 ☺️
        </div>
      </div>
      <div class="sponsors text-center pb-6">
        <div class="mb-4 text-blue">
          With the help of these <span class="font-bold">awesome</span> folks:
        </div>
        <div class="flex items-center justify-center">
          <a href="https://dopamine.bg" target="_blank"><img src="@/assets/images/dopamine.png" alt="dopamine logo" class="w-32 px-2"></a>
          <a href="https://vueschool.io" target="_blank"><img src="@/assets/images/vueschool.png" alt="vueschool logo" class="w-32 px-2"></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/**
 * @module Summer
 */
export default {
  name: 'Summer',
  data () {
    return {
      input: ''
    }
  },
  methods: {
    submit () {
      this.$ga.event('summer', 'submit', this.input)
      if (this.input.toLowerCase() === 'summer') {
        window.location.href = 'https://vueschool.io/c/BG-SUMMER-TALKS'
      } else {
        alert('Wrong code, look carefully.')
      }
    }
  }
}
</script>

<style lang="stylus">
@import "~@/assets/styles/vars"

</style>

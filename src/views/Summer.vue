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
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus adipisci architecto aspernatur at delectus est, et, eveniet id incidunt
          inventore iste magnam maxime molestias nemo nihil placeat provident quaerat qui quidem temporibus. Ad autem cum deserunt dolores fugiat
          incidunt laboriosam mollitia, nesciunt odit officia perferendis perspiciatis possimus qui totam vel!
        </div>
      </div>
      <div class="sponsors text-center pb-6">
        <div class="mb-4 text-blue">
          With the help of these <span class="font-bold">awesome</span> folks:
        </div>
        <div class="flex items-center justify-center">
          <img src="https://placehold.it/150x50?text=dopamine" alt="dopamine logo" class="w-32 px-2">
          <img src="@/assets/images/vueschool.png" alt="vueschool logo" class="w-32 px-2">
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

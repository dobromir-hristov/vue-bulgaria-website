<template>
  <div class="AppEvents">
    <h2>Events:</h2>
    <div class="events-list">
      <a
          v-for="(event, index) in events"
          :key="index"
          :href="event.href"
          :title="event.title"
          target="_blank"
          class="event"
      >
        {{ event.body }}
      </a>
    </div>
  </div>

</template>

<script>
/**
 * @module AppEvents
 */
export default {
  name: 'AppEvents',
  data () {
    return {
      events: [
        {
          title: 'Go to the Beginners Workshop Facebook event',
          body: 'Vue Beginners Workshop - 01.12.2018',
          href: 'https://www.facebook.com/events/1961707377247690/'
        }
      ]
    }
  }
}
</script>

<style rel='stylesheet/scss' lang='stylus'>
@import "~@/assets/styles/vars"

.AppEvents
  margin-bottom: 2rem;

.event
  font-size: 1.3rem
  margin-bottom: 2rem
  cursor: pointer
</style>

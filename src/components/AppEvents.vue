<template>
  <div class="AppEvents">
    <h2>Events:</h2>
    <div class="events-list">
      <a
          v-for="(event, index) in events"
          :key="index"
          :class="{ 'event--passed': isPassed(event) }"
          :href="event.href"
          :title="event.title"
          target="_blank"
          class="event"
      >
        {{ event.body }} - <b>{{ event.date | date }}</b>
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
          title: 'Go to Vue Beginners Workshop V2 Facebook event',
          body: 'Vue Beginners Workshop v2',
          href: 'https://www.facebook.com/events/306454523332924/',
          date: Date.parse('19 Jan 2019')
        },
        {
          title: 'Go to Vue Beginners Workshop Facebook event',
          body: 'Vue Beginners Workshop',
          href: 'https://www.facebook.com/events/1961707377247690/',
          date: Date.parse('01 Dec 2018')
        }
      ]
    }
  },

  methods: {
    isPassed (event) {
      return event.date <= Date.now()
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
  margin-bottom: 1rem
  cursor: pointer
  display: block

  &--passed
    opacity .5

    &:hover
      opacity 1
</style>

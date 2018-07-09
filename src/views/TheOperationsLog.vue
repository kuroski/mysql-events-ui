<script>
import { mapState } from 'vuex'
import VOperationsTimeline from '@/components/VOperationsTimeline'

export default {
  name: 'OperationsLog',
  components: {
    VOperationsTimeline,
  },
  computed: {
    ...mapState({
      operations: 'operations'
    })
  }
}
</script>

<template>
  <div>
    <h1>Your event's will be listed here!</h1>
    <VOperationsTimeline :operations="operations" />
  </div>
</template>
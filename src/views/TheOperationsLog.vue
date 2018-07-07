<script>
import { mapState } from 'vuex'
import VOperationsTimeline from '@/components/VOperationsTimeline'

export default {
  name: 'operations-log',
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
    <VOperationsTimeline :operations="operations" />
  </div>
</template>
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
    <VOperationsTimeline :operations="operations" />
  </div>
</template>
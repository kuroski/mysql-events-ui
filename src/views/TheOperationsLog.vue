<script>
import uuidv1 from 'uuid/v1'
import { mapState } from 'vuex'
import VOperationsTimeline from '@/components/VOperationsTimeline'

export default {
  name: 'OperationsLog',
  components: {
    VOperationsTimeline,
  },
  data() { 
    return {
      groups: [
        { id: 0, content: 'INSERT' },
        { id: 1, content: 'UPDATE' },
        { id: 2, content: 'DELETE' },
      ],
      options: {}
    }
  },
  computed: {
    ...mapState({
      operations: 'operations'
    }),
    items() {
      const ids = {
        'INSERT': 0,
        'UPDATE': 1,
        'DELETE': 2,
      }
      return this.operations
        .map((operation) => ({
          id: uuidv1(),
          group: ids[operation.type],
          type: 'point',
          start: operation.timestamp,
          content: `${operation.schema} - ${operation.table}`
        }))
    },
  },
}
</script>

<template>
  <div>
    <timeline
      ref="timeline"
      :items="items"
      :groups="groups"
      :options="options"
    ></timeline>
    <VOperationsTimeline :operations="operations" />
  </div>
</template>

<style>
.vis-timeline {
  visibility: visible !important;
}

.timeline {
  margin-top: 10px;
}
</style>

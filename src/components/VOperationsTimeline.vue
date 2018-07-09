<script>
import VOperationsTimelineItem from '@/components/VOperationsTimelineItem'

export default {
  name: 'OperationsTimeline',
  components: {
    VOperationsTimelineItem,
  },
  props: {
    operations: {
      type: Array,
      required: true,
    }
  }
}
</script>

<template>
  <div class="timeline">
    <div
      v-if="!operations.length"
      class="no-operations"
    >
      <i class="material-icons">
        timer_off
      </i>
      No operations on the moment
    </div>
    <VOperationsTimelineItem
      v-for="operation in operations"
      :key="operation.nextPosition"
      :operation="operation"
      class="timeline__item"
    />
  </div>
</template>

<style scoped>
.timeline {
  background-color: #fff;
  display: grid;
  grid-auto-flow: dense;
  grid-gap: 5px;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
}

.no-operations {
  display: flex;
  align-items: center;
  justify-content: center;
}

.no-operations > i {
  margin-right: 5px;
}
</style>


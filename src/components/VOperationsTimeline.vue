<script>
import VOperationsTimelineItem from '@/components/VOperationsTimelineItem'

export default {
  name: 'operations-timeline',
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
  max-width: 340px;
  margin: 0 auto;
  background-color: #fff;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.06), 0 3px 6px rgba(0, 0, 0, 0.26);
  padding: 10px 30px;
}

.timeline__item + .timeline__item {
  margin-top: -30px;
}
</style>


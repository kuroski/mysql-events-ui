<script>
export default {
  name: 'OperationsTimelineItem',
  props: {
    operation: {
      type: Object,
      required: true,
    }
  },
}
</script>

<template>
  <div class="timeline-item">
    <div class="timeline-item__header">
      <div class="type">
        {{ operation.type }}
      </div>

      <div class="date">
        <timeago
          :since="operation.timestamp"
          :auto-update="60"
        ></timeago>
      </div>
    </div>
    <div class="timeline-item__content">
      <div>
        <strong>{{ operation.schema }}:</strong>
        {{ operation.table }}
      </div>

      <i class="material-icons more-information">
        unfold_more
      </i>
    </div>
  </div>
</template>

<style scoped>
.timeline-item {
  position: relative;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.06), 0 3px 6px rgba(0, 0, 0, 0.26);
}

.timeline-item__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4px 10px;
  background-color: #D11345;
  color: #FFF;
}

.timeline-item__content {
  display: grid;
  grid-template-columns: 1fr auto;
  justify-items: start;
  align-content: center;
  padding: 4px 5px 4px 10px;
  transition: .2s background-color;
  cursor: pointer;
}

.timeline-item__content:hover {
  background-color: #EBF3F6;
}

.more-information {
  grid-column: 2;
  justify-self: end;
  align-self: center;
  padding: 0;
  transition: .2s color;
}

.type {
  font-weight: 500;
}

.date {
  font-size: 12px;
  font-weight: 500;
}
</style>


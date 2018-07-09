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
      <div class="schema">
        {{ operation.schema }}
      </div>

      <div class="table">
        {{ operation.table }}
      </div>

      <button class="more-information">
        <i class="material-icons">
          unfold_more
        </i>
      </button>
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
  grid-template-rows: 1fr 1fr;
  justify-items: start;
  padding: 4px 0 4px 10px;
}

.schema {
  grid-column: 1;
  grid-row: 1;
}

.table {
  grid-column: 1;
  grid-row: 2;
}

.more-information {
  grid-column: 2;
  grid-row: 1 / 3;
  justify-self: end;
  align-self: center;
  background-color: transparent;
  outline: none;
  border: none;
  cursor: pointer;
  border-radius: 2px;
  transition: .2s background-color;
}

.more-information > i {
  transition: .2s color;
}

.more-information:hover > i {
  color: #247BA0;
}

.type {
  font-weight: 500;
}

.date {
  font-size: 12px;
  font-weight: 500;
}
</style>


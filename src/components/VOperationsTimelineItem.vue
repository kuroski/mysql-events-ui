<script>
export default {
  name: 'operations-timeline-item',
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
    <div class="timeline-item__marker"></div>

    <div class="timeline-item__content">
      <div class="type">
        {{ operation.type }}
      </div>

      <div class="schema">
        {{ operation.schema }}
      </div>

      <div class="table">
        {{ operation.table }}
      </div>

      <div class="date">
        <timeago :since="operation.timestamp" :auto-update="60"></timeago>
      </div>
    </div>
  </div>
</template>

<style scoped>
.timeline-item {
  padding-left: 30px;
  padding-bottom: 30px;
  padding-top: 15px;
  position: relative;
}

.timeline-item__marker {
  position: absolute;
  top: 15px;
  bottom: 0;
  left: 0;
  width: 14px;
}

.timeline-item__marker::before {
  background: rgba(255, 255, 255, 0.54);
  border-radius: 5px;
  content: "";
  display: block;
  height: 10px;
  position: absolute;
  top: 2px;
  left: 2px;
  width: 10px;
  z-index: 4;
}

.timeline-item__marker::after {
  content: "";
  width: 14px;
  background: #01579b;
  display: block;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  border-radius: 25px;
  z-index: 3;
}

.timeline-item:nth-child(2n) > .timeline-item__marker::after {
  background: #03a9f4;
}

.timeline-item__content {
  position: relative;
  padding: 15px;
  z-index: 2;
}

.timeline-item__content::before {
  position: absolute;
  content: "";
  top: 0;
  left: -60px;
  right: -30px;
  height: 100%;
  background-color: #eeeeee;
  z-index: -1;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05), 0 1px 5px rgba(0, 0, 0, 0.24);
  border-radius: 2px;
  transition: 0.2s ease;
}

.timeline-item:nth-child(2n) > .timeline-item__content::before {
  background-color: #2196f3;
}

.timeline-item:nth-child(2n) {
  color: #FFF;
}

.timeline-item:hover > .timeline-item__content::before {
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.06), 0 3px 6px rgba(0, 0, 0, 0.26);
}
</style>


<script>
export default {
  name: 'OperationsTimelineItemDetailValue',
  props: {
    prefix: {
      type: String,
      default: '',
    },
    name: {
      type: String,
      required: true,
    },
    value: {
      required: true,
    },
    highlight: {
      type: Boolean,
      default: false,
    },
    add: {
      type: Boolean,
      default: false,
    },
    remove: {
      type: Boolean,
      default: false,
    }
  }
}
</script>


<template>
  <div
    :class="{
      'value--add': add,
      'value--remove': remove,
    }"
    class="value"
  >
    {{ prefix }}
    <span :class="{
      'highlight': highlight
    }">
      <strong>{{ name }}:</strong>
      {{ value }}
    </span>
  </div>
</template>

<style scoped>
.value {
  padding-left: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
  text-align: left;
}

.value--remove {
  background-color: #ffeef0;
}

.value--add {
  background-color: #e6ffed;
}

.highlight {
  background-color: #acf2bd;
}
</style>

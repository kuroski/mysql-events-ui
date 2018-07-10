<script>
import VOperationsTimelineItemDetailValue from '@/components/VOperationsTimelineItemDetailValue'

export default {
  props: {
    type: {
      type: String,
      default: '',
    },
    rows: {
      type: Array,
      default: () => [],
    }
  },
  components: {
    VOperationsTimelineItemDetailValue,
  },
  computed: {
    showBefore() {
      return (this.rows.length && this.rows[0].before)
    },
    showAfter() {
      return (this.rows.length && this.rows[0].after)
    },
    before() {
      if (!this.rows.length || !this.rows[0].before) return true
      const rows = this.rows[0].before
      return Object
        .keys(rows)
        .map(key => ({
          prefix: '-',
          name: key,
          value: rows[key],
        }))
    },
    after() {
      if (!this.rows.length || !this.rows[0].after) return true
      const rows = this.rows[0].after
      const before = this.rows[0].before
      return Object
        .keys(rows)
        .map(key => ({
          prefix: '+',
          name: key,
          value: rows[key],
          highlight: before && (before[key] !== rows[key])
        }))
    }
  }
}
</script>

<template>
  <div class="timeline-item-detail">
    <div class="timeline-item-detail__content">
      <div v-if="showBefore">
        <VOperationsTimelineItemDetailValue
          v-for="row in before"
          :key="row.value"
          :prefix="row.prefix"
          :name="row.name"
          :value="row.value"
          :highlight="row.highlight"
          remove
        />
      </div>

      <div v-if="showAfter">
        <VOperationsTimelineItemDetailValue
          v-for="row in after"
          :key="row.value"
          :prefix="row.prefix"
          :name="row.name"
          :value="row.value"
          :highlight="row.highlight"
          add
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.timeline-item-detail {
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
	animation: fadeIn 0.3s ease-in both;
}

@keyframes fadeIn {
	from {
		opacity: 0;
		transform: translate3d(0, -20%, 0);
	}
	to {
		opacity: 1;
		transform: translate3d(0, 0, 0);
	}
}
</style>

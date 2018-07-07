<template>
  <div class="home">
    <img src="../assets/logo.png">
  </div>
</template>

<script>
export default {
  name: 'home',
  created() {
    this.$options.sockets.operationReceived = (data) => {
      console.log(data)
    }
  }
}
</script>

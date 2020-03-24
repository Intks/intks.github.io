<template>
  <div id="app">
    <alex-input type="text"
                v-model="test">
      <div slot="prefix">hii</div>
    </alex-input>

    <alex-button type="primary">hi</alex-button>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      test: null
    }
  }
}
</script>

<style lang="scss" scoped>
</style>

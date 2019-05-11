<template>
  <div class="note">
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'Note'
}
</script>

<style lang="scss" scoped>
.note {
  z-index: 15;
  width: 100%;
  position: relative;
}
</style>

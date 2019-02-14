<template>
  <div class="info-block">
    <div class="avatar">
      <img src="@/assets/images/avatar.jpg" alt="">
    </div>
    <div class="content">
      <div class="title">Alex</div>
      <h2>在程式的路上慢慢前行。</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InfoBlock'
}
</script>

<style lang="scss" scoped>
.info-block {
  background: #f8f8f8;
  box-shadow: 0 2px 2px 0 rgba(0,0,0,0.12), 0 3px 1px -2px rgba(0,0,0,0.06), 0 1px 5px 0 rgba(0,0,0,0.12);
  animation: floatUp 1s 1s forwards;
  opacity: 0;
  padding: 16px 24px;
  @media screen and (max-width: 661px){
    margin-bottom: 24px;
  }
  .avatar {
    box-shadow: 0 2px 2px 0 rgba(0,0,0,0.12), 0 3px 1px -2px rgba(0,0,0,0.06), 0 1px 5px 0 rgba(0,0,0,0.12);
    max-width: 150px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px;
    margin-bottom: 16px;
    img {
      height: auto;
      width: 100%;
    }
  }
  .content {
    padding: 16px 0px;
  }
  .title {
    font-weight: bold;
  }
  @keyframes floatUp {
    0% {
        transform: translateY(300px);
        opacity: 0;
    }
    100% {
        transform: translateY(0px);
        opacity: 1;
    }
  }
}
</style>

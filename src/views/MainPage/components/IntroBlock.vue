<template>
  <div class="intro-block">
    <div class="intro-title-block">
      <div class="intro-title">前端小記</div>
      <div class="intro-text">想做出讓人一再使用的網頁。</div>
    </div>
    <div class="link-list">
      <router-link to="/about">關於</router-link>
      <router-link to="/note">筆記</router-link>
      <router-link to="/goal">目標</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IntroBlock'
}
</script>

<style lang="scss" scoped>
.intro-block {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f8f8f8;
  flex-direction: column;
  width: 100%;
  margin-bottom: 16px;
  box-shadow: 0 2px 2px 0 rgba(0,0,0,0.12), 0 3px 1px -2px rgba(0,0,0,0.06), 0 1px 5px 0 rgba(0,0,0,0.12);
  animation: floatUp 1s forwards;
  opacity: 0;
  .intro-title-block {
    line-height: 20px;
    padding: 24px;
    margin-bottom: 24px;
    width: calc(100% - 48px);
    text-align: center;
    background-color: #596874;
    color: #fff;
    .intro-title {
      font-weight: bold;
      letter-spacing: 2px;
      margin-bottom: 16px;
    }
  }
  .link-list {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0px 24px 24px 24px;
    a {
      color: #62C296;
      font-weight: bold;
      text-decoration: none;
      transition: .5s;
      &:hover {
        transform: translateY(2px);
      }
      &:not(:last-child) {
        margin-bottom: 16px;
      }
    }
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

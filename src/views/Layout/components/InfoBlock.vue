<template>
  <div class="info-block">
    <div class="avatar">
      <img src="@/assets/images/avatar.jpg" alt="">
    </div>
    <div class="content">
      <div class="title">Alex</div>
      <h2>在程式的路上慢慢前行。</h2>
      <div class="link-block">
        <a href="https://www.instagram.com/quatrieme_12/">
          <img src="https://www.lifewire.com/thmb/ShKkmmRiWyJkYcD6OoRiAwKmTJM=/768x0/filters:no_upscale():max_bytes(150000):strip_icc()/instagram-logo-57ea81e43df78c690f90439b.png" alt="">
        </a>
        <a href="https://codepen.io/alex1255/">
          <img src="http://blog.codepen.io/wp-content/uploads/2014/03/codepen-logo.svg" alt="">
        </a>
        <a href="https://github.com/Intks/">
          <img src="https://image.flaticon.com/icons/png/512/25/25231.png" alt="">
        </a>
      </div>
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
  animation: fadeIn 0.5s forwards;
  opacity: 0;
  padding: 16px 24px;
  border-radius: 4px;
  @media screen and (max-width: 661px) {
    margin-bottom: 24px;
  }
  .avatar {
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.12),
      0 3px 1px -2px rgba(0, 0, 0, 0.06), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
    max-width: 150px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px;
    margin-bottom: 16px;
    border-radius: 4px;
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
    margin-bottom: 16px;
    color: #010101;
  }
  h2 {
    margin-bottom: 16px;
  }
  .link-block {
    img {
      height: 30px;
      width: 30px;
    }
    a {
      &:not(:last-child) {
        margin-right: 8px;
      }
    }
  }
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
}
</style>

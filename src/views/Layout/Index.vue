<template>
  <div class="main-page">
    <div class="landing-container" v-if="isLanding" @click="intoMainpage">
      <info-block></info-block>
      <div class="next">點擊進入</div>
    </div>
    <div class="main-page-container" v-else>
      <div class="menu">
        <router-link class="link" to="/about">About</router-link>
        <router-link class="link" to="/note">Note</router-link>
        <router-link class="link" to="/goal">Goal</router-link>
      </div>
      <div class="side-block">
        <info-block></info-block>
      </div>
      <div class="app">
        <div class="background-wrapper">
          <div class="ellipse-container">
              <div class="ellipse ellipse__outer--thick"></div>
          </div>
          <div class="ellipse-container2">
              <div class="ellipse ellipse__outer--thin">
              </div>
              <div class="ellipse ellipse__outer--thick"></div>
          </div>
        </div>
        <transition name="fade" mode="out-in">
          <router-view></router-view>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import InfoBlock from './components/InfoBlock'
export default {
  name: 'MainPage',
  components: {
    InfoBlock
  },
  data () {
    return {
      isLanding: true
    }
  },
  methods: {
    intoMainpage () {
      this.isLanding = false
    }
  }
}
</script>

<style lang="scss" scoped>
.main-page {
  box-sizing: border-box;
  background-color: #38384c;
  min-height: 100vh;
  transition: 0.2s;
  display: flex;
  justify-content: center;
  padding: 64px;
  @media screen and (max-width: 811px) {
    flex-direction: column;
  }
  .landing-container {
    padding: 16px 24px;
    box-shadow: 0px 0px 1px 1px #eee;
    background-color: #fff;
    border-radius: 8px;
    height: 100%;
    cursor: pointer;
    animation: float 2s infinite alternate;
    /deep/ .info-block {
      animation: none;
      opacity: 1;
      background-color: transparent;
      box-shadow: none;
      /deep/ .avatar {
        max-width: 250px;
      }
    }
    .next {
      text-align: center;
      font-weight: bold;
      color: #9aa2ae;
    }
  }
  .main-page-container {
    width: 100%;
    margin: 0 auto;
    position: relative;
    z-index: 10;
    display: flex;
    border-radius: 4px;
    background-color: #fff;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.12),
      0 3px 1px -2px rgba(0, 0, 0, 0.06), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
    @media screen and (max-width: 811px) {
      height: 100%;
      width: 100%;
      flex-direction: column-reverse;
    }
    .menu {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      padding: 8px;
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 9999;
      .link {
        color: #69779b;
        font-weight: bold;
        text-decoration: none;
        transition: 0.5s;
        padding: 8px;
        &:hover {
          transform: translateY(2px);
        }
        &:not(:last-child) {
          margin-right: 24px;
        }
      }
    }
    .app {
      position: relative;
      display: flex;
      margin: 32px 0px;
      flex: 1;
      overflow-y: auto;
      padding: 64px 32px 32px 32px;
      border-radius: 4px;
      animation: fadeIn 1s 0.5s forwards;
      opacity: 0;
      height: 600px;
      @media screen and (max-width: 810px) {
        padding: 16px;
        margin-right: 0;
        margin: 0px 16px 32px 16px;
      }
      .background-wrapper {
        display: flex;
        position: absolute;
        justify-content: center;
        align-items: center;
        height: 100%;
        width: 100%;
        top: 0;
        left: 0;
        z-index: 12;
        @media screen and (max-width: 811px) {
          flex-direction: column;
        }
        .ellipse-container {
          height: 80px;
          width: 80px;
          border-radius: 50%;
          margin: 0 auto;
          position: absolute;
          top: 20px;
          right: 20px;
          opacity: 0.3;
          z-index: 11;
          @media screen and (max-width: 811px) {
            display: none;
          }
          .ellipse {
            border-radius: 50%;
            position: absolute;
            top: 0;
            border-style: solid;
          }
          .ellipse__outer--thick {
            width: 99.5%;
            height: 99.5%;
            border-color: #000 transparent;
            border-width: 2px;
            position: relative;
            display: block;
            animation: ellipseRotate 10s ease-in-out infinite;
          }
        }
        .ellipse-container2 {
          height: 40px;
          width: 40px;
          border-radius: 50%;
          margin: 0 auto;
          z-index: 11;
          opacity: 0.3;
          position: absolute;
          top: 40px;
          right: 40px;
          @media screen and (max-width: 811px) {
            display: none;
          }
          .ellipse {
            border-radius: 50%;
            position: absolute;
            top: 0;
            border-style: solid;
          }
          .ellipse__outer--thin {
            width: 100%;
            height: 100%;
            border-width: 1px;
            border-color: rgba(#222, 0.1);
            animation: ellipseOrbit 5s ease-in-out infinite reverse alternate;
            .ellipse__oribit {
              width: 2.5rem;
              height: 2.5rem;
              border-width: 2px;
              border-color: #09383e;
              top: 0;
              right: 0;
              position: relative;
              &:before {
                content: "";
                width: 0.7rem;
                height: 0.7rem;
                border-radius: 50%;
                display: inline-block;
                background-color: #09383e;
                margin: 0 auto;
                left: 0;
                right: 0;
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
              }
            }
          }
          .ellipse__outer--thick {
            width: 99.5%;
            height: 99.5%;
            border-color: #000 transparent;
            border-width: 2px;
            position: relative;
            display: block;
            animation: ellipseRotate 15s ease-in-out infinite reverse;
          }
        }
      }
    }
  }
  .side-block {
    margin: 32px 16px 32px 16px;
  }
  @keyframes ellipseRotate {
    0% {
      transform: rotate(-45deg);
    }
    100% {
      transform: rotate(-405deg);
    }
  }
  @keyframes ellipseOrbit {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
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
  @keyframes float {
    0% {
      transform: transalteY(0);
    }
    100% {
      transform: translateY(10px);
    }
  }
}
</style>

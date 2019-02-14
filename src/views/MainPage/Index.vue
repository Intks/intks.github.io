<template>
  <div class="main-page">
    <div class="main-page-wrapper">
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
        <router-view></router-view>
      </div>
      <div class="side-block">
        <intro-block></intro-block>
        <info-block></info-block>
      </div>
    </div>
  </div>
</template>

<script>
import IntroBlock from './components/IntroBlock'
import InfoBlock from './components/InfoBlock'
export default {
  name: 'MainPage',
  components: {
    IntroBlock,
    InfoBlock
  },
  data () {
    return {
    }
  },
  mounted () {
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
.main-page {
  width: 100%;
  padding: 16px;
  display: flex;
  background-image: url(https://images.unsplash.com/photo-1544411047-c491e34a24e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 661px){
    flex-direction: column;
  }
  .main-page-wrapper {
    height: 100vh;
    width: 60%;
    margin: 0 auto;
    position: relative;
    z-index: 10;
    display: flex;
    @media screen and (max-width: 661px){
      height: 100%;
      width: 100%;
      flex-direction: column-reverse;
    }
    .app {
      position: relative;
      display: flex;
      flex: 1;
      overflow-y: auto;
      background: #f8f8f8;
      margin-right: 16px;
      padding: 64px 32px 32px 32px;
      box-shadow: 0 2px 2px 0 rgba(0,0,0,0.12), 0 3px 1px -2px rgba(0,0,0,0.06), 0 1px 5px 0 rgba(0,0,0,0.12);
      animation: floatUp 1s 2s forwards;
      opacity: 0;
      @media screen and (max-width: 661px){
        padding: 0;
        margin-right: 0;
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
        @media screen and (max-width: 661px){
          flex-direction: column;
        }
        .ellipse-container {
        height: 80px;
        width: 80px;
        border-radius: 50%;
        margin: 0 auto;
        position: absolute;
        top: 60px;
        right: 60px;
        opacity: .3;
        z-index: 11;
        @media screen and (max-width: 661px){
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
        opacity: .3;
        position: absolute;
        top: 80px;
        right: 80px;
        @media screen and (max-width: 661px){
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
          border-color: rgba(#222, .1);
          animation: ellipseOrbit 5s ease-in-out infinite reverse alternate;
          .ellipse__oribit {
              width: 2.5rem;
              height: 2.5rem;
              border-width: 2px;
              border-color: #09383E;
              top: 0;
              right: 0;
              position: relative;
              &:before {
                  content: '';
                  width: 0.7rem;
                  height: 0.7rem;
                  border-radius: 50%;
                  display: inline-block;
                  background-color: #09383E;
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
          transform: rotate(0deg)
      }
      100% {
          transform: rotate(360deg)
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

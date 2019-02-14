<template>
  <div class="about">
    <div class="title">關於我</div>
    <h1>HI 我是Alex</h1>
    <div class="intro">
      畢業於亞東技術學院 資訊管理系 -<br>
      理想是跟眾多不同的人，協作出會讓人感到驚嘆的網頁。<br>
      也想學習前端眾多不同面向的技術 (EX: 動畫、資料操作面) 等等。
      <div class="link-block">
        <div class="code-pen"><a href="https://codepen.io/alex1255/">CodePen</a></div>
        <div class="git-hub"><a href="https://github.com/Intks">GitHub</a></div>
      </div>
    </div>
    <div class="skill-content">
      <div class="skill-title">技能</div>
      <skill-list :skill-list="skillList"></skill-list>
    </div>
    <div class="product-content">
      <div class="product-title">作品</div>
      <div class="product-list">
        <a class="product-item" href="https://codepen.io/alex1255/pen/oyZLZZ?editors=0010">
          <img src="@/assets/images/filterpost.jpg" alt="文章篩選">
          <div class="product-text">F2E活動 文章篩選</div>
        </a>
        <a class="product-item" href="https://codepen.io/alex1255/pen/eKJEQJ">
          <img src="@/assets/images/todolist.jpg" alt="文章篩選">
          <div class="product-text">F2E活動 todo-list</div>
        </a>
        <a class="product-item" href="https://codepen.io/alex1255/pen/OErVbE">
          <img src="@/assets/images/F2Eweek4.jpg" alt="文章篩選">
          <div class="product-text">F2E活動 Grid layout</div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import SkillList from './components/SkillList'
export default {
  name: 'About',
  components: {
    SkillList
  },
  data () {
    return {
      skillList: [
        {
          title: 'HTML, CSS',
          content: 'CSS使用SCSS管理, HTML則會使用PUG'
        },
        {
          title: 'JavaScript',
          imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png',
          content: 'ES6, API串接, 套件操作等'
        },
        {
          title: 'Vue.js',
          imgUrl: 'https://vuejs.org/images/logo.png',
          content: 'Vue CLI, Vue-Router, Vuex'
        },
        {
          title: 'Others',
          content: 'Git'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.about {
  line-height: 32px;
  width: 100%;
  position: relative;
  z-index: 13;
  @media screen and (max-width: 661px){
    padding: 24px;
    width: calc(100% - 48px);
  }
  .title {
    font-size: 24px;
    font-weight: bold;
    color: #596874;
    margin-bottom: 16px;
  }
  .intro {
    padding: 0px 0px 24px 0px;
    margin-bottom: 24px;
    border-bottom: 1px solid #c8c8c8;
    font-size: 14px;
    .link-block {
      display: flex;
      .code-pen,.git-hub {
        font-size: 14px;
        padding: 0px 8px;
        font-weight: bold;
        transition: .5s;
        &:hover {
          transform: translateY(2px);
        }
      }
      .code-pen {
        margin-right: 8px;
      }
      a {
        color: #62C296;
        text-decoration: none;
      }
    }
  }
  .skill-content {
    padding: 0px 0px 24px 0px;
    margin-bottom: 24px;
    border-bottom: 1px solid #c8c8c8;
    .skill-title {
      color: #596874;
      font-size: 24px;
      font-weight: bold;
      margin-bottom: 16px;
    }
  }
  .product-content {
    margin-bottom: 16px;
    .product-title {
      color: #596874;
      font-size: 24px;
      font-weight: bold;
      margin-bottom: 16px;
    }
    .product-list {
      display: flex;
      flex-direction: column;
      .product-item {
        text-decoration: none;
        padding: 16px;
        display: flex;
        align-items: center;
        color: #596874;
        transition: .5s;
        font-weight: bold;
        @media screen and (max-width: 661px){
          flex-direction: column;
        }
        &:hover {
          transform: translateY(2px);
          background-color: #e8e8e8;
        }
        img {
          height: 150px;
          width: 200px;
          margin-right: 16px;
          @media screen and (max-width: 661px){
            margin-right: 0;
          }
        }
      }
    }
  }
}
</style>

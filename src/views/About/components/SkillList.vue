<template>
  <div class="skill-list">
    <div class="skill-item" v-for="(skill, index) in skillList" :key="index">
      <div class="skill-title">
        <img class="skill-img" v-if="skill.imgUrl" :src="`${skill.imgUrl}`" alt="">{{skill.title}}
      </div>
      <div class="skill-content" v-html="skill.content"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SkillList',
  props: {
    skillList: Array
  }
}
</script>

<style lang="scss" scoped>
.skill-list {
  padding: 0px 8px;
  display: flex;
  flex-direction: column;
  .skill-img {
    height: 20px;
    width: 20px;
    margin-right: 16px;
  }
  .skill-title {
    font-weight: bold;
    display: flex;
    align-items: center;
  }
  .skill-content {
    padding: 0px 48px;
    font-size: 16px;
  }
}
</style>

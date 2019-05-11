<template>
  <div class="note-list">
    <div class="note-title">個人前端筆記</div>
    <div class="note-list-item" v-for="item in noteInfoDTOList" :key="item.id">
      <router-link class="item-link-title" :to="`/note/${item.id}`">{{item.noteTitle}}</router-link>
      <div class="info-block">
        <div class="date">釋出日：{{item.date}}</div>
        <div class="category">分類：{{item.category}}</div>
      </div>
      <div class="note-content" v-html="item.noteContent.substr(1,100)">
      </div>
      <div class="btn-more" @click="seeMore(item.id)">閱讀更多</div>
    </div>
  </div>
</template>

<script>
import {noteInfoDTOList} from '@/utils/noteInfoDTOList'
export default {
  name: 'NoteList',
  data () {
    return {
      noteInfoDTOList: noteInfoDTOList
    }
  },
  methods: {
    seeMore (id) {
      this.$router.push(`/note/${id}`)
    }
  }
}
</script>

<style lang="scss" scoped>
.note-list {
  margin-bottom: 24px;
  .note-title {
    font-size: 24px;
    font-weight: bold;
    color: #596874;
    margin-bottom: 24px;
  }
  .note-list-item {
    padding: 24px 0px;
    &:not(:last-child) {
      border-bottom: 1px solid #c8c8c8;
    }
    .item-link-title {
      font-size: 24px;
      text-decoration: none;
      font-weight: bold;
      color: #69779b;
      display: block;
      transition: .5s;
      margin-bottom: 4px;
      &:hover {
        transform: translateY(2px);
      }
    }
    .info-block {
      display: flex;
      font-size: 12px;
      color: #a8a8a8;
      margin-bottom: 16px;
      .date {
        margin-right: 16px;
      }
    }
    .note-content {
      line-height: 36px;
      font-size: 14px;
      margin-bottom: 16px;
    }
    .btn-more {
      color: #69779b;
      cursor: pointer;
      width: 72px;
      border: 1px solid #69779b;
      margin: 0 auto;
      padding: 8px;
      text-align: center;
      border-radius: 8px;
      transition: .2s;
      &:hover {
        background-color: #69779b;
        color: #fff;
      }
    }
  }
}
</style>

<template>
  <div class="note-content">
    <div class="content-title">{{noteDetail.noteTitle}}</div>
    <div class="content-info-block">
      <div class="content-date">釋出日：{{noteDetail.date}}</div>
      <div class="content-category">分類：{{noteDetail.category}}</div>
    </div>
    <div class="content-detail" v-html="noteDetail.noteContent"></div>
    <div class="hashtag"># {{noteDetail.category}}</div>
  </div>
</template>

<script>
import {noteInfoDTOList} from '@/utils/noteInfoDTOList'
export default {
  name: 'NoteContent',
  data () {
    return {
      noteInfoDTOList: noteInfoDTOList
    }
  },
  computed: {
    id () {
      return this.$route.params.id
    },
    noteDetail () {
      return this.noteInfoDTOList.find(obj => {
        return parseInt(obj.id) === parseInt(this.id)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.note-content {
  padding: 30px 0px;
  .content-title {
    font-size: 24px;
    font-weight: bold;
    color: #69779b;
    margin-bottom: 8px;
  }
  .content-info-block {
    display: flex;
    font-size: 12px;
    color: #a8a8a8;
    margin-bottom: 16px;
    .content-date {
      margin-right: 16px;
    }
  }
  .content-detail {
    line-height: 30px;
    font-size: 14px;
    margin-bottom: 16px;
  }
  .hashtag {
    color: #a8a8a8;
    font-size: 10px;
    text-align: center;
  }
}
</style>

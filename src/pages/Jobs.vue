<template>
  <div style="padding-top: 4px">
    <p class="job-info">These are jobs at YC startups. See more at <a href="https://www.workatastartup.com/" class="job-info-link">Work at a Startup</a>.</p>
    <div v-for="(item, index) in jobStoryState" :key="index" class="flex-wrap" style="margin-left: 14px; margin-bottom: 4px">
      <div>
        <a :href="item.url" class="title">{{ item.title }}</a>
        <a :href="`https://news.ycombinator.com/from?site=${item.url}`" class="url" > {{ item.url }} </a>
        <div class="additional-info">
          <span>{{ item.time }} ago</span>
        </div>
      </div>
    </div>
    <p class="more-btn" @click="MoreButtonClicksIncreaseLocal">More</p>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name : "Jobs",
  created() {
    this.getJobStories()
  },
  methods : {
    ...mapActions(['getJobStories']),
    MoreButtonClicksIncreaseLocal() {
      this.jobStoriesMoreButtonClickIncrease()
      this.getJobStories()
    }
  },
  computed : {
    ...mapState(['jobStoryState'])
  }
}
</script>

<style scoped>
.job-info {
  font-size: 10pt;
  color: #828282;
  margin-left: 14px;
}

.job-info-link {
  color: #000;
}
</style>

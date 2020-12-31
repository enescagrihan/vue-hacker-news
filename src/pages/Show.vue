<template>
  <div style="padding-top: 12px">
    <p class="show-info">Please read the <a href="https://news.ycombinator.com/showhn.html" class="show-info-link">rules</a>. You can also browse the <a href="https://news.ycombinator.com/shownew" class="show-info-link">newest</a> Show HNs.</p>
    <div v-for="(item, index) in showStoryState" :key="index">
      <div v-show="((index + 1) > 30 * moreButtonClicks) && ((index + 1) <= 30 * (moreButtonClicks + 1 ))" class="flex-wrap">
        <span class="indexes" v-if="moreButtonClicks > 2" style=" width: 30px"> {{ index + 1 }}.</span>
        <span class="indexes" v-else> {{ index + 1 }}.</span>
        <img src="@/assets/grayarrow.gif" alt="gray-arrow" style=" margin-right: 3px; margin-left: 2px; margin-top: 3px; max-height: 10px;"/>
        <div>
          <a :href="item.url" class="title">{{ item.title }}</a>
          <a :href="`https://news.ycombinator.com/from?site=${item.url}`" class="url" > {{ item.url }} </a>
          <div class="additional-info">
            <span v-if="item.descendants > 0"
            >{{ item.score }} points
            </span>
            <span>by {{ item.by }} {{ item.time }} ago</span>
            <span class="v-line">|</span>
            <a :href="`https://news.ycombinator.com/item?id=${item.id}`" class="comments">comments</a>
          </div>
        </div>
      </div>
    </div>
    <p class="more-btn" @click="MoreButtonClicksIncreaseLocal">More</p>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: "Show",
  created() {
    this.getShowStories()
  },
  data() {
    return {
      apiURL : "https://hacker-news.firebaseio.com/v0/showstories.json?print=pretty"
    }
  },
  methods : {
    ...mapActions(['getShowStories']),
    MoreButtonClicksIncreaseLocal() {
      this.jobStoriesMoreButtonClickIncrease()
      this.getJobStories()
    }
  },
  computed : {
    ...mapState(['showStoryState', 'moreButtonClicks'])
  }
}
</script>

<style scoped>
.show-info {
  font-size: 10pt;
  color: #828282;
  margin-bottom: 12px;
  margin-left: 37px;
  margin-top: 5px;
}

.show-info-link {
  text-decoration: underline;
  color: #000;
}
</style>
<!-- newest  -->

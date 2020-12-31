<template>
  <div style="padding-top: 12px">
    <div v-for="(item, index) in askStoryState" :key="index">
      <div v-show="((index + 1) > 30 * moreButtonClicks) && ((index + 1) <= 30 * (moreButtonClicks + 1 ))" class="flex-wrap">
        <span class="indexes" v-if="moreButtonClicks > 2" style=" width: 30px"> {{ index + 1 }}.</span>
        <span class="indexes" v-else> {{ index + 1 }}.</span>
        <img src="@/assets/grayarrow.gif" alt="gray-arrow" style=" margin-right: 3px; margin-left: 2px; margin-top: 3px; max-height: 10px;"/>
        <div>
          <a :href="item.url" class="title">{{ item.title }}</a>
          <a :href="`https://news.ycombinator.com/from?site=${item.url}`" class="url" > {{ item.url }} </a>
          <div class="additional-info">
            <span v-if="item.score == 1">{{ item.score }} point </span>
            <span v-if="item.score > 1">{{ item.score }} points </span>
            <span>by {{ item.by }} {{ item.time }} ago</span>
            <span class="v-line">|</span>
            <a :href="`https://news.ycombinator.com/item?id=${item.id}`" class="comments">comments</a>
            <span></span>
          </div>
        </div>
      </div>
    </div>
    <p class="more-btn" @click="MoreButtonClicksIncreaseLocal">More</p>
  </div>
</template>

<script>
import { mapActions, mapState, mapMutations } from 'vuex'

export default {
  name: "Ask",
  created() {
    this.getAskStories()
    this.emptyMoreButtonClicks()
  },
  methods : {
    ...mapActions(['getAskStories']),
    ...mapMutations(['askStoriesMoreButtonClickIncrease', 'emptyMoreButtonClicks']),
    MoreButtonClicksIncreaseLocal() {
      this.askStoriesMoreButtonClickIncrease()
      this.getAskStories()

    }
  },
  computed: {
    ...mapState(['askStoryState', 'moreButtonClicks'])
  }
}
</script>

<style scoped>

</style>


// more button click event func name mutation morebuttonclick func name change

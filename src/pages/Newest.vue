<!-- More button needs to be fixed, add v-if for xxx numbers -->
<template>
  <div style="padding-top: 12px">
    <div v-for="(item, index) in newestStoryState" :key="index">
      <div v-show="((index + 1) > 30 * moreButtonClicks) && ((index + 1) <= 30 * (moreButtonClicks + 1 ))" class="flex-wrap">
        <span class="indexes" v-if="moreButtonClicks > 2" style=" width: 30px"> {{ index + 1}}.</span>
        <span class="indexes" v-else> {{ index + 1}}.</span>
        <img src="@/assets/grayarrow.gif" alt="gray-arrow" style=" margin-right: 3px; margin-left: 2px; margin-top: 3px; max-height: 10px;"/>
        <div>
          <a :href="item.url" class="title">{{ item.title }}</a>
          <a :href="`https://news.ycombinator.com/from?site=${item.url}`" class="url" > (<span class="underline-hover">{{ item.url }}</span>)</a>
          <div class="additional-info">
            <span v-if="item.score === 1">{{ item.score }} point </span>
            <span v-if="item.score > 1">{{ item.score }} points </span>
            <span>by <span class="underline-hover">{{ item.by }}</span> <span class="underline-hover">{{ item.time }}</span> ago</span> 
            <span class="v-line">|</span>
            <a :href="`https://news.ycombinator.com/hide?id=${item.id}&goto=news`" class="url">hide</a>  <!-- the hide command requires its own class name -->
            <span class="v-line">|</span>
            <a :href="`https://news.ycombinator.com/item?id=${item.id}`" class="comments"><span class="underline-hover">past</span></a>
            <span class="v-line">|</span>
            <a :href="`https://news.ycombinator.com/item?id=${item.id}`" class="comments"><span class="underline-hover">discuss</span></a>
            <span></span>
          </div>
        </div>
        </div>
    </div>
    <p class="more-btn" @click="MoreButtonClicksIncreaseLocal">More</p>
  </div>
</template>


<script>
import { mapState, mapActions, mapMutations } from "vuex";

export default {
  name: "Posts",
  created() {
    this.getNewestStories()
  },
  methods: {
    ...mapActions(['getNewestStories']),
    ...mapMutations(['moreButtonClicksIncrease']),
    hideButtonFunction(storyId) {
      this.$router.push(`https://news.ycombinator.com/hide?id=${storyId}&goto=news`)
    },
    MoreButtonClicksIncreaseLocal() {
      this.moreButtonClicksIncrease()
      this.getNewestStories()
      
    }
  },
  computed: { ...mapState(['newestStoryState', 'moreButtonClicks']) },
};
</script>

<style>
.flex-wrap {
  display: flex;
  font-size: 10pt;
  margin-bottom: 6px;
}

.indexes {
  width: 22px;
  text-align: right;
  color: #828282;
  margin-right: 1px;
  vertical-align: top;
}

.additional-info {
  font-size: 7pt;
  color: #828282;
  margin-top: 1px;
}

.v-line {
  margin-left: 3px;
  margin-right: 3px;
}

.url {
    color: #828282;
    font-size: 8pt;
    text-decoration: none;
}

.underline-hover:hover {
  text-decoration: underline;
  cursor: pointer;
}

.comments {
    color: #828282;
    font-size: 7pt;
    text-decoration: none;
}

.title {
    color: black;
    text-decoration: none;
    font-size: 10pt;
}

.more-btn {
    color : #828282;
    font-size : 10pt;
    margin-left: 37px;
    padding-bottom: 10px;
    margin-bottom: 0;
    margin-top: 16px;
    cursor: pointer;
}

.hover {
  text-decoration: underline;
}
</style>

<!-- Hide button waiting -->
<!-- Hover things are waiting-->

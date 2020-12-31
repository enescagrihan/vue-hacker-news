<!-- More button needs to be fixed, add v-if for xxx numbers -->
<template>
  <div style="padding-top: 12px">
    <div v-for="(item, index) in newStoryState" :key="index">
      <div v-show="((index + 1) > 30 * moreButtonClicks) && ((index + 1) <= 30 * (moreButtonClicks + 1 ))" class="flex-wrap">
        <span class="indexes" v-if="moreButtonClicks > 2" style=" width: 30px"> {{ index + 1 }}.</span>
        <span class="indexes" v-else> {{ index + 1}}.</span>
        <img src="@/assets/grayarrow.gif" alt="gray-arrow" style=" margin-right: 3px; margin-left: 2px; margin-top: 3px; max-height: 10px;"/>
        <div>
          <a :href="item.url" class="title">{{ item.title }}</a>
          <a :href="`https://news.ycombinator.com/from?site=${item.url}`" class="url" > {{ item.url }} </a>
          <div class="additional-info">
            <span v-if="item.score === 1">{{ item.score }} point </span>
            <span v-if="item.score > 1">{{ item.score }} points </span>
            <span>by {{ item.by }} {{ item.time }} ago</span>
            <span class="v-line">|</span>
            <a :href="`https://news.ycombinator.com/hide?id=${item.id}&goto=news`" class="url">hide</a>  <!-- the hide command requires its own class name -->
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
import { mapState, mapActions, mapMutations } from "vuex";

export default {
  name: "Posts",
  created() {
    this.getTopStories()
    // this.getStoryData(this.apiURL)
    this.emptyMoreButtonClicks()
  },
  data() {
    return {
      isHover : false,
      // apiURL : "https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty",
    }
  },
  methods: {
    ...mapActions(['getNewStories']),
    ...mapMutations(['NewStoriesMoreButtonClickIncrease', 'emptyMoreButtonClicks']),
    MoreButtonClicksIncreaseLocal() {
      this.topStoriesMoreButtonClickIncrease()
      this.getNewStories()
    }
  },
  computed: { ...mapState(['newStoryState', 'moreButtonClicks']) },
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
  font-size: 7pt;
  text-decoration: none;
}

.url:hover {
  text-decoration: none;
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

<!--hızlı geçişlerde sıkıntı var-->
<!-- Hover things are waiting-->
<!-- hide, more, vb işlemleri tek fonksiyona düşür -->
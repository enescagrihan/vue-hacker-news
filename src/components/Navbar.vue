<template>
    <div>
        <div class="navbar-container">
            <div class="flex-container">
                <router-link @click="emptyButtonClicksAndStoryState" :to="{ path : '/' }" tag="img" src="https://news.ycombinator.com/y18.gif" alt="Hacker News Logo" class="hn-logo"></router-link>
                <router-link @click="emptyButtonClicksAndStoryState" :to="{ path : '/news'}" tag="a" class="text-style" style="margin-right: 9px; margin-left: 2px"><b>Hacker News</b></router-link>
                <router-link @click="emptyButtonClicksAndStoryState" :to="{ path : '/newest'}" tag="a" class="text-style">new</router-link><span class="sep-char"> | </span>
                <router-link @click="emptyButtonClicksAndStoryState" :to="{ path : '/past'}" tag="a" class="text-style" style="pointer-events: none">past</router-link><span class="sep-char"> | </span>
                <router-link @click="emptyButtonClicksAndStoryState" :to="{ path : '/comments'}" tag="a" class="text-style" style="pointer-events: none">comments</router-link><span class="sep-char">|</span>
                <router-link @click="emptyButtonClicksAndStoryState" :to="{ path : '/ask'}" tag="a" class="text-style">ask</router-link><span class="sep-char">|</span>
                <router-link @click="emptyButtonClicksAndStoryState" :to="{ path : '/show'}" tag="a" class="text-style">show</router-link><span class="sep-char">|</span>
                <router-link @click="emptyButtonClicksAndStoryState" :to="{ path : '/jobs'}" tag="a" class="text-style">jobs</router-link><span class="sep-char">|</span>
                <a href="https://news.ycombinator.com/submit" class="text-style">submit</a>
            </div>
            <div class="flex-container" style="flex-grow: 1;">
                <router-link :to="{ path : '/login' }" tag="a" class="text-style" style="flex-grow: 1; text-align: right; margin-right: 6px">login</router-link>
            </div>
        </div>
    </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  methods : {
    ...mapMutations(['emptyStoryStates', 'emptyMoreButtonClicks']),
    emptyButtonClicksAndStoryState() {
      this.emptyMoreButtonClicks()
      this.emptyStoryStates()
    }
  }
}
</script>

<style>
    .navbar-container {
        display: flex;
        align-items: center;
        background-color: #ff6600;
        width: 85%;
        height: 23px;
        margin: auto;
    }

    .hn-logo {
        border: 1px solid #fff;
        margin: 0 2px;
        cursor: pointer;
    }

    .flex-container {
        display: flex;
        align-items: center;
        font-size: 10pt;
    }
    .text-style {
        font-size: 10pt;
        text-decoration: none;
        color: #000;
    }
    .sep-char {
        margin: 0 5px;
    }
</style>

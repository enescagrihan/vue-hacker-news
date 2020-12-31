<template>
  <div id="app">
    <Navbar/>
    <router-view class="posts" style="width: 85%; margin: auto"/>
    <Footer/>
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import Footer from './components/Footer'

export default {
  name : 'App',

  components : {
    Navbar,
    Footer
  },
}
</script>

<style>
  * {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
  }
  .posts {
    background-color: #f6f6ef;
  }
</style>

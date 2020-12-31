<template>
  <div class="footer-container">
      <div class="footer-links">
        <a href="https://news.ycombinator.com/newsguidelines.html" class="footer-link">Guidelines</a><span class="footer-sep-char"> | </span>
        <a href="https://news.ycombinator.com/newsfaq.html" class="footer-link">FAQ</a><span class="footer-sep-char"> | </span>
        <a class="footer-link" style="pointer-events: none">Support</a><span class="footer-sep-char"> | </span>
        <a href="https://github.com/HackerNews/API" class="footer-link">API</a><span class="footer-sep-char"> | </span>
        <a href="https://news.ycombinator.com/security.html" class="footer-link">Security</a><span class="footer-sep-char"> | </span>
        <a href="https://news.ycombinator.com/lists" class="footer-link">Lists</a><span class="footer-sep-char"> | </span>
        <a href="https://news.ycombinator.com/bookmarklet.html" class="footer-link">Bookmarklet</a><span class="footer-sep-char"> | </span>
        <a href="https://www.ycombinator.com/legal/" class="footer-link">Legal</a><span class="footer-sep-char"> | </span>
        <a href="https://www.ycombinator.com/apply/" class="footer-link">Apply to YC</a><span class="footer-sep-char"> | </span>
        <a class="footer-link" style="pointer-events: none">Contact</a>
      </div>
      <div class="footer-search">
          <label for="search" class="search-text">Search:</label>
          <input type="text" id="search" class="search-box">
      </div>
  </div>
</template>

<script>
export default {
    name: 'Footer',
}
</script>

<style>
.footer-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 85%;
    margin: auto;
    background-color: #f6f6ef;
    border-top: 2px solid #ff6600;
    padding: 10px 0 13px 0;
}

.footer-search {
    display: flex;
    align-items: center;
}

.footer-links {
    margin-bottom: 16px;
}

.footer-link {
    color: #000;
    text-decoration: none;
    font-size: 8pt;
}

.search-text {
    color: #828282;
    font-size: 10pt;
    margin-right: 4px;
}

.search-box {
    width: 129px;
    height: 15px;
}

.footer-sep-char {
    font-size: 8pt;
    color: #828282;
}
</style>

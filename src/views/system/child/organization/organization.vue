<template>
  <div class="authority">
    <div class="nav">
     <NavBar></NavBar>
      <div class="content">
        <Content></Content>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "./children/nav-bar/nav-bar";
import Content from "./children/content/content";
export default {
  components: {
    Content,
    NavBar
  },
};
</script>

<style lang="less" scoped>
.authority {
  display: flex;
  height: 840px;
  .nav-l {
    width: 235px;
    height: 381px;
  }
  .nav {
    flex: 1 1 auto;
    height: 840px;
    .content{
      overflow: hidden;
      background-color:#F7F7F7;
      height: 840px;
      margin-top: 15px;
    }
  }
}
</style>
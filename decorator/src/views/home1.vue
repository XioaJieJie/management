<template>
  <div class="page">


    <div class="city">
      <div class="box-wrap">
        <div class="hot-city clearfix">
          <span class="label">热门城市</span>
          <div class="links">
            <a>北京</a>
            <a>北京</a>
            <a>北京</a>
            <a>北京</a>
            <a>北京</a>
            <a>北京</a>
            <a>北京</a>
          </div>
        </div>
        <div class="anchor-city clearfix">
          <span class="label">按拼音首字母选择</span>
          <div class="links" style="width: 996px">
            <em>A</em>
            <em>B</em>
            <em>C</em>
            <em>D</em>
            <em>E</em>
            <em>F</em>
            <em>G</em>
            <em>H</em>
            <em>I</em>
            <em>J</em>
            <em>K</em>
            <em>L</em>
            <em>M</em>
          </div>
        </div>
        <div class="rank-city">
          <div class="scrollbox">
            <div class="item clearfix">
              <span class="label">A</span>
              <div class="links">
                <a>鞍山</a>
                <a>鞍山</a>
                <a>鞍山</a>
                <a>鞍山</a>
                <a>鞍山</a>
                <a>鞍山</a>
              </div>
            </div>

            <div class="item clearfix" v-for="(item,index) in test" :key="index">
              <span class="label">B</span>
              <div class="links">
                <a>北京</a>
                <a>北京</a>
                <a>北京</a>
                <a>北京</a>
                <a>北京</a>
                <a>北京</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="design-sketch">
      <div class="title">装修效果图</div>
      <div class="box-wrap clearfix">
        <div class="bigger swiper swiper-container-horizontal">
          <div class="swiper-wrapper">
            <a class="swiper-slide item swiper-slide-duplicate" data-swider-slide-index="4" style="width: 260px">
              <img class="swiper-lazy swiper-lazy-loaded"
                   src="../assets/tup1.jpg">
            </a>
            <a class="swiper-slide item swiper-slide-duplicate" data-swider-slide-index="3" style="width: 260px">
              <img class="swiper-lazy swiper-lazy-loaded"
                   src="../assets/tup1.jpg">
            </a>
            <a class="swiper-slide item swiper-slide-duplicate" data-swider-slide-index="2" style="width: 260px">
              <img class="swiper-lazy swiper-lazy-loaded"
                   src="../assets/tup1.jpg">
            </a>
          </div>
          <div class="text">
            <span class="day">01</span>
            <div class="desc">
              <span class="name">今日推荐美图</span>
              <span class="date">2022/12</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "home1.vue",
  data() {
    return {
      //
      test: ['', '', '', '', '', '', '', '', '', '', '']
    }
  }
}
</script>

<style scoped lang="less">
.page{
  min-width: 1220px;
  min-height: 100%;
  line-height: normal
}
.city {
  margin-top: 56px;
}

.box-wrap {
  border: 1px solid #c9cbc9;
  box-sizing: border-box;
  width: 1420px;
  margin: 0 auto;
}

.hot-city {
  padding: 30px 30px;
  border-bottom: 1px solid #e2e4e2;
}

.anchor-city {
  padding: 16px 30px;
  border-bottom: 1px solid #e2e4e2;
}

.clearfix::after {
  content: '';
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;
}

.label {
  font-size: 16px;
  font-weight: 600;
  color: #333;
  float: left;
  line-height: 24px;
}

.links {
  float: left;
  margin-left: 30px;
  width: 1060px;
}

.links em {
  cursor: pointer;
  margin-right: 20px;
  font-size: 16px;
  color: #999;
  line-height: 24px;
  white-space: nowrap;
}

.links a {
  margin-right: 20px;
  font-size: 16px;
  color: #999;
  line-height: 24px;
  white-space: nowrap;
}

.rank-city {
  padding: 16px 10px;
}

.scrollbox {
  height: 180px;
  overflow: hidden;
  overflow-y: auto;
  padding: 0 20px;
}

.item {
  margin-bottom: 16px;
}

.design-sketch {
  margin-top: 80px;
}

.title {
  font-size: 28px;
  font-weight: 700;
  color: #333;
  padding-bottom: 50px;
  text-align: center;
  letter-spacing: 2px;
}
.bigger{
  width: 260px;
  height: 370px;
  float: left;
  overflow: hidden;
  position: relative;
}
.swiper-wrapper{
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 1;
 /* display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;*/
  display: flex;
  /*-webkit-transform-style: preserve-3d;
  -moz-transform-style: preserve-3d;
  -ms-transform-style: preserve-3d;*/
  transform-style: preserve-3d;
  /*-webkit-transition-property: -webkit-transform;
  -moz-transition-property: -moz-transform;
  -o-transition-property: -o-transform;
  -ms-transition-property: -ms-transform;*/
  transition-property: transform;
 /* -webkit-box-sizing: content-box;
  -moz-box-sizing: content-box;*/
  box-sizing: content-box;
}
.design-sketch .item{
  width: 100%;
  height: 100%;
  position: relative;
}
.swiper-slide{
  -webkit-transform-style: preserve-3d;
  /*-moz-transform-style: preserve-3d;
  -ms-transform-style: preserve-3d;*/
  transform-style: preserve-3d;
/*  -webkit-flex-shrink: 0;
  -ms-flex: 0 0 auto;*/
  flex-shrink: 0;
 /* width: 100%;
  height: 100%;
  position: relative;*/
}
a{
  text-decoration: none!important;
  outline: none;
  font-family: "Microsoft YaHei";
  cursor: pointer;
}
.item img{
  width: 100%;
  height: 100%;
  vertical-align: top;
}
img{
  border: 0;
}
.text{
  position: absolute;
  width: 220px;
  height: 330px;
  padding: 10px 20px 30px;
  top: 0;
  bottom: 0;
  background: url(https://pic.t8tcdn.com/osf/branch-pc/newIndex/20220726/big_img_mask.png) 0 0 repeat-x;
  z-index: 9;
  color: #fff;
  cursor: pointer;
}
.day{
  font-size: 45px;
  font-weight: 500;
  display: inline-block;
}
.desc{
  //display: inline-block;
  margin-top: -40px;
  margin-left: 50px;

}
.name{
  font-size: 16px;
}
.text span{
  //display: block;
}

</style>

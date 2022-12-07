<template>
<div>
  <div class="head">
    <div class="head_head">
      <div class="head_div1">
        <img src="">
        <img src="">
      </div>
      <div class="head_div2">
        <div v-for="(a,d) in 6" :key="d">首页</div>
      </div>
      <div class="head_div3">
        <div class="head_div3_input">
          <input type="text" placeholder="搜索装修">
          <button>搜索</button>
        </div>
      </div>
    </div>
  </div>
  <div class="middle">
    <div>
      <div class="middle-left">
        <div class="middle-left-head">
          <span v-for="(q,w) in 2" :key="w">长沙装修</span>
          <span>共112结果</span>
        </div>
        <div class="middle-left-middle">
          <div class="s-left">
            <div v-for="(q1,w2) in 4" :key="w2">实工方式</div>
          </div>
          <div class="s-right">
            <div v-for="(as,qw) in 3" :key="qw" :style="qw === 0 ? bo:null">
              <span style="color: #42b983">全部</span>
              <span v-for="(r1,r2) in 5" :key="r2">半包装修</span>
            </div>
            <div>
              <span style="color: #42b983">全部</span>
              <span v-for="(r1,r2) in 5" :key="r2">
                <input type="checkbox">
                半包装修
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="l-middle">
        <button v-for="(q2,e2) in 4">
          综合排序
        </button>
      </div>
    </div>
    <div class="middle-right">
      <div class="right-img">
        一张图片
      </div>
      <div class="right-div" v-for="m in 8" :key="m" >
        <div class="top-1" style="width: 22px">
          1
        </div>
        <div class="top-2" style="margin: 18px 10px 17px 16px;height: 38px;width: 38px;">
          logo
        </div>
        <div class="top-3">公司名</div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "Decoration",
  data(){
    return{
      bo:{
        border:"none"
      }
    }
  }
}
</script>

<style scoped lang="less">
.head{
  height: 80px;
  border-bottom: 1px solid #999;
}
.head_head{
  width: 1300px;
  height: 100%;
  margin: auto;
  display: flex;
}
.head_div1{
  width: 250px;
  height: 100%;
  display: flex;
  align-items: center;
}
.head_div1 img{
  background: #42b983;
  width: 50%;
  height: 80%;
}
.head_div2{
  width: calc(100% - 550px);
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.head_div3{
  width: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.head_div3_input{
  height: 30px;
  width: 250px;
  border: 1px solid;
}
.head_div3_input input{
  height: 96%;
  width: 200px;
  border: none;
  outline: none;
  padding: 0 0 0 8px;
}
.head_div3_input button{
  height: 100%;
  width: 42px;
  border:none;
  cursor: pointer;
}
.middle{
  display: flex;
  justify-content: center;
  padding: 35px 0;
}
.middle-left{
  width: 960px;
  border: 1px solid #999999;
  margin-right: 20px;
}
.middle-left-head{
  padding: 18px 0 18px 21px;
  border-bottom: 1px dotted #eaeaea;
  height: 16px;
}
.middle-left-head > span{
  margin-right: 40px;
  font-size: 12px;
  color: #666;
}
.s-left{
  width: 75px;
  border-right: 1px solid #999999;
  background-color: #f8f8f8;
}
.s-left > div{
  width: 100%;
  height: 40px;
  text-align: center;
  font-size: 12px;
  color: #999999;

  line-height: 40px;
}
.middle-left-middle{
  display: flex;
}
.s-right{
  width: calc(960px - 75px);
}
.s-right>div{
  height: 40px;
  width: 100%;
  padding: 0 0 0 50px;
  line-height: 40px;
  border-top: 1px dotted #eaeaea;
}
.s-right>div>span{
  margin-right: 30px;
  font-size: 12px;
  color: #999999;
}
.l-middle{
  height: 40px;
  width: 960px;
  margin: 50px 0;
  border: 1px solid #999999;
}
.l-middle>button{
  color: #666;
  width: 100px;
  border: 1px solid;
  font-size: 12px;
  background: none;
  border: none;
  height: 100%;
  border-right: 1px solid #999999;
  cursor: pointer;
}
.middle-right{
  width: 240px;
  border: 1px solid #999999;
}
.right-img{
  height: 80px;
  background: #42b983;
}
.right-div{
  padding: 0 20px;
  display: flex;
  align-items: center;
  height: 80px;
  border: 1px solid;
}

.top-1{
  height: 27px;
  background: #999999;
  width: 22px
}
.top-2{
  margin: 18px 10px 17px 16px;
  height: 38px;
  width: 38px;
  background: wheat;
}
.top-3{

}
</style>

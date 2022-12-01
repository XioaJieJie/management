<template>
  <div>
    <div class="head">
      <div>
        <h5>地址</h5>
      </div>
      <div>
        <h5 style="cursor: pointer" v-for="(activityItem,activityIndex) in activity" :key="activityIndex">
          {{activityItem}}
        </h5>
      </div>
    </div>
    <div class="middle">
      <div class="middle_div">
        <div class="middle_logo"></div>
        <ul></ul>
        <div class="middle_div_right">
          <div class="middle_div_right_div">
            <div style="float: left">
              <div style="padding: 0 30px 0 14px;cursor: pointer">
                <span style="font-size: 14px;color: #fff;line-height: 32px">装修公司</span>
                <i class="i"></i>
                <span class="middle_div_right_span"></span>
              </div>
              <ul>

              </ul>
            </div>
            <div class="text_box">
              <input type="text" placeholder="挑选您心仪的装修公司">
            </div>
            <span class="sou"></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data(){
    return{
      activity:['登录','注册','我要装修','咨询电话：123-123','设计本','新闻中心'],
    }
  }
}
</script>

<style lang="less" scoped>
.head{
  height: 35px;
  width: 1220px;
  margin: auto;
  display: flex;
  padding: 0 ;
}
.head>div{
  flex:1;
  line-height: 35px;
  color: #999999;
  font-weight: 400;
}
.head>div:nth-child(2){
  flex: 0.7;
  display: flex;
  justify-content: space-between;
}
.middle{
  width: 100%;
  height: 64px;
  background: rgba(15,15,16,.8);
  font-weight: 400;
}
.middle_div{
  width: 1220px;
  margin: 0 auto;
}
.middle_logo{
  width: 90px;
  height: 32px;
  float: left;
  margin-top: 16px;
  background: #42b983;
}
.middle_div_right{
  float: right;
  height: 32px;
  border:1px solid #838384;
  margin-top: 15px;
}
.middle_div_right_div{
  width: 100%;
  height: 100%;
}
.i{
  border-style: solid;
  border-width: 5px 3.5px;
  border-color: #fff transparent transparent transparent;
  position: relative;
  left: 8px;
  top: 14px;
}
.text_box{
  width: 240px;
  height: 100%;
  float: left;
  color: #fff;
}
.middle_div_right_span{
  border-right: 1px solid #838384;
  position: relative;
  left: 15px;
}
.text_box>input{
  width: 100%;
  height: 100%;
  background: 0 0;
  border: none;
  color: #fff;
  font-size: 14px;
  outline: none;
}
.sou{
  width: 18px;
  height: 18px;
  margin: 9px 12px 0;
  background: salmon;
  float: right;
}
</style>

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
    <div class="head-middle">
      <div class="head-middle-div">
        <div v-for="(z,x) in 4" :key="x" :style="x===3? a:null">
          效果图
        </div>
      </div>
    </div>
    <div class="middle_middle">
      <div class="middle_middle_div1">
        <div v-for="(w1,w2) in 3" :key="w2">
          <div style="margin-bottom: 15px;font-size: 18px">
            空间
            <span style="color: #999999;font-size: 10px">s p a c e</span>
          </div>
          <div class="fe-fu">
            <div v-for="(a1,b1) in 8" :key="b1" class="fe">
              客厅
            </div>
          </div>
        </div>
      </div>
      <div class="middle_middle_div2">
        <img src="../assets/logo.png" >
      </div>
    </div>
    <div class="middle-tail">
      <div v-for="(e1,e2) in 3" :key="e2" class="middle-tail-div">
        图片
      </div>
    </div>
    <div class="tail">
      <div class="tail-total">
        <div v-for="(s1,s2) in 12" :key="s2" class="tail_div">
          图片
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
name: "indoor",
  data(){
    return{
      a:{
        border:"none"
      }
    }
  }
}
</script>

<style scoped lang="less">
.head{
  height: 80px;
  border-bottom: 1px solid;
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
.head-middle{
  height: 50px;
}
.head-middle-div{
  display: flex;
  width: 450px;
  height: 50px;
  margin: auto;
  align-items: center;
  justify-content: space-around;
}
.head-middle-div > div{
  text-align: center;
  border-right: 1px solid;
  flex: 1;
}
.middle_middle{
  height: 400px;
  background-color: #f0f0f0;
  display: flex;
  justify-content: center;
}
.middle_middle_div1{
  width: 270px;
  padding: 20px;
  background: #fff;
  background-image: linear-gradient(180deg,hsla(0,0%,93%,.5),hsla(0,0%,100%,0) 3%);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.middle_middle_div2{
  width: 920px;
  height: 100%;
  background: blanchedalmond;
  text-align: center;
}
.fe-fu{
  display: flex;
  flex-wrap: wrap;
}
.fe{
  font-size: 12px;
  margin: 0px 43px 10px 0px;
}
.middle-tail{
  height: 180px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid;
}
.middle-tail-div{
  width: 395px;
  height: 150px;
  margin: 10px;
  background: #42b983;
  border: 1px solid;
}
.tail{
  background-color: #f0f0f0;
  padding: 20px 0;

}
.tail-total{
  width: 1230px;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.tail_div{
  width: 290px;
  height: 400px;
  border: 1px solid;
  margin-bottom: 20px;
  background: white;
}
</style>

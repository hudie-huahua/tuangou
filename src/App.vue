<template>

   <!--定义元素容器  -->
  <div id="app">
    <!--第一步：定义自定义元素  -->
     <!--<home></home>
    <list></list>
    <detail></detail> -->
    <header>
      <div class="nav">
        <div class="go-back" @click="Goback"><span class="arrow"></span><span class="arrow green"></span></div>
        <div class="login">登录</div>
        <h1>1503webA团购网</h1>
      </div>
      <div class="search"><input type="text" placeholder="请输入搜索关键字" v-model="keyword" @keydown.enter="goSearch"></div>
    </header>
    <router-view v-on:openShow="openShowHandler" :searchKeyword="enterKeyword"></router-view>
  </div>
</template>

<script>
  
export default {
  name: 'app',
  data(){
    return {
      keyword:'',
      enterKeyword:'',
      isShow:true,
    }
  },
  created(){
        this.isShow = true;
        this.$on('needShow',function(isShow){
        this.isShow = isShow;
    });
  },
  methods:{
     openShowHandler(isShow){
      this.isShow = isShow;
    },
    Goback(){
      history.go(-1);
    },
    goSearch(){
      this.enterKeyword = this.keyword;
    }
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
body{
  background: #efefef;
}
li{
  list-style: none
}
a{
  text-decoration: none;
}
.clearfix:after{
  content: '';
  display: block;
  clear:both;
}
/*头部样式  */
.nav{
  height: 50px;
  line-height: 50px;
  background: #06C1AE;
  color:#fff;
}

.nav .go-back{
  float: left;
  position: relative;
}
.nav .go-back .arrow{
  position: absolute;
  left:4px;
  top:12px;
  border: 14px solid transparent;
  border-right-color: #fff;
}
.nav .go-back .arrow.green{
   border-right-color: #06C1AE; 
   left:8px; 
}
.nav .login{
  float: right;
  margin-right: 10px;
  font-size:12px;
}
.nav h1{
  text-align: center;
  font-size:24px;
}
.search{
  padding-top:4px;
  padding-bottom: 5px;
  background: #fff;
}
.search input{
  outline: none;
  border:none;
  display: block;
  width: 80%;
  border-radius: 15px;
  background:#EFEFEF;
  color:#666;
  padding:10px 0;
  text-indent: 20px;
  margin: 0 auto;
}
</style>

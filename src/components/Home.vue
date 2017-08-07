  <template id="tpl_home">
    <div class="home">
      <!--按钮列表  -->
      <ul class="btn-types clearfix">
        <li v-for="item in types">
          <a v-bind:href="'#/list/type/'+item.id">
            <img v-bind:src="'../static/img/icon/'+item.url">
            <p>{{item.title}}</p>
          </a>
         </li>
      </ul>
        <!--广告  -->
        <ul class="ad clearfix">
          <li v-for="item in ad">
            <a v-bind:href="'#/detail/'+item.id">
              <h3>{{item.title}}</h3>
              <p>{{item.description}}</p>
              <img v-bind:src="'../static/img/ad/'+item.url">
            </a>
          </li>
        </ul>
        <!--列表  -->
        <!-- ul.list-part>li>a>img+div.text-content>(h3+p>span*3) -->
         <ul class="list-part">
           <li v-for="item in list" class="clearfix">
             <a v-bind:href="'#/detail/'+item.id">
               <img :src="'../static/img/list/'+item.img">
               <div class="text-content">
                 <h3>{{item.title}}</h3>
                 <p>
                   <span class="price">{{item.price}}元</span>
                   <span class="orign-price">门市价：{{item.orignPrice}}元</span>
                   <span class="sales">已售{{item.sales}}</span>
                 </p>
               </div>
             </a></li>
         </ul>
    </div>
  </template>
<script>
    import axios from "axios"
    export default{
        name:"Home",
        data(){
            return {
                types: [
				{id: 1, title: '美食', url: '01.png'},
				{id: 2, title: '电影', url: '02.png'},
				{id: 3, title: '酒店', url: '03.png'},
				{id: 4, title: '休闲娱乐', url: '04.png'},
				{id: 5, title: '外卖', url: '05.png'},
				{id: 6, title: 'KTV', url: '06.png'},
				{id: 7, title: '周边游', url: '07.png'},
				{id: 8, title: '丽人', url: '08.png'},
				{id: 9, title: '小吃快餐', url: '09.png'},
				{id: 10, title: '火车票', url: '10.png'}
                ],
                ad:null,
                list:null
            }
        },
        created(){
            axios.get('static/data/home.json').then((res)=>{
                // console.log(res)
                if(res.data.errno === 0){
                    // console.log(res)
                    this.ad = res.data.data.ad;
                    this.list = res.data.data.list;
                }
            })
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
/*首页样式  */
.home{
  background: #efefef;
  height: 600px;
}
.home .btn-types{
  background:#fff;
}
.home .btn-types li{
  float: left;
  width:20%;
  text-align: center;
  margin-top: 10px;
}

.home .btn-types img{
  width:60%;
}
.home .btn-types p{
  padding:5px 0;
}
.home .btn-types a{
  color:#666;
  font-size:12px;
}
/*广告样式  */
.ad{
  margin-top:10px;
  background:#fff;
}
.ad li{
  float: left;
  width:33.3333333%;
  text-align: center;
  padding: 20px 0;
  border-right: 1px solid #ccc;
  box-sizing: border-box;
}
.ad li:last-child{
  border-right: none;
}
.ad li h3{
  color:red;
  font-size:16px;
}
.ad li p{
  color:#666;
  font-size:12px;
  line-height: 22px;
  padding-bottom: 2px;
}
.ad li img{
  width:50%;
}
/*首页列表样式  */
.list-part{
  margin-top: 10px;
  padding:0 10px;
  background:#fff;
}

.list-part li{
  border-bottom: 1px solid #ccc;
  padding:10px 0;
}

.list-part li img{
  float: left;
  width:100px;
}

.list-part li .text-content{
  margin-left:105px;
}

.list-part li a{
  color:#666;
}

.list-part li h3{
  font-size:16px;
  color:#000;
  height: 44px;
}

.list-part li p{
  font-size:12px;
}

.list-part li p .price{
  color:#06C1AE;
}
.list-part li p .sales{
  float: right;
}

</style>
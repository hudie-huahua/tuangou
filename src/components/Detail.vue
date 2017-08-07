  <template id="tpl_detail">
    <section class="detail" id="detail">
      <!--banner信息  -->
      <div class="banner-info">
        <img :src="'../static/img/item/' + data.src">
        <div class="info">
          <h2>{{data.title}}</h2>
          <p>{{data.description}}</p>
        </div>
      </div>
      <!--购买信息  -->
      <!-- .buy-info>(p>(span>strong)+span)+button -->
       <div class="buy-info">
        <span class="price"><strong>{{data.price}}</strong>元</span>
        <span>门市价：{{data.orignPrice}}元</span>
         <button>立即购买</button>
       </div>
        <!--售后服务  -->
        <ul class="buy-service clearfix">
          <li>支持自动退货</li>
          <li>支持随时退货</li>
          <li class="sales">已售{{data.sales}}</li>
        </ul>
        <!--详情内容  -->
        <div class="detail-info">
          <h3>店家信息</h3>
          <div class="container store-name">{{data.storeName}}</div>
          <div class="footer view-store">查看{{data.storeNum}}家分店</div>
        </div>
        <div class="detail-info">
          <h3>购买须知</h3>
          <div class="container">
             <h4>有效期</h4>
             <p>{{data.validateTime}}</p>
             <h4>使用时间</h4>
             <p>{{data.useTime}}</p>
             <h4>使用规则</h4>
             <p v-for="item in data.rules">{{item}}</p>
          </div>
        </div>
    </section>
  </template>

<script>
    import axios from 'axios'
    export default{
        name:'Detail',
        data(){
        return {
            data:""
        }
    },
    created(){
        // console.log(123)
        axios.get('static/data/product.json').then((res)=>{
            console.log(res);
            if(res.data.errno === 0){
                this.data = res.data.data;
                // that.data = res.data;
            }
        })
    }
 }

</script>

<style>
/*列表页样式  */
.list .orders li{
  float: left;
  width:25%;
  border-right: 1px solid #ccc;
  box-sizing: border-box;
  text-align: center;
}
.list .orders li:last-child{
  border-right: none;
}
.list .orders li span{
  font-size:12px;
}

.list .orders .arrow{
  font-size:0;
  border: 5px solid transparent;
  border-top-color: #666;
  position: relative;
  left:5px;
}

/*列表页加载更多  */
.list .load-more{
  padding:10px 0;
  text-align: center;
  border-bottom:1px solid #ccc;
  color:#06C1AE;
  background:#fff;
}

/*详情页样式  */
.detail{
  background: #fff;
}
.detail .banner-info{
  position: relative;
}
.detail .banner-info .info{
  position: absolute;
  left:10px;
  bottom:10px;
  color:#fff;
}
.detail .banner-info .info h2{
  font-size:22px;
}
.detail .banner-info .info p{
  font-size:14px;
}

.detail .buy-info{
  padding:20px 20px 20px 10px;
  border-bottom: 1px solid #ccc;
}
.detail .buy-info span{
  color:#000;
  font-size:14px;
}
.detail .buy-info .price{
  color: #06C1AE;
}
.detail .buy-info .price strong{
  font-size:32px;
}

.detail .buy-info button{
  border:none;
  background: orange;
  color:#fff;
  font-size:12px; 
  padding:10px 15px;
  float: right;
}
.detail  .buy-service{
  padding:8px 0;
  border-bottom: 1px solid #ccc;
}
.detail  .buy-service li{
  float: left;
  width: 50%;
  color:#9ACD32;
  line-height: 30px;
  text-indent: 10px;
}

.detail  .buy-service .sales{
  color:#999;
}

.detail .detail-info{
  padding:20px 10px;
}
.detail .detail-info h3{
  font-size:24px;
  line-height: 44px;
  color:#000;
  border-bottom: 1px solid #ccc;
}
.detail .detail-info .store-name{
  line-height: 38px;
  border-bottom: 1px solid #ccc;
  font-size:12px;
}
.detail .detail-info .view-store{
  color:#97D2EB;
  font-size:14px;
  line-height: 38px;
}

.detail .detail-info .container h4{
  color:orange;
  font-size:16px;
  line-height: 38px;
}

.detail .detail-info .container p{
  font-size:12px;
  line-height: 24px;
}
</style>
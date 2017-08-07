 <template id="tpl_list">
    <section class="list" id="list">
      <ul class="orders clearfix">
        <li v-for="item in orders"  @click="productSortBy(item.id)"><span>{{item.text}}</span><span class="arrow"></span></li>
      </ul>
      <!-- ul.list-part>li>a>img+div.text-content>(h3+p>span*3) -->
      <ul class="list-part">
        <li v-for="item in list" class="clearfix">
          <a v-bind:href="'#/detail/'+item.id">
            <img :src="'./static/img/list/'+item.img">
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
      <div class="load-more" @click="loadMore" v-if="other.length"><span>查看剩余{{other.length}}条团购</span></div>
    </section>
  </template>

<script>
    import axios from 'axios'
    export default{
        props:['searchKeyword'],
        name:"List",
        keyword:'',
        data(){
            return {
                // searchKeyword:'',
                orders:[
                    {id:'price',text:'价格排序'},
                    {id:'sales',text:'销量排序'},
                    {id:'evaluate',text:'好评排序'},
                    {id:'cutPrice',text:'优惠排序'}
                ],
                // list:[],
                other:[],
                listDb:[]
            }
        },
        //动态属性
      computed:{
        list(){
          return this.listDb.filter((v)=>{
          return v.title.indexOf(this.searchKeyword) >= 0;
      });
    }
  },
        created(){
            axios.get('static/data/list.json').then((res)=>{
              // console.log(111111111)
                if(res.data.errno === 0){
                    console.log(res);
                    this.listDb = res.data.data.slice(0,3)
                    this.other = res.data.data.slice(3)
                }
            },err=>{
              console.log('这是错误返回')
            }
            )
        },
        methods:{
        //     Vue.filter('filter',function(value,参数){
        // return 参数+value.split('').reverse().join('');

        //  }),
    //加载更多
        loadMore:function(){
    //  console.log(this);
      this.listDb = [].concat(this.listDb, this.other);
      this.other = [];
    },
    //产品列表排序
    productSortBy: function(type){
      // console.log(type)
      this.listDb.sort(function(objA,objB){
        return  objB[type] - objA[type];
        // console.log(a,b);
      });
    }
        }
    }
</script>

<style>
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

</style>
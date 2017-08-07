<template>
    <div>
        <input type="text" v-model="msg"  @keyup.enter="goSearch">
        <ul>
            <li v-for="item in list">{{item}}</li>
        </ul>
    </div>
</template>

<script>
// import Baidu from '@/components/Baidu'

export default{
    data(){
        return {
            msg:"",
            list:[]
          
        }
    },
    methods:{
        goSearch(){
            this.$http.jsonp('https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su',{
                params: { 
                     wd:this.msg
                },
            jsonp:'cb'
         }).then(res=>{
            //  console.log(res);
            this.list = res.body.s;
         },res=>{
            // console.log(111111)
         })
        } 
    }
}
</script>

<style>

</style>
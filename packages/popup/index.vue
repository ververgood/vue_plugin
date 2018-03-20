<template>
  <div class="layer" v-show='isVisible' >
      <div class="mask"></div>
      <div class="warp">
          <div class="warp-content">
              <div class="layer-header">
                  <img src="./img/3.png" alt="">
              </div>
              <div class="layer-body">
                  <div v-for='(item,index) in txt ' :key="index">{{item}}</div>
              </div>
              <div class="layer-footer" :class="{two:btnArr.length>1}">
                  <div class="ok" @click='sure'>{{btnArr[0]}}</div>
                  <div v-if='btnArr.length>1' class="cancel" @click='cancel'>{{btnArr[1]}}</div>
              </div>
          </div>
      </div>
  </div>
</template>
<script>
export default {
    name:'pop',
  data(){
      return{

      }
  },
  mounted () {
      console.log(this.ok)
  },
  props:{
      isVisible:Boolean,
      txt:{
          type:Array,
          default: function () {
                return ['您近期有订单申请成功','需要提交重申理由才能重新申请']
            }
      },
      btnArr:{
          type:Array,
          default: function () {
                return ['确定','取消']
            }
      }
  },
  methods:{
      show(){
          this.isVisible=true
      },
      sure(){//点击确定
        this.$emit('ok')
      },
      cancel(){//点击取消
        this.isVisible=false
      }
  }
}
</script>
<style lang="scss" scoped>
@import './index.scss';
</style>



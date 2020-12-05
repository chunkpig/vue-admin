<!--  -->
<template>
<div id='Login'>
    <div class="login-bg"></div>
    <div class="login-conbg">
        <div>

        </div>
    </div>
    <div class="login-container"></div>

</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
//name放入模板名,方便在其他地方引用
name: '',
//import引入的组件需要注入到对象中才能使用
components: {},
data() {
//这里存放数据
return {

};
},
//监听属性 类似于data概念
computed: {

},
//生命周期 - 创建完成（可以访问当前this实例）
created() {

},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {

},
//方法集合
methods: {

},
//监控data中的数据变化
watch: {

},
//如果页面有keep-alive缓存功能，这个函数会触发
activated() {

},
}
</script>
<style lang="scss" scoped>
$bg:rgba(0,0,0,0.5);
$conbg:rgba(255,255,255,1);
#Login{
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    .login-bg{
        width: 100%;
        height: 100%;
        background: linear-gradient(80deg,#00CFFF,#5828FA,#FF34FA);
        // background:url("../../assets/Login/login.png") no-repeat;
        // background-size: 100% 100%;
        filter: blur(10px);
        z-index: -1; 
    }
    .login-conbg{
        position: absolute;
        top: 50%;
        left: 39%;
        width: 25%;
        height: 60%;
        display: flex;
        transform: translate(-50%,-50%);
        background: $conbg;
        backdrop-filter: blur(10px);
        border-radius: 8px;
        z-index: 1;
    }
    .login-container{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        width: 50%;
        height: 50%;
        background: $bg;
        border-radius: 8px;
        z-index: 0;
        // backdrop-filter: blur(2px);
    }
}
</style>
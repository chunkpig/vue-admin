<!--  -->
<template>
<div id='Login'>
    <div class="login-bg"></div>
    <div class="login-conbg" :class="animconbgShow?'leftanimconbg':'rightanimconbg'">
        <sing-up v-show="!animconbgShow" class='sign-conbg' :class="animconbgShow?'animsign':''" />
        <user-phont v-show="animconbgShow" class='sign-conbg' :class="animconbgShow?'':'animsign'" />
    </div>
    <div class="login-container">
        <!-- <transition name="animcontainer"> -->
        <div class="container" :class=" animconbgShow ? ' ' : ' animcontainer ' ">
                <p class="p-container">Log in with your account password</p>
                <div class="button-container" @click="animconbgShow =!animconbgShow">
                    SIGN IN
                </div>
           
        </div>
         <!-- </transition> -->
         <!-- <transition name="animcontainer"> -->
        <div class="container" :class=" animconbgShow ? ' animcontainer ' : ' ' " >
                <p class="p-container">Start logging in with your cell phone number</p>
                <div class="button-container" @click="animconbgShow =!animconbgShow">
                    USER PHONE
                </div>
            
        </div>
        <!-- </transition> -->
    </div>

</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import SingUp from './components/singup'
import UserPhont from './components/UserPhont'
export default {
//name放入模板名,方便在其他地方引用
name: '',
//import引入的组件需要注入到对象中才能使用
components: {SingUp,UserPhont},
data() {
//这里存放数据
return {
    animconbgShow:false
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
$clortext:#def;
$cursor: #333;
#Login{
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    .login-bg{
        width: 100%;
        height: 100%;
        background: linear-gradient(125deg, #AE7DFD, #6673cc);
        filter: blur(10px);
        z-index: -1; 
    }
    .login-conbg{
        position: absolute;
        top: 50%;
        left: 37%;
        width: 400px;
        height: 550px;
        max-width: 25%;
        max-height: 70%;
        display: flex;
        align-items: center;
        justify-content: center;
        transform: translate(-50%,-50%);
        background: $conbg;
        backdrop-filter: blur(10px);
        border-radius: 8px;
        z-index: 1;
        transition:transform 1s ease-out;
        overflow: hidden;
        .sign-conbg{
            transition: opacity 1s ease-in-out;
        }
        .animsign{
            opacity: 0;
        }
        
    }
    .login-container{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        width: 1000px;
        height: 500px;
        max-width: 55%;
        max-height: 55%;
        display: flex;
        justify-content: space-around;
        // align-items: center;
        background: $bg;
        // background: url('../../assets/Login/login.png') no-repeat;
        // background-size: cover;
        // opacity: 0.9;
        border-radius: 8px;
        z-index: 0;
        .container{
            width:350px;
            max-width: 45%;
            padding: 30px;
            color: $clortext;
            overflow: hidden;
            // opacity: 1;
            transition: opacity 1s ease-out;
            .p-container{
                font-size: 1.5rem;
                text-align: center;
                line-height: 3rem;
                // padding: 0 10px;
            }
            .button-container{
                width: 42%;
                margin: 30% auto 0;
                padding: 10px 25px;
                text-align: center;
                border-radius: 30px;
                font-size: 1.2rem;
                border: 1px solid #fff;
                // border-image: linear-gradient(#00CFFF, #FF34FA) 20 20;
                cursor: pointer;
            }
        }
        .animcontainer{
            opacity: 0;
        }
    }
    .leftanimconbg{
         transform: translate(52%,-50%);
    }
    .rightanimconbg{
         transform: translate(-50%,-50%);
    }
   .animcontainer-enter-active, .animcontainer-leave-active {
        // opacity: 1;
        // transition: opacity 1s;
         transition:opacity 3s ease-out;
    }
    .animcontainer-enter, .animcontainer-leave-to /* .fade-leave-active below version 2.1.8 */ {
       
        // transition: all 1s;
         opacity: 0;
    }
    @media screen and (min-width: 1367px) {
        .leftanimconbg{
            transform: translate(80%,-50%);
        }
    }
}
</style>

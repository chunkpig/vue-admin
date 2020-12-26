<!--  -->
<template>
<div class="app-wrapper" :class="{'hidcontainer':isCollapse}">
        <sidebar class="sidebar-container" />
        <div class="main-container">
            <nav-tab />
            <!-- <div class="navtab">
                <p @click="toggleSideBar">收缩</p>
            </div> -->
    </div>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import {NavTab,sidebar} from './components'
import { mapGetters } from 'vuex'
import {getStorage,setStorage} from '@/utils/sessionStorage'
// import sidebar from './components/Sidebar/index'
export default {
//name放入模板名,方便在其他地方引用
name: '',
//import引入的组件需要注入到对象中才能使用
components: { sidebar,NavTab },
data() {
//这里存放数据
return {

};
},
//监听属性 类似于data概念
computed: {
    ...mapGetters([
        'sidebar'
    ]),
    isCollapse(){
        return this.sidebar
    }
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
<style lang='scss' scoped>
.app-wrapper{
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    .is-open{
        width: calc('100%' - 45px);
    }
}

</style>
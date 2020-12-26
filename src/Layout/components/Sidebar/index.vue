<!--  -->
<template>
<div>
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        :default-active="activeMenu"
        :background-color="variables.menuBg"
        :text-color="variables.menuText"
        :unique-opened="true"
        :active-text-color="variables.menuActiveText"
        :collapse-transition="false"
        :collapse="isCollapse"
        mode="vertical"
        router
      >
        <sidebar-item v-for="route in permission_routes" :key="route.path" :itemRoute='route'/>
      </el-menu>
    </el-scrollbar>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）  
//例如：import 《组件名称》 from '《组件路径》';
import { mapGetters } from 'vuex'
import variables from '@/styles/variables.scss'
import { getStorage, setStorage } from '@/utils/sessionStorage'
import SidebarItem from './SidebarItem'

export default {
//name放入模板名,方便在其他地方引用
name: '',
//import引入的组件需要注入到对象中才能使用
components: {SidebarItem},
data() {
//这里存放数据
return {
  permission_routes:JSON.parse(getStorage('baserouter'))
};
},
//监听属性 类似于data概念
computed: {
  ...mapGetters([
    'sidebar'
  ]),
  variables(){
    return variables
  },
  activeMenu(){
    return this.$route.matched[1].path
  },
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
/* @import url(); 引入公共css类 */

</style>
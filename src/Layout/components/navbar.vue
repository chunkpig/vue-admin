<!--  -->
<template>
<div class="navtab">
    <div class="Breadcrumb">
        <svg-icon class="svgicon" @click="toggleSideBar" iconClass="align-right" classNames="alignSvg" :class="{'isActive':isCollapse}" />
        <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/Dashboard' }">仪表盘</el-breadcrumb-item>
            <el-breadcrumb-item>活动列表</el-breadcrumb-item>
            <el-breadcrumb-item>活动详情</el-breadcrumb-item>
        </el-breadcrumb>
    </div>
    <div class="technical">
        <screenfull class="full" />
        <el-dropdown class="right-menu">
            <div class="avatar-wrapper">
                <img src="https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif?imageView2/1/w/80/h/80"  class='user-avatar'>
            </div>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>
                个人用户
                </el-dropdown-item>
                <el-dropdown-item divided @click.native="logout">
                <p>退出登录</p>
                </el-dropdown-item>
        
            </el-dropdown-menu>
        </el-dropdown>
    </div>
    

</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import { mapGetters } from 'vuex'
import screenfull from '@/components/screenfull/index'
export default {
//name放入模板名,方便在其他地方引用
name: '',
//import引入的组件需要注入到对象中才能使用
components: {screenfull},
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
    toggleSideBar(){
        this.$store.dispatch('setting/togglesidebar')
    },
    logout(){
        this.$store.dispatch('user/logout')
        this.$router.replace({
                path:'/'
            })
    }
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
.navtab{
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #d6e2e9;
    .isActive {
        transform: rotate(180deg);
    }
    .Breadcrumb{
        display: flex;
        align-items: center;
        .svgicon{
            padding: 0 15px;
        }
    }
    .technical{
        display: flex;
        align-items: center;
        width: 8%;
        justify-content: space-between;
        .right-menu{
            margin-right: 15px;
            .avatar-wrapper{
                margin: auto;
                display: flex;
                .user-avatar{
                    cursor: pointer;
                    width: 40px;
                    height: 40px;
                    border-radius: 10px;

                }
            }
        }
        .full{
            cursor: pointer;
        }
        
    }
}
</style>
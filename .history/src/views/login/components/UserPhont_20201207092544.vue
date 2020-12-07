<template>
        <el-form ref="loginForm" :model="loginForm" :rules="loginRules" class="login-userphont" autocomplete="on" label-position="left">
            <div class="title-account">
                <h3 class="title">USER PHONE</h3>
            </div> 
            <el-form-item prop="username" class="form-elitem">
                <span class="form-span">YOUR PHONE</span>
                <el-input
                    ref="username"
                    v-model="loginForm.userphone"
                    placeholder="UserPhone"
                    name="phone"
                    type="text"
                    tabindex="1"
                    size='mini'
                    autocomplete="on"
                />
            </el-form-item> 
            <el-form-item prop="password" class="form-elitem getcode">
                 <span class="form-span">GET CODE</span>
                 <el-input
                    ref="username"
                    v-model="loginForm.usercode"
                    placeholder="usercode"
                    name="phone"
                    type="text"
                    tabindex="1"
                    size='mini'
                    @change="infocode"
                    autocomplete="on"
                />
                <span class="show-code" :style="codeloding?'background: #Fff':''" @click="showPwd">
                   获取验证码
                </span>
            </el-form-item>
            <el-button :loading="loading" type="primary" class="form-buttom"   @click.native.prevent="handleLogin">LOG IN</el-button>
        </el-form>
</template>
<script>
export default {
    data(){
        return {
            loginForm:{
                userphone: "",
                usercode: ''
            },
            loginRules: {
                // username: [ { required: true, trigger: 'blur', validator: validateUsername }],
                // password: [{ required: true, trigger: 'blur', validator: validatePassword }]
            },
            passwordType: 'password',
            loading: false,
            codeloding:false
        }
    },
    methods:{
        showPwd(){
            // this.$nextTick(() => {
                // console.log(this.codeloding)
                // this.codeloding = !this.codeloding
            // })
        },
        infocode(){
            this.codeloding = !this.codeloding
        },
        handleLogin(){

        }
    }

}
</script>
<style lang="scss" scoped>
$light_gray:#333;
$dark_gray:#889aa4;
.login-userphont{
        width: 80%;
        max-width: 100%;
        height: 80%;
        display: flex;
        flex-direction: column;
        align-items: center;
        box-sizing: border-box;
        overflow: hidden;
        .title-account {
            position: relative;
            .title {
                font-size: 26px;
                color: $light_gray;
                margin: 0px auto 40px auto;
                text-align: center;
                font-weight: bold;
            }
        }
        .show-code{
            position: absolute;
            right: 0px;
            top: 50px;
            height: 27px;
            font-size: 16px;
            color: $dark_gray;
            cursor: pointer;
            user-select: none;
            background: #F4F9FF;
            box-shadow: 0 0 4px #345;
            line-height: 27px;
            padding: 10px;
        }
        .form-span{ 
            display: inherit;
            font-size: 0.5rem;
            text-align: center;
            margin: 0 auto 10px;
        }
        .form-buttom{
            width:50%;
            margin:30px auto;
            background: linear-gradient(-45deg,#00CFFF,#FF34FA);          
            &:hover{
                background: linear-gradient(45deg,#00CFFF,#FF34FA);
            }
        }            
            
}
</style>
<style lang="scss">
.login-userphont{
    .form-elitem{
        width: 85%;
        .el-input__inner{
            background: #F4F9FF;
            width: 100%;
            height: 47px;
            font-size: 18px;
            // border-radius: 30px;
            padding: 12px 0px;
            text-align: center;
                // background: transparent;
                border: unset;
        }
        .el-input.is-active .el-input__inner, .el-input__inner:focus{
            background: #fff;
            box-shadow: 0 0 4px #345;
        }
        
    }
    .getcode{
        .el-input__inner{
            padding-right: 37% !important;
        }
    }
}

</style>
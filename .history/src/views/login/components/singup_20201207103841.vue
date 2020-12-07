<template>
        <el-form ref="loginForm" :model="loginForm" :rules="loginRules" class="login-account" autocomplete="on" label-position="left">
            <div class="title-account">
                <h3 class="title">SIGN IN</h3>
            </div> 
            <el-form-item prop="username" class="form-elitem">
                <span class="form-span">YOUR NAME</span>
                <el-input
                    ref="username"
                    v-model="loginForm.username"
                    placeholder="Username"
                    name="username"
                    type="text"
                    tabindex="1"
                    size='mini'
                    autocomplete="on"
                />
            </el-form-item> 
            <el-form-item prop="password" class="form-elitem">
                 <span class="form-span">YOUR PASSWORD</span>
                <el-input
                    :key="passwordType"
                    ref="password"
                    v-model="loginForm.password"
                    :type="passwordType"
                    placeholder="Password"
                    name="password"
                    tabindex="2"
                    autocomplete="on"
                    @keyup.enter.native="handleLogin"
                />
                <span class="show-pwd" @click="showPwd">
                    <svg-icon :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'" />
                </span>
            </el-form-item>
            <el-button :loading="loading" type="primary" class="form-buttom"  @click.native.prevent="handleLogin">SIGN IN</el-button>
        </el-form>
</template>
<script>
export default {
    data(){
        return {
            loginForm:{
                username: "admin",
                password: '111111'
            },
            loginRules: {
                // username: [ { required: true, trigger: 'blur', validator: validateUsername }],
                // password: [{ required: true, trigger: 'blur', validator: validatePassword }]
            },
            passwordType: 'password',
            loading: false,
        }
    },
    methods:{
        showPwd(){
            if (this.passwordType === 'password') {
                this.passwordType = ''
            } else {
                this.passwordType = 'password'
            }
            this.$nextTick(() => {
                this.$refs.password.focus()
            })
        },
        handleLogin(){

        }
    }

}
</script>
<style lang="scss" scoped>
$light_gray:#333;
$dark_gray:#889aa4;
.login-account{
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
        .show-pwd {
            position: absolute;
            right: 10px;
            top: 55px;
            font-size: 16px;
            color: $dark_gray;
            cursor: pointer;
            user-select: none;
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
            background: linear-gradient(-45deg #AE7DFD, #6673cc);          
            &:hover{
                background: linear-gradient(45deg,#00CFFF,#FF34FA);
            }
        }            
            
}
</style>
<style lang="scss">
.login-account{
    .form-elitem{
        width: 85%;
        .el-input__inner{
            background: #F4F9FF;
            width: 100%;
            height: 47px;
            font-size: 18px;
            border-radius: 30px;
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
}
</style>
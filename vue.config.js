const path = require('path')
const port = process.env.port || process.env.npm_config_port || 9527 // dev port
function resolve(dir) {
    return path.join(__dirname, dir);
}
module.exports={
    publicPath: '/', //根路径 cli3.0以上使用publicPath
    //打包后输出路径
    outputDir: 'dist',
    devServer:{
        port: port,
        open: true,
        overlay: {
            warnings: false,
            errors: true
        },
    },
     // configureWebpack 值为对象，会通过 webpack-merge 合并到最终的配置
    configureWebpack:{
        //在webpack的name字段中提供应用程序的标题，以便可以在index.html中访问它来注入正确的标题
        name:'vue-el-amin',
        resolve: {
            alias: {
                '@': resolve('src')
            }
        }
    },
    chainWebpack(config){
        // 设置svg
        config.module
            .rule("svg")
            .exclude.add(resolve("src/icons"))
            .end();
        config.module
            .rule("icons")
            .test(/\.svg$/)
            .include.add(resolve("src/icons"))
            .end()
            .use("svg-sprite-loader")
            .loader("svg-sprite-loader")
            .options({
            symbolId: "icon-[name]"
            })
        .end();
    }
    
}
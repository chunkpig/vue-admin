const baseRoute=[
    {
        path:'/Dashboard',
        name:'Dashboard',
        meta:{
            title:'仪表盘',
            icon:'',
            roles:[1,2,3]
        },
        component:()=>import('@/views/Dashboard/index')
    }
]
export default baseRoute
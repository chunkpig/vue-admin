const baseRoute=[
    {
        path:'/Dashboard',
        name:'Dashboard',
        meta:{
            title:'仪表盘',
            icon:'dashboard',
            roles:[1,2,3]
        },
        component:()=>import('@/views/Dashboard/index')
    },
    {
        path:'/films',
        name:'films',
        meta:{
            title:'影视分类',
            icon:'dashboard',
            roles:[1,2,3]
        },
        component:()=>import('@/views/films/index')
    },

]
export default baseRoute
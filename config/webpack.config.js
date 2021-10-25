export default {
    entry:{
        home:'./src/home/home.js',
        index:'./src/index/index.js',
        index2:'./src/index/index.js',
    },
    output:{
        filename:'[name].[contenthash].js',
        path:'/docs'
    }
}


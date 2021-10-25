export default class Webpack{
    constructor(props){
        this.props = props;
        this.entry = props.entry;
        this.output=props.output;
    }

    compile(){
        if((this.entry).constructor.toString().indexOf('Object') !=-1){
            //如果传来的是对象
            for (const key in this.entry) {
                let src = this.entry[key];
                let {output} = this.props;
                let num = Math.ceil(Math.random()*9);   
                console.log(`将${src}中的代码打包到${output.path}/${key}文件夹中文件名称叫${key}.${num}.js`);
            }
        }else{
            let {entry,output} = this.props;
            let {path,filename} = output;
            let [dir,file] = filename.split("/");
            console.log(`将${entry}中的代码打包到${path}/${dir}文件夹中文件名称叫${file}`);
        }
    }


}


// export default {
//     entry:{
//         home:'./src/home/home.js',
//         index:'./src/index/index.js'
//     },
//     output:{
//         filename:'[name].[contenthash].js',
//         path:'/docs'
//     }
// }
//作业二：
// 将./src/home/home.js中的代码打包到/docs/home/文件夹中，
//文件名称叫home.jfkasldfjklas.js


// 将./src/index/index.js中的代码打包到/docs/index/文件夹中，
//文件名称叫index.asdjfklasdfas.js
import webpackConfig from '../../config/webpack.config.js'

class Webpack{
    constructor(props){
        this.props = props;
        this.entry = props.entry;
        this.output=props.output;
    }

    compile(){
        let {entry,output} = this.props;
        let {path,filename} = output;
        let [dir,file] = filename.split("/");
        console.log(`将${entry}中的代码打包到${path}/${dir}文件夹中文件名称叫${file}`);
    }
}

let webpack = new Webpack(webpackConfig);

//  entry:'./src/home/index.js',
//     output:{
//         filename:'/home/index.js',
//         path:'/docs'
//     }
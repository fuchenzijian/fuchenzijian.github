import { articles  } from "../article_route";
import MarkDown  from "../../assets/js/MarkDown";
class Url {
    constructor(props) {
        this.props = props;
        this.json = {};
        this.keyArr = [];
        this.strArr = [];
        this.urlMsg='';
        this.exec();
    }


    exec() {
        if (this.props.constructor.toString().indexOf('Object') !=-1) {
            this.urlMerge();
            this.urlParse();
        } else {
            this.urlSplit();
        }
    }


    urlSplit() {
        let str = this.props.substring(this.props.indexOf('?') + 1);
        this.keyArr = str.split("&");
        this.keyArr.forEach(item => {
            let tempArr = item.split('=');
            this.json[tempArr[0]] = tempArr[1];
        });
    }


    urlMerge() {
        let str;
        for (const key in this.props) {
            str = key + '=' + this.props[key];
            this.strArr.push(str);
        }
    }

    get(name) {
        return this.json[name];
    }


    urlParse() {
        let str = '';
        for (let i = 0; i < this.strArr.length; i++) {
            if (i == this.strArr.length - 1) {
                str += this.strArr[i];
            } else {
                str += this.strArr[i] + '&';
            }
        }
        this.urlMsg = str;
    }

    parse(){
        return this.urlMsg;
    }
}

let newUrl =new Url(window.location.href);
let id =newUrl.get('id');


for(let i = 0; i < articles.length ; i++){
    if(articles[i].id == id){
        let oMsg = articles[i].article;
        let title = oMsg.querySelector('.article-title').innerHTML;
        document.querySelector('h1').innerHTML = title;
        document.querySelector('.article-content').innerHTML = articles[i].text;
        let md = new MarkDown(document.querySelector('.article-content').innerHTML);
        let res = md.parseHTML();
        console.log(res);
        // document.querySelector('article-content').innerHTML = res;
        break;
    }
}



var params = {
    type:'1',
    id:1,
    name:'xiaoming'
}


let url2 = new Url(params);
console.log(url2.parse());
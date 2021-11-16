import '../../assets/css/Ani.css';

import Animate from '../../assets/js/Animate';

import Translate from '../../assets/js/Translate';

import {articles} from '../article_route';

import {Ellipsis2} from '../../assets/js/Ellipsis'


let contents = articles.reverse();

let oWrap = document.querySelector('.list');

let oClone = oWrap.querySelector('.item');

let showMore = document.querySelector('.showmore');

oClone.remove();

var pagination={
    pageSize:2,//每页多少个数据
    pageNum:0,//第一页开始
    srcData:contents,//存放数据
    get pageCount(){
        //获取总页数的方法
       return Math.ceil(this.srcData.length/this.pageSize);
    },
    get data(){
        //获取要加载的数据
        return this.srcData.slice(this.begin,this.end);
    },
    get begin(){
        //从第几条开始
        return (this.pageNum-1)*this.pageSize;
    },
    get end(){
        //从第几条结束
        return this.begin+this.pageSize;
    },
    get isEnd(){
        return this.pageNum == this.pageCount;
    }
}

function appendArticleList(){
    pagination.pageNum++;
    let srcArr = [];
    pagination.data.forEach(item=>{
        let child = oClone.cloneNode(true);
        child.insertBefore(item.article,child.querySelector('.ContentItem-actions'));
        console.log('我是文章内容');
        console.log(item.text);
        child.querySelector('.article-contain').innerHTML = item.text;
        child.querySelector('.article-contain').style.cssText=`padding:0 20px;`;
        child.querySelector('.article-title').setAttribute('data-id',item.id);
        console.log(child);
        child.querySelector('.article-title').addEventListener('click',function(){
            window.location.href = `articledetails.html?id=${this.dataset.id}`;
        })
        let article = child.querySelector('.article-contain');
        oWrap.insertBefore(child,showMore);
        let ellipsis = new Ellipsis2({
            el:article,
            textCount:130,
            findAllButtonText:"查看所有",
            showFindAllButton:true
        })
        ellipsis.exec();
        srcArr.push(child);
    })
    Animate.create().use(Translate).mount(srcArr);
    if(pagination.isEnd){
        console.log(showMore);
        showMore.style.display='none';
    }
};

appendArticleList();


showMore.onclick=function(){
    appendArticleList();
}

let adArr = [
    {
        img:require('../../assets/img/icon_diamand.png'),
        text:'Live',
    },
    {
        img:require('../../assets/img/icon_diamand.png'),
        text:'书店',
    },
    {
        img:require('../../assets/img/icon_diamand.png'),
        text:'圆桌',
    },
    {
        img:require('../../assets/img/icon_diamand.png'),
        text:'专栏',
    },
    {
        img:require('../../assets/img/icon_diamand.png'),
        text:'付费资讯',
    },
    {
        img:require('../../assets/img/icon_diamand.png'),
        text:'百科',
    },

]

//广告内容更改
let oAdWrap = document.querySelector('.catgory-list');

let oAdItem = oAdWrap.querySelector('.list');

oAdItem.remove();
console.log(oAdItem);

let fragement2 = document.createDocumentFragment();

for(let i = 0; i < adArr.length;i++){
    let clone = oAdItem.cloneNode(true);
    clone.querySelector('.list-img').querySelector('img').src=adArr[i].img;
    clone.querySelector('.list-text').textContent = adArr[i].text;
    fragement2.appendChild(clone);
}

oAdWrap.appendChild(fragement2);
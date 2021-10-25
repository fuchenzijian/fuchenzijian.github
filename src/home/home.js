import '../../assets/css/Ani.css'
import Animate from '../../assets/js/Animate'
import Translate from '../../assets/js/Translate'
import {articles} from '../article_route'
import Ellipsis from '../../assets/js/Ellipsis'



let oWrap = document.querySelector('.main-left');

let oClone= oWrap.querySelector('.article-item');
oClone.remove();

String.prototype.ellipsis = function(num,size){
    // 一行最多50个字
    let str = this;
    if(str.length<size){
        return this;
    }else{
        let newStr= str.substring(0,num)+"...";
        return newStr;
    }
}

let fragement = document.createDocumentFragment();
for(let i = 0;i < articles.length; i++){
    let child = oClone.cloneNode(true);

    //把文章添加到是上面
    child.appendChild(articles[i].article);
    
    child.querySelector('.article-contain').innerHTML = articles[i].text;
   //给收回添加点击事件,点击后收回内容;

   child.querySelector('.article-title').setAttribute('data-id',`${articles[i].id}`)

   child.querySelector('.article-title').addEventListener('click',function(){
       window.location.href = `articledetails.html?id=${this.dataset.id}`;
   })

   fragement.appendChild(child);
}
oWrap.appendChild(fragement);

let ellipsis = new Ellipsis({
        el:'.article-contain',
        textCount:130,
        findAllButtonText:"查看所有",
        showFindAllButton:true
    })
ellipsis.exec();
Animate.create().use(Translate).mount('.article-item');

// 动态创建文本；
// 在创建一个 查看全部按钮；
// 给这个按钮添加事件；
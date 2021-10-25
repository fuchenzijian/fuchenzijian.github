import { articles } from "../article_route";

import Ellipsis from '../../assets/js/Ellipsis'

let oWrap = document.querySelector('#wrap');

let oClone=oWrap.querySelector('.text');

oClone.remove();

let fragement = document.createDocumentFragment();
for(let i=0;i<articles.length;i++){

    let child = oClone.cloneNode(true);

    child.appendChild(articles[i].article);

    child.querySelector('.article-contain').innerHTML = articles[i].text;

    fragement.appendChild(child);
}

oWrap.appendChild(fragement);

let ellipsis = new Ellipsis({
    el:'.article-contain',
    textCount:80,
    findAllButtonText:"查看所有",
    showFindAllButton:true
})
ellipsis.exec();
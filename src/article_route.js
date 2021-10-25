import articl1 from "./article/1.南拳.html";
import articl2 from './article/2.南拳.html';
import articl3 from './article/3.南拳.html';
import articl4 from './article/4.南拳.html';
import articl5 from './article/5.南拳.html';
import articl6 from './article/测试正则.html';
import {parseHTML,parseStr} from '../assets/js/ConvertHTML'

export let articles =[
    {
        id:1,
        title:'如何看待知乎上的男拳',
        article:parseHTML(articl1),
        text:parseStr(parseHTML(articl1)),
    },
    {
        id:2,
        title:'如何看待知乎上的男拳',
        article:parseHTML(articl2),
        text:parseStr(parseHTML(articl2)),
    },
    {
        id:3,
        title:'如何看待知乎上的男拳',
        article:parseHTML(articl3),
        text:parseStr(parseHTML(articl3)),
    },
    {
        id:4,
        title:'如何看待知乎上的男拳',
        article:parseHTML(articl4),
        text:parseStr(parseHTML(articl4)),

    },
    {
        id:5,
        title:'如何看待知乎上的男拳',
        article:parseHTML(articl5),
        text:parseStr(parseHTML(articl5)),
    },
    {
        id:6,
        title:'测试正则',
        article:parseHTML(articl6),
        text:parseStr(parseHTML(articl6)),
    },
];
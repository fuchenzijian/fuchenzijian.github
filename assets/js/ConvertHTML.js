export const parseHTML = function(text){
    let div =  document.createElement('div');
    div.innerHTML = text;
    return div.querySelector('template').content;
}


export const parseStr = function(html){
  return  html.querySelector('.article-contain').innerHTML;
}
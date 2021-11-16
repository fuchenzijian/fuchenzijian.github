  /**
     * @description 截取字符串,超出...
     * @param el: 元素
     * @param textCount : 字符串截取长度 number类型;
     * @param findAllButtonText: 非必填项,默认为'查看全部'
     * @param showFindAllButton :非必填项,是否显示'查看全部'按钮,默认为false
     * **/
    //  let ellipsis = new Ellipsis({
    //     el:document.querySelector('.list'),
    //     textCount:30,
    //     findAllButtonText:"查看所有",
    //     showFindAllButton:true
    // })
    
    // ellipsis.exec();
export  class Ellipsis{
    constructor(props){
        this.el = props.el;
        this.textCount=props.textCount;
        this.findAllButtonText=props.findAllButtonText || '查看所有';
        this.showFindAllButton=props.showFindAllButton || false;
        this.ellipsisButton = props.ellipsisButton || '折叠';
        this.contentArr = [];
        this.flag = true;
    }

    //执行操作
    exec(){
        let arr = this.elArr;
        this.copyContent();
        this.changeContent();
        if(this.showFindAllButton){
            arr.forEach((item,index)=>{
                this.addBtn(item,index);
            })
        }
    }

    get elArr(){
        return Array.from(document.querySelectorAll(this.el));
    }

    //复制内容:
    copyContent(){
        let arr = this.elArr;
        //这边的话，直接循环,
        arr.forEach(item=>{
            //先是把内容放在数组里面
            this.contentArr.push(item.innerHTML);
        })
    }
    

    //默认改变内容变成...
    changeContent(){
        let arr = this.elArr;
        arr.forEach((item,index)=>{
            item.innerHTML = this.format(this.contentArr[index]);
        })
    }

    format(str){
      return  str.length > this.textCount ? str.substring(0,this.textCount)+'...' : str;
    }

    //这个是添加按钮;
    addBtn(item,index){
        //然后创建东西;
        let _this = this;
        let span = document.createElement('span');
        span.textContent = this.buttonText;
        span.style="color:blue;cursor:pointer";
        item.appendChild(span);
        item.querySelector('span').addEventListener('click',function(){
            _this.flag = !_this.flag;
            item.childNodes[0].textContent = !_this.flag ? _this.contentArr[index] : _this.format(_this.contentArr[index]);
            this.textContent = _this.buttonText;
        })
    }

    get buttonText(){
        return this.flag ? this.findAllButtonText : this.ellipsisButton;
    }
} 

export class Ellipsis2 {
    constructor(props) {
        this.el = props.el;
        this.text = '';
        this.textCount = props.textCount;
        this.findAllButtonText = props.findAllButtonText || '查看全文';
        this.ellipsisButtonText = props.ellipsisButtonText || '收起';
        this.showFindAllButton = props.showFindAllButton || false;
        this.flag = true; //判断是否显示查看全部按钮的显示状态；
    }
    get buttonText() {
        return this.flag ? this.findAllButtonText : this.ellipsisButtonText;
    }
    beforeMount(){}
    exec() {
        this.text = this.el.textContent;
        if (!this.text) throw new Error('文本内容不能为空');
        // 把文本切割成50个长度；
        this.el.innerHTML = this.format(this.text, this.textCount);
        //如果 需要展示查看全部的那个按钮
        if (this.showFindAllButton) {
            //增加a标签；
            this.addButton();
        }
        this.beforeMount(this.el)
    }
    addButton() {
        var a = document.createElement('a');
        a.textContent = this.findAllButtonText;
        a.style.cssText = `
            color:blue;
            cursor: pointer;
        `
        var _this = this;
        this.el.appendChild(a, this.el.childNodes[0]);
        a.addEventListener('click', function () {
            _this.flag = !_this.flag;
            this.textContent = _this.buttonText;
            _this.el.childNodes[0].textContent = _this.flag ? _this.format(_this.text, _this.textCount) : _this.text;
        })
    }
    format(str, num) {
        return str.length < num ? str : (str.substring(0, num) + '...');
    }
}
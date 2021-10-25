export default  class Ani{
    constructor(props){
        this.props = props;
        this.targets = props.targets;
        this.count = props.count || 1;
        this.reverse=props.reverse || false;
    }

    //获取到第几次.
    get curIndex(){
        return this.props.count - this.count+1;
    }

    //执行动画
    exec(){
        let target = this.judgeArr;     
        this.animation(target);
    }

    //判断执行动画的数组;
    get judgeArr(){
        let target = this.targets.slice();
        if(Array.isArray(this.reverse)){
            target = (this.reverse).includes(this.curIndex) ? target.reverse() : target;
        }else{
            target = this.reverse ? target.reverse() : target;
        }
        return target;
    }
    
   //添加动画效果
    animation(target){
        //重新切割数组
        let _this = this;
        if(!target.length){
            if(_this.count>1){
                _this.count--;
                setTimeout(function(){
                    _this.exec();
                })                   
            }
            return;
        };
        let animationTarget = target.shift();
        animationTarget.el.classList.add(animationTarget.animationClassName);
        var handleEventListenner = function(){
                if(_this.count != 1){
                    animationTarget.el.classList.remove(animationTarget.animationClassName);
                }
            this.removeEventListener('animationend',handleEventListenner);
            _this.animation(target);
        }
        animationTarget.el.addEventListener('animationend',handleEventListenner);
    }
}



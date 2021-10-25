import Animate  from '../../assets/js/Animate'
export default class Translate extends Animate{
    constructor(){
        super();
        this.count = 1;
    }

    //获取到第几次.
    

    static install(){
        return  Translate;
    }

    //执行动画
    exec(){
        let arr = Array.from(document.querySelectorAll(this.el));
        let target = arr.slice();     
        this.animation(target);
    }

    //判断执行动画的数组;
  
    
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
        animationTarget.classList.add('flyin');
        var handleEventListenner = function(){
                if(_this.count != 1){
                    animationTarget.classList.remove('flyin');
                }
            this.removeEventListener('animationstart',handleEventListenner);
            setTimeout(function(){
                _this.animation(target);
            },20)
        }
        animationTarget.addEventListener('animationstart',handleEventListenner);
    }
}
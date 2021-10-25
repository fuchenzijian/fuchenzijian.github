
export default class Animate{
    constructor(){
        this.el = Animate.el;
        this.model=Animate.model;
    }
    load(){
       this.animateObj[this.type].exec(this.el);
   }

   static create(){
        return new Animate(); 
   }

   mount(el){
        Animate.el = el;
        new Animate.model().exec();
   }

   static el;

   static model;

   use(Translate){
       try{
         Animate.model= Translate.install();
       }catch(e){
           Translate();
       }
       return this;
   }
}


// let animate = Animate.create().use(Translate).mount(document.querySelector('div')
// export default class Translate extends Animate{
//     constructor(){
//         super()
//     }
//     exec(){
//         let _this = this;
//         this.el.classList.add('ani-translate');
//         super.emit('animationstart')
//         // this.el.addEventListener('animationstart',function(e){
//         //     e.target.classList.remove('ani-translate');
//         // })
//     }
// }
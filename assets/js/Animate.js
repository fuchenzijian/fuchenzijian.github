
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
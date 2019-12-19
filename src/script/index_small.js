import {$,bufferMove,ajax,jstool} from './toolmodule.js';


class float{
    constructor(){
     this.floatbox=$('.top-float-box')
    }

init(){
    console.log(this.floatbox);
    this.receive();
}

//获取
receive(ev){
let _this=this;
window.onscroll=function(){
   let top=document.documentElement.scrollTop;
   console.log(top);
   if(top>=300){
       _this.floatbox.style.display="block";   
   }

}
}
    
}








export {float};
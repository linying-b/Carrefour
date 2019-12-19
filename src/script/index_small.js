import {$,bufferMove,ajax,jstool} from './toolmodule.js';


class float{
    constructor(){
     this.floatbox=$('.top-float-box')
     this.topLi=$('.dropdown','all')
     this.toplist=$('.top-list','all')
     this.olLi=$('.top-list-li')
    }

init(){
    console.log(this.toplist);
    console.log(this.topLi);
    this.receive();
    this.topmove();
}

//获取
receive(ev){
let _this=this;
window.onscroll=function(){
   let top=document.documentElement.scrollTop;
   console.log(top);
     
   bufferMove(_this.floatbox,{
    top:0
   },function() {
        if(top>=300){
       _this.floatbox.style.top=0+'px';   
   }else{
    _this.floatbox.style.top=-68+'px'; 
   }
   })
}
}
//移入移出
// topmove(){
// let _this=this;
// for(let i=0;i<this.topLi.length;i++){
// _this.topLi[i].onmouseover=function () {
//     _this.toplist[i].className=;
//     for(let j=0;j<_this.olLi.length;j++){
//         _this.oiLi[i].onmouseover=function(){
//             _this.style.background="green";
//         }
//     }   
// } 

// _this.topLi[i].onmouseout=function () {
//     _this.toplist.style.display="none";   
// } 
    
}


// }
 
//切换过程

// tabswitch(){
//     for(j=0;j<this.)

// }
// }

// }







export {float};
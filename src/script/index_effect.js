import {$,bufferMove,ajax,jstool} from './toolmodule.js';

class lunbo{
      constructor(){
        
        this.lunbo=$('.lunbo');
        this.imgLi=$('.luobo-img','all');
        this.moveUl=$('.lunbo-ul');
        this.liwidth=this.imgLi[0].offsetWidth;
      }


init(){
    let firstLi=this.imgLi[0].cloneNode(true);
    let lastLi=this.imgLi[this.imgLi.length-1].cloneNode(true);
    this.moveUl.appendChild(firstLi);
    this.moveUl.insertBefore(lastLi,this.moveUl.children[0]);
    // let index=0;
    this.imgLi=$('.luobo-img','all');
    this.moveUl.style.width=this.liwidth*this.imgLi.length+'px';
    this.moveUl.style.left=-this.liwidth+'px';
    this.move();
    
}


//轮播图切换
tab(index){
// index++;   
let _this=this;
// console.log(index);
bufferMove(_this.moveUl,{
    left:-_this.liwidth*(index+1)
},function(){
    // console.log(left);
    if(index>_this.imgLi.length-1){
       _this.moveUl.left=-liwidth+'px';
       index=1;
   }
   if(index<0){
       _this.moveUl.left=-liwidth*_this.imgLi.length+'px';
       index=_this.imgLi.length;
   }
   
})
}

//自动切换

move(){
    let _this=this;
    let index=0;
setInterval(function(){
     index++;
    if(index>5){
        index=1;
    }
     _this.tab(index);
    //  alert(1);  
},2000)

}
}

























// class effect{
//      constructor(){
//       this.lunbo=$('.lunbo');
//       this.imgLi=$('.luobo-img','all');
//       this.moveUl=$('.lunbo-ul');
//      }

//  init(){
//   let index=0;
//   let flag=true;
//   let firstLi=this.imgLi[0].cloneNode(true);
//   let lastLi=this.imgLi[this.imgLi.length-1].cloneNode(true);
//   this.moveUl.appendChild(firstLi);
//   this.moveUl.insertBefore(lastLi,this.moveUl.children[0]);
//   let liwidth=this.imgLi[0].offsetWidth;
//   this.moveUl.style.width=this.imgLi.length*liwidth+'px';
//   this.moveUl.style.left=-liwidth+'px';
//   this.tab(liwidth);
//  }

// //轮播图部分
// //  tab(liwidth,index,flag){
// //  for(let j=0;j<this.imgLi.length;j++){
// //      this.imgLi[j].className='';
// //  }
// //  bufferMove(this.moveUl,{
// //      left:-liwidth*(index+1)
// //  },function(){
// //      if(index>this.imgLi.length-1){
// //          this.moveUl.style.left=-liwidth+'px';
// //          index=0;
// //      }
// //      if(index<0){
// //         this.moveUl.style.left=-liwidth*this.imgLi.length+'px';
// //         index=this.imgLi.length-1;

// //      }
// //      flag=true;
// //  });

// //  }



// }
export {lunbo};

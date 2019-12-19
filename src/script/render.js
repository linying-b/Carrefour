import {$,bufferMove,ajax,jstool} from './toolmodule.js';


class render{
   constructor(){
    this.goodslist=$('.huo-goodslist')
    this.lunbobox=$('.lunbo-box')
   }


   init() {
console.log(this.lunbobox);
console.log(this.goodslist);
   this.huose();
   this.newgoods();
}


// 活色生鲜部分渲染
huose(){
 let _this = this;
    ajax({
        url: "http://192.168.64.2/www/Carrefour/php/indexdata.php",
        dataType: 'json',
    }).then(function (data) {
        let strhtml = '<ul class="huo-goodslist">';
        for (let value of data) {
            strhtml += `
            <li class="goods-shadow">
            <a href="/item.html?itemId=428053">
            <span class="floor-img-box">
            <img src="${value.url}"></span>
            <p class="p-bottom">
            <span class="p-bottom-zhekou">
            <span class="tips">
            <span class="SimSun tips" style="background: rgb(242, 48, 48); color: rgb(255, 255, 255);">
            ${value.discount}
            </span>
            </span>
            </span>
            <span class="goods-name f10">${value.title}</span>
            <span class="f16 theme mgR10">
            <span class="f14">￥</span>${value.price}</span>
            <span class="f14"></span>
            </p>
            </a>
            </li>
           `;
        }
        strhtml += '</ul>';
        _this.goodslist.innerHTML = strhtml;
        
        // _this.discount=document.querySelectorAll('.SimSun')
        // console.log(_this.discount);
        // for(let i=0;i<_this.discount.length;i++){
        //     // console.log(_this.discount[i]);
        //     console.log(_this.discount[i].innerHTML);
        // if(_this.discount[i].innerHTML==''){
        //     _this.discount[i].style.display="none"; 
        //     console.log(1)
            
        // }
    //  }
    });


}

newgoods(){
    let _this = this;
    ajax({
        url: "http://192.168.64.2/www/Carrefour/php/newgoods.php",
        dataType: 'json',
    }).then(function (data) {
        let strhtml = '<ul class="lunbo-box">';
        for (let value of data) {
            strhtml += `
            <li class="lunbo-img-box dis-inb">
            <a href="#" style="text-decoration: none;" sid="${value.sid}">
            <span class="newgoods-img-box">
            <img src="${value.url}" alt="">
            </span>
            <p class="newgoods-content">
            <span class="discount">${value.discount}</span>
            <span class="goods-name">${value.title}</span>
            <span class="price">
            <span class="f14">¥</span>
            ${value.price}
            </span>
            </p>
            </a>
            </li>
           `;
        }
        strhtml += '</ul>';
        _this.lunbobox.innerHTML = strhtml;
    });
}
}    

export {render};
 class myClass{
     add(){
         console.log(2+3);
     }
 }

 let obj = new myClass();
 //obj.add();

 /*without static keyword , we can not call (method / function ) without object*/

 class mySpecial {
     static add1(){
         console.log(4+4);
     }
 }
 mySpecial.add1();

 /*Use static keyword , we can cal l(method or function) using class not using object*/
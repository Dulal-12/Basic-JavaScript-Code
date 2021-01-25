class myConstructor{
    constructor(a,b){
       this.firstNum = a ; 
       this.secondNum = b;
    }

    add(){
       let result =   this.firstNum + this.secondNum;
       console.log(result);
    }
}

 var obj = new myConstructor(12,2);
 obj.add();
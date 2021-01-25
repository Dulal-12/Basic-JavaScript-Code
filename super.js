/* We can call parent function in child class class using super keyword */

class parent {
    static str(){
        console.log('Md. Dulal Miah');
    }
}

class child extends parent{
    static demo(){
        super.str();
    }
  
}


child.demo();
let name = [ 'Ismail' , 'Hasib' , 'Redwan' , 'Dulal'];
//let friend = [...name, 'Sovon', 'Zillur'];
let friend = ['Sovon' , 'Zillur'];
//console.log(friend);
/*spread operator looks like (...) this three dots call spread operator. 
This spread operator spread arry value ...when we need add two array in one array we can use spread operator . not use push method*/

/*without using spread operator we can use push method */

for(let i = 0 ; i<name.length ;i++){
    friend.push(name[i]);
}

console.log(friend);
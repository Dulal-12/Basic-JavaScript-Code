const linearSearch = (list , num) =>{

    const len = list.length - 1;
    let i = 0;
    while(i <= len){
        if(list[i] === num){
            return i;
        }
        i++;
    }

    return -1;
}

const index = linearSearch ( [12,3,4,5,6] , 42);
console.log('Your seaching Value position is : ' , index);
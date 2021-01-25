const add = (...value) =>{
    let sum  = value.reduce((initial , val) => initial +val,0);
    console.log(sum);
}

add(1,2,3);

/*When we need pass many value in function  , we have to declare many parameter  , ES6 create special operator like rest operator.
All value in [array].Like simple array */
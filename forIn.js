const details = {name : 'Dulal' , Age: '21' , Religon : 'Islam'};
/*for ... in loops use in object . Because this loop give props(property of object)*/
for(let props in details){
    console.log(props ,":" ,details[props]);
}
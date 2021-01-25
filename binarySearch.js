const binarySearch = (list , num) =>{


                let left = 0;
                let right = list.length - 1;

                while (left <= right){

                    let mid = Math.floor((left + right)/2);

                    if (list[mid] === num){

                        return mid;
                    }

                    else if (list[mid] < num){

                        left = mid+1;

                    }

                    else{
                        right = mid - 1
                    }

                }

                return -1;

}

const index = binarySearch ( [12,13,16,24,25] , 23);

console.log('Your searching value position is : ' , index );
let alpha = new Set([1,2,3,4,1,12,3,4,4]);
// console.log(alpha);

/*set avoid same value */
let alpha1 = new Set();
alpha1.add(2);
alpha1.add(5);
// alpha1.clear();
// alpha1.delete(2);
console.log(alpha1.has(2));



//clear () method delete all value in set.
//delete(value) specific value delete .
//size method show set length
//has(value)
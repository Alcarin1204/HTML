const arr = [-1,2,-4,6,15,21];
const array2 = [];

Filter(arr);

function Filter(arr){ 
arr.forEach(i =>{
    if(i>0 && i%2===0){
        array2.push(i);
    }
});
console.log(array2)
}


function fil(i){
	return i>0 && i%2===0
}
const array3 = [-1,2,-4,6,15,21];
const array4 = array3.filter(fil);
console.log(array4);


const array5 = array3.filter(i=>{
	return i>0 && i%2===0
});
console.log(array5);

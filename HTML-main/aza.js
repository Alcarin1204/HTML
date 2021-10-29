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




const a = 1;
const b = 1;
function fib(a, b){
    if(a===1 && b===1){
        console.log(a);
        sleep(1000);
        console.log(b);
        sleep(1000);
        //const c = a+b;
        //sleep(1000);
    }
        const c=a+b;
        console.log(c);
        return setTimeout(() => fib(b,c), 1000);

}   

function sleep(millis) {
    let t = (new Date()).getTime();
    let i = 0;
    while (((new Date()).getTime() - t) < millis) {
        i++;
    }
}
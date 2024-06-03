// it is a blocking  code
for(let i=0; i<100000000; i++){

}

console.log('task to be performed after loop');


console.log(" i have   to wait  for this long loop to finish :()");

// non blocking code 

setTimeout(()=>{
  console.log('task to be performed after loop');
} , 8000);

console.log('i do not have to wait for this long loop to finish');

function calculateTotal(products){
  let total=0;
  products.forEach((product)=> {
    total += product.quantity  *  product.quantity
  });

  return total;
}


const productsList =[
  {name:'shoes' , price:50 , quantity:2},
  {name:'Hat' , price:25 , quantity:1},
  {name:'Boots' , price:30 , quantity:2},

]

function printToValue(value){
  console.log(value);
}

// expected result =100+25+60=185

const grandTotal = calculateTotal(productsList);

printToValue(grandTotal);



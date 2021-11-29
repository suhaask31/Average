var weight = [35,38,42,45,43,34,36,41,48,32];
var sum = 0;
for(var a = 0 ; a <= 9 ; a++){
  // console.log(weight[a]);
sum = sum + weight[a];


  
}
var avg = sum / weight.length
console.log(avg);
function setup() {
  createCanvas(400,400);

}

function draw() 
{
  background(30);
}

 


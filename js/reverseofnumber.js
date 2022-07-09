num=764;
rev=0;
var rem =0;
while (num!=0){
    rem=num%10;
    rev=rev*10+rem;
    num=(num-rem)/10;
}
console.log("revrse of a number: ",rev);
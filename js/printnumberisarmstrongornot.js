var e, x, d = 0;
var b = prompt("Enter a number");
x=b;

while (x > 0) {
  e = x % 10;
  x = parseInt(x/10);
  d = d + (e*e*e);
}

if (b==d)
   alert("given number is an armstrong number");
else
alert("given number is not an armstrong number");